"use client";

import { memo, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  CLIENT_REGIONS,
  TRIPS_BY_YEAR,
  TRUST_STATS,
} from "@/lib/trust-stats-data";

const { yearsGuiding, internationalGuests, localGuests } = TRUST_STATS;
const guestTotal = internationalGuests + localGuests;
const intlShareDeg = (internationalGuests / guestTotal) * 360;

const W = 920;
const VH = 300;
const PAD = { l: 56, r: 40, t: 40, b: 72 };
const PLOT_W = W - PAD.l - PAD.r;
const PLOT_H = VH - PAD.t - PAD.b;

type Tip = {
  year: number;
  trips: number;
  international: number;
  local: number;
  x: number;
  y: number;
};

/** Data-viz accents: orange and yellow only (rest stays neutral zinc/white for readability). */
const V_ORANGE = "#f97316";
const V_YELLOW_DARK = "#fbbf24";
const V_YELLOW = "#fcd34d";

function useTripChartPoints() {
  return useMemo(() => {
    const maxT = Math.max(...TRIPS_BY_YEAR.map((d) => d.trips), 1);
    const yMax = Math.ceil(maxT * 1.12 / 5) * 5;
    const n = TRIPS_BY_YEAR.length;
    return TRIPS_BY_YEAR.map((d, i) => {
      const x = PAD.l + (i / (n - 1)) * PLOT_W;
      const y = PAD.t + PLOT_H - (d.trips / yMax) * PLOT_H;
      return {
        year: d.year,
        trips: d.trips,
        international: d.international,
        local: d.local,
        x,
        y,
        yMax,
      };
    });
  }, []);
}

function TrustStatsVisualizationInner() {
  const gid = useId().replace(/:/g, "");
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [tip, setTip] = useState<Tip | null>(null);

  const pts = useTripChartPoints();
  const yMax = pts[0]?.yMax ?? 55;

  const curvePath = useMemo(() => {
    if (!pts.length) return "";
    return (
      "M " +
      pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L ")
    );
  }, [pts]);

  const areaPath = useMemo(() => {
    if (!curvePath) return "";
    const last = pts[pts.length - 1];
    const first = pts[0];
    return `${curvePath} L ${last.x.toFixed(1)} ${PAD.t + PLOT_H} L ${first.x.toFixed(1)} ${PAD.t + PLOT_H} Z`;
  }, [curvePath, pts]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTip(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const showMotion = active && !reducedMotion;
  /** Scale both bars vs the larger cohort so neither bar exceeds 100% width. */
  const maxGuests = Math.max(internationalGuests, localGuests, 1);
  const intlBarPct = (internationalGuests / maxGuests) * 100;
  const localBarPct = (localGuests / maxGuests) * 100;

  const yTicks = [0, Math.round(yMax / 2), yMax];

  return (
    <div
      ref={rootRef}
      className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-transparent to-orange-500/[0.06] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-sm sm:p-8 lg:p-10"
      onMouseLeave={() => setTip(null)}
    >
      <div className="mb-8 flex flex-col gap-2 text-center sm:mb-10 lg:text-left">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Live footprint
        </p>
        <p className="text-lg font-semibold text-white sm:text-xl">
          Growth curve &amp; guest composition
        </p>
        <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
          The line is total departures per year (2019–2026); hover a point to
          see how that year splits between international and local guests—sums
          match the headline totals ({internationalGuests}+ international,{" "}
          {localGuests}+ local).
        </p>
      </div>

      <figure
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/[0.06] bg-black/50 px-1 pt-2 sm:px-2"
        aria-labelledby={`chart-summary-${gid}`}
      >
        <span id={`chart-summary-${gid}`} className="sr-only">
          Line chart of total trips per year from 2019 through 2026. Yearly
          international and local portions sum to 438 and 173 across all
          years; 2020 shows no trips during COVID.
        </span>
        <svg
          viewBox={`0 0 ${W} ${VH}`}
          className="h-auto w-full touch-manipulation overflow-hidden"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient
              id={`line-${gid}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={V_ORANGE} stopOpacity="0.98" />
              <stop offset="55%" stopColor={V_YELLOW_DARK} stopOpacity="0.92" />
              <stop offset="100%" stopColor={V_YELLOW} stopOpacity="0.92" />
            </linearGradient>
            <linearGradient
              id={`area-${gid}`}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={V_ORANGE} stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0a0a0c" stopOpacity="0" />
            </linearGradient>
          </defs>

          {yTicks.map((v) => {
            const y = PAD.t + PLOT_H - (v / yMax) * PLOT_H;
            return (
              <g key={v}>
                <line
                  x1={PAD.l}
                  y1={y}
                  x2={W - PAD.r}
                  y2={y}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
                <text
                  x={PAD.l - 10}
                  y={y + 4}
                  textAnchor="end"
                  fill="#71717a"
                  fontSize="11"
                  fontFamily="system-ui, sans-serif"
                >
                  {v}
                </text>
              </g>
            );
          })}

          <line
            x1={PAD.l}
            y1={PAD.t + PLOT_H}
            x2={W - PAD.r}
            y2={PAD.t + PLOT_H}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
          />

          <path d={areaPath} fill={`url(#area-${gid})`} opacity="0.95" />
          <path
            d={curvePath}
            fill="none"
            stroke={`url(#line-${gid})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1000}
            strokeDasharray={1000}
            strokeDashoffset={showMotion ? 0 : 1000}
            className={
              reducedMotion
                ? ""
                : "transition-[stroke-dashoffset] duration-[1.05s] ease-out"
            }
          />

          {pts.map((p) => (
            <text
              key={`y-${p.year}`}
              x={p.x}
              y={VH - 18}
              textAnchor="middle"
              fill="#a1a1aa"
              fontSize="11"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
              transform={`rotate(-32 ${p.x} ${VH - 18})`}
            >
              {p.year}
            </text>
          ))}

          {pts.map((p, i) => (
            <g key={p.year}>
              <circle
                cx={p.x}
                cy={p.y}
                r="18"
                fill="transparent"
                className="cursor-pointer outline-none"
                onMouseEnter={() =>
                  setTip({
                    year: p.year,
                    trips: p.trips,
                    international: p.international,
                    local: p.local,
                    x: p.x,
                    y: p.y,
                  })
                }
                onClick={() =>
                  setTip((prev) =>
                    prev?.year === p.year
                      ? null
                      : {
                          year: p.year,
                          trips: p.trips,
                          international: p.international,
                          local: p.local,
                          x: p.x,
                          y: p.y,
                        },
                  )
                }
                onFocus={() =>
                  setTip({
                    year: p.year,
                    trips: p.trips,
                    international: p.international,
                    local: p.local,
                    x: p.x,
                    y: p.y,
                  })
                }
                tabIndex={0}
              />
              <circle
                cx={p.x}
                cy={p.y}
                r={tip?.year === p.year ? 6.5 : showMotion ? 4.5 : 3}
                fill={
                  p.trips === 0 ? "rgba(249,115,22,0.18)" : V_YELLOW
                }
                stroke={V_ORANGE}
                strokeWidth="1.75"
                className={
                  reducedMotion
                    ? "pointer-events-none"
                    : "pointer-events-none transition-opacity duration-[180ms]"
                }
                style={
                  reducedMotion ? undefined : { transitionDelay: `${i * 40}ms` }
                }
                opacity={showMotion ? 1 : 0.35}
              />
            </g>
          ))}

          {tip && (
            <g
              pointerEvents="none"
              transform={`translate(${Math.min(W - 58, Math.max(58, tip.x))}, ${tip.y < 120 ? tip.y + 42 : tip.y - 62})`}
            >
              <rect
                x="-52"
                y="-38"
                width="104"
                height={tip.trips === 0 ? "56" : "72"}
                rx="10"
                fill="rgba(12,12,14,0.96)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <text
                x="0"
                y="-16"
                textAnchor="middle"
                fill="#fafafa"
                fontSize="13"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                {tip.year}
              </text>
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fill="#a1a1aa"
                fontSize="11"
                fontFamily="system-ui, sans-serif"
              >
                {tip.trips === 0
                  ? "No trips"
                  : `${tip.trips} trip${tip.trips === 1 ? "" : "s"}`}
              </text>
              {tip.trips > 0 && (
                <text
                  x="0"
                  y="22"
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="8"
                  fontFamily="system-ui, sans-serif"
                >
                  {tip.international} foreign · {tip.local} local
                </text>
              )}
            </g>
          )}
        </svg>
      </figure>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="mx-auto flex w-full max-w-[280px] flex-col items-center lg:col-span-5">
          <div className="relative aspect-square w-full">
            <div
              className="absolute inset-0 rounded-full shadow-[0_0_60px_-12px_rgba(249,115,22,0.32)]"
              style={{
                background: `conic-gradient(from -90deg, ${V_ORANGE} 0deg ${intlShareDeg}deg, ${V_YELLOW} ${intlShareDeg}deg 360deg)`,
              }}
              aria-hidden
            />
            <div className="absolute inset-[16%] flex flex-col items-center justify-center rounded-full bg-[#070708] ring-1 ring-white/10">
              <span className="text-5xl font-black tracking-tight text-white tabular-nums sm:text-6xl">
                {yearsGuiding}
              </span>
              <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Years guiding
              </span>
            </div>
          </div>
          <dl className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span
                className="size-2.5 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.55)]"
                style={{ backgroundColor: V_ORANGE }}
              />
              <dt className="sr-only">International guests</dt>
              <dd>
                <span className="font-semibold text-white">
                  {internationalGuests}+
                </span>{" "}
                international
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="size-2.5 rounded-full shadow-[0_0_12px_rgba(252,211,77,0.45)]"
                style={{ backgroundColor: V_YELLOW }}
              />
              <dt className="sr-only">Local adventurers</dt>
              <dd>
                <span className="font-semibold text-white">
                  {localGuests.toLocaleString()}+
                </span>{" "}
                local
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col justify-center gap-8 lg:col-span-7">
          <div>
            <div className="mb-2 flex justify-between text-xs font-medium text-zinc-400">
              <span>International guests</span>
              <span className="tabular-nums text-white">{internationalGuests}+</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.05]">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none"
                style={{
                  width: showMotion || reducedMotion ? `${intlBarPct}%` : "0%",
                  backgroundColor: V_ORANGE,
                }}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-xs font-medium text-zinc-400">
              <span>Local adventurers</span>
              <span className="tabular-nums text-white">
                {localGuests.toLocaleString()}+
              </span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.05]">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none"
                style={{
                  width: showMotion || reducedMotion ? `${localBarPct}%` : "0%",
                  backgroundColor: V_YELLOW,
                  transitionDelay: reducedMotion ? "0ms" : "120ms",
                }}
              />
            </div>
          </div>
          <p className="text-[0.7rem] leading-relaxed text-zinc-600 sm:text-xs">
            International share of hosted guests in this snapshot:{" "}
            <strong className="font-medium text-zinc-400">
              {((internationalGuests / guestTotal) * 100).toFixed(1)}%
            </strong>
            . Bars use local volume as the 100% scale so both cohorts stay
            comparable on one axis.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/[0.06] pt-8">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:text-left">
          Client regions
        </p>
        <ul
          className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-2.5 lg:justify-start"
          aria-label="Countries and regions our guests have joined from"
        >
          {CLIENT_REGIONS.map((c) => (
            <li key={c.code}>
              <span
                className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl shadow-sm transition hover:border-orange-500/35 hover:bg-white/[0.08] sm:size-12 sm:text-2xl"
                role="img"
                aria-label={c.name}
                title={c.name}
              >
                <span aria-hidden>{c.flag}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const TrustStatsVisualization = memo(TrustStatsVisualizationInner);
TrustStatsVisualization.displayName = "TrustStatsVisualization";
