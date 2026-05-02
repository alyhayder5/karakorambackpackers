"use client";

import Image from "next/image";
import {
  memo,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  CLIENT_REGIONS,
  TRIPS_BY_YEAR,
  TRUST_STATS,
} from "@/lib/trust-stats-data";

const { yearsGuiding, internationalGuests, localGuests } = TRUST_STATS;
const guestTotal = internationalGuests + localGuests;
const intlSharePct = (internationalGuests / guestTotal) * 100;
const intlSweepDeg = (internationalGuests / guestTotal) * 360;

const W = 960;
const VH = 340;
const PAD = { l: 52, r: 44, t: 36, b: 76 };
const PLOT_W = W - PAD.l - PAD.r;
const PLOT_H = VH - PAD.t - PAD.b;

const C_ORANGE = "#ff5c3d";
const C_AMBER = "#fbbf24";
const C_GOLD = "#fcd34d";
const C_DEEP = "#0a0a0c";

type Tip = {
  year: number;
  trips: number;
  international: number;
  local: number;
  x: number;
  y: number;
};

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function catmullRomToBezierD(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";
  const p = points;
  const n = p.length;
  let d = `M ${p[0].x} ${p[0].y}`;
  for (let i = 0; i < n - 1; i++) {
    const p0 = p[i === 0 ? 0 : i - 1];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2 < n ? i + 2 : n - 1];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

function ptOnCircle(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

/** PNG flags from CDN — emoji flags often render as blank boxes on Windows without color emoji fonts. */
function RegionFlagImage({
  code,
  name: regionName,
}: {
  code: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);
  const iso = code.toLowerCase();
  const src = `https://flagcdn.com/w40/${iso}.png`;

  if (failed) {
    return (
      <span
        className="flex h-5 min-w-[2rem] shrink-0 items-center justify-center rounded border border-white/15 bg-white/10 px-1 text-[0.6rem] font-bold tabular-nums text-zinc-200"
        aria-hidden
      >
        {code}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={40}
      height={30}
      className="h-5 w-[1.75rem] shrink-0 rounded-sm object-cover shadow-[0_2px_8px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
      loading="lazy"
      onError={() => setFailed(true)}
      title={regionName}
    />
  );
}

function arcPath(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
) {
  const start = ptOnCircle(cx, cy, r, startDeg);
  const end = ptOnCircle(cx, cy, r, endDeg);
  let sweep = endDeg - startDeg;
  while (sweep < 0) sweep += 360;
  while (sweep > 360) sweep -= 360;
  const largeArc = sweep > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function TrustStatsVisualizationInner() {
  const gid = useId().replace(/:/g, "");
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [tip, setTip] = useState<Tip | null>(null);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const pts = useMemo(() => {
    const maxT = Math.max(...TRIPS_BY_YEAR.map((d) => d.trips), 1);
    const yMax = Math.ceil((maxT * 1.15) / 5) * 5;
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

  const yMax = pts[0]?.yMax ?? 130;

  const curvePath = useMemo(
    () => catmullRomToBezierD(pts.map((p) => ({ x: p.x, y: p.y }))),
    [pts],
  );

  const areaPath = useMemo(() => {
    if (!curvePath || !pts.length) return "";
    const last = pts[pts.length - 1];
    const first = pts[0];
    const baseY = PAD.t + PLOT_H;
    return `${curvePath} L ${last.x} ${baseY} L ${first.x} ${baseY} Z`;
  }, [curvePath, pts]);

  const yTicks = useMemo(() => {
    const mid = Math.round(yMax / 2);
    return [0, mid, yMax];
  }, [yMax]);

  const showMotion = active && !prefersReducedMotion;

  const compositionR = 118;
  const compositionCx = 140;
  const compositionCy = 140;
  const trackR = compositionR + 10;

  const intlArc = useMemo(
    () => arcPath(compositionCx, compositionCy, compositionR, 0, intlSweepDeg),
    [compositionCx, compositionCy, compositionR],
  );
  const localArc = useMemo(
    () =>
      arcPath(
        compositionCx,
        compositionCy,
        compositionR,
        intlSweepDeg,
        360,
      ),
    [compositionCx, compositionCy, compositionR],
  );

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTip(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const regionCount = CLIENT_REGIONS.length;

  return (
    <div ref={rootRef} className="relative">
      {/* Hero header */}
      <header className="mx-auto mb-12 max-w-4xl text-center lg:mb-16">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-amber-500/80">
          Global travel impact
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
          Live Journey Footprint
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          A growing record of guided departures, hosted guests, and global
          backpacking experiences across the Karakoram and beyond.
        </p>
      </header>

      {/* Stat cards */}
      <div className="mb-14 grid grid-cols-2 gap-3 sm:gap-4 lg:mb-16 lg:grid-cols-4">
        {[
          {
            value: `${yearsGuiding}+`,
            label: "Years guiding",
            hint: "On the ground",
          },
          {
            value: `${guestTotal.toLocaleString()}+`,
            label: "Total guests",
            hint: "Hosted adventures",
          },
          {
            value: `${internationalGuests}+`,
            label: "International guests",
            hint: "From abroad",
          },
          {
            value: `${regionCount}+`,
            label: "Client regions",
            hint: "Countries represented",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition duration-500 hover:border-amber-500/25 hover:shadow-[0_24px_60px_-24px_rgba(255,92,61,0.25)] sm:p-5"
          >
            <div
              className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-accent/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <p className="relative text-2xl font-semibold tracking-tight text-white tabular-nums sm:text-3xl">
              {s.value}
            </p>
            <p className="relative mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {s.label}
            </p>
            <p className="relative mt-1 text-xs text-zinc-600">{s.hint}</p>
          </div>
        ))}
      </div>

      {/* Growth route chart */}
      <div className="relative mb-14 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] via-transparent to-orange-500/[0.04] p-1 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl sm:mb-16 sm:rounded-[2rem] lg:p-2">
        <div className="relative rounded-[1.35rem] border border-white/[0.06] bg-black/45 px-2 pb-1 pt-3 sm:rounded-[1.65rem] sm:px-4 sm:pt-4">
          <div className="mb-4 flex flex-col gap-1 px-2 text-left sm:px-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Departures over time
            </p>
            <p className="text-lg font-medium text-white sm:text-xl">
              The route keeps climbing
            </p>
            <p className="max-w-xl text-xs leading-relaxed text-zinc-500 sm:text-sm">
              Annual guided departures (2019–2026). Each point is a year on the
              trail—hover to see how international and local guests shaped that
              season.
            </p>
          </div>

          <figure
            className="relative mx-auto w-full max-w-5xl"
            aria-labelledby={`chart-summary-${gid}`}
          >
            <span id={`chart-summary-${gid}`} className="sr-only">
              Smooth growth curve of total trips per year from 2019 through
              2026. Yearly international and local portions sum to{" "}
              {internationalGuests} and {localGuests} across all years; 2020
              shows no departures during COVID.
            </span>
            <svg
              viewBox={`0 0 ${W} ${VH}`}
              className="h-auto w-full touch-manipulation"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <linearGradient
                  id={`route-line-${gid}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor={C_ORANGE} stopOpacity="1" />
                  <stop offset="45%" stopColor="#fb923c" stopOpacity="0.98" />
                  <stop offset="100%" stopColor={C_GOLD} stopOpacity="0.95" />
                </linearGradient>
                <linearGradient
                  id={`route-area-${gid}`}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={C_ORANGE} stopOpacity="0.35" />
                  <stop offset="55%" stopColor={C_AMBER} stopOpacity="0.08" />
                  <stop offset="100%" stopColor={C_DEEP} stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id={`route-glow-${gid}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor={C_ORANGE} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={C_GOLD} stopOpacity="0.35" />
                </linearGradient>
                <filter
                  id={`soft-glow-${gid}`}
                  x="-40%"
                  y="-40%"
                  width="180%"
                  height="180%"
                >
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter
                  id={`point-glow-${gid}`}
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                >
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Faint route grid */}
              <g opacity="0.35">
                {Array.from({ length: 5 }).map((_, i) => {
                  const yy =
                    PAD.t + (i / 4) * PLOT_H * 0.92 + PLOT_H * 0.04;
                  return (
                    <line
                      key={i}
                      x1={PAD.l}
                      y1={yy}
                      x2={W - PAD.r}
                      y2={yy}
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                      strokeDasharray="4 10"
                    />
                  );
                })}
              </g>

              {yTicks.map((v) => {
                const y = PAD.t + PLOT_H - (v / yMax) * PLOT_H;
                return (
                  <g key={v}>
                    <line
                      x1={PAD.l}
                      y1={y}
                      x2={W - PAD.r}
                      y2={y}
                      stroke="rgba(255,255,255,0.07)"
                      strokeWidth="1"
                    />
                    <text
                      x={PAD.l - 10}
                      y={y + 4}
                      textAnchor="end"
                      fill="#71717a"
                      fontSize="11"
                      fontFamily="ui-sans-serif, system-ui, sans-serif"
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
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.5"
              />

              <path d={areaPath} fill={`url(#route-area-${gid})`} opacity="0.92" />

              <path
                d={curvePath}
                fill="none"
                stroke={`url(#route-glow-${gid})`}
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.35"
                filter={`url(#soft-glow-${gid})`}
              />
              <path
                d={curvePath}
                fill="none"
                stroke={`url(#route-line-${gid})`}
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1000}
                strokeDasharray={1000}
                strokeDashoffset={showMotion ? 0 : 1000}
                filter={`url(#soft-glow-${gid})`}
                className={
                  prefersReducedMotion
                    ? ""
                    : "transition-[stroke-dashoffset] duration-[1.35s] ease-out"
                }
              />

              {pts.map((p) => (
                <text
                  key={`yl-${p.year}`}
                  x={p.x}
                  y={VH - 22}
                  textAnchor="middle"
                  fill="#a1a1aa"
                  fontSize="11"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontWeight="500"
                >
                  {p.year}
                </text>
              ))}

              {pts.map((p, i) => (
                <g key={p.year}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="22"
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
                    r={tip?.year === p.year ? 7 : showMotion ? 5 : 3.5}
                    fill={
                      p.trips === 0
                        ? "rgba(255,92,61,0.2)"
                        : "rgba(252,211,77,0.95)"
                    }
                    stroke={C_ORANGE}
                    strokeWidth="2"
                    filter={`url(#point-glow-${gid})`}
                    className={
                      prefersReducedMotion
                        ? "pointer-events-none"
                        : "pointer-events-none transition-all duration-200"
                    }
                    style={
                      prefersReducedMotion
                        ? undefined
                        : { transitionDelay: `${i * 45}ms` }
                    }
                    opacity={showMotion ? 1 : 0.4}
                  />
                </g>
              ))}

              {tip && (
                <g
                  pointerEvents="none"
                  transform={`translate(${Math.min(W - 64, Math.max(64, tip.x))}, ${tip.y < 130 ? tip.y + 48 : tip.y - 68})`}
                >
                  <rect
                    x="-58"
                    y="-42"
                    width="116"
                    height={tip.trips === 0 ? "60" : "78"}
                    rx="12"
                    fill="rgba(8,8,10,0.94)"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="-18"
                    textAnchor="middle"
                    fill="#fafafa"
                    fontSize="14"
                    fontWeight="600"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    {tip.year}
                  </text>
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fill="#a1a1aa"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    {tip.trips === 0
                      ? "No departures"
                      : `${tip.trips} departures`}
                  </text>
                  {tip.trips > 0 && (
                    <text
                      x="0"
                      y="24"
                      textAnchor="middle"
                      fill="#71717a"
                      fontSize="9"
                      fontFamily="ui-sans-serif, system-ui, sans-serif"
                    >
                      {tip.international} intl · {tip.local} local
                    </text>
                  )}
                </g>
              )}
            </svg>
          </figure>
        </div>
      </div>

      {/* Guest composition + arcs */}
      <div className="mb-14 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-10 lg:items-center">
        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-[0_28px_70px_-36px_rgba(0,0,0,0.85)] backdrop-blur-md sm:p-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-zinc-500">
              Guest composition
            </p>
            <p className="mt-2 text-xl font-medium text-white sm:text-2xl">
              Who walks the trail with us
            </p>

            <div className="relative mx-auto mt-8 flex max-w-[280px] justify-center">
              <svg
                viewBox="0 0 280 280"
                className="h-auto w-full max-w-[260px]"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id={`arc-intl-${gid}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={C_ORANGE} />
                    <stop offset="100%" stopColor={C_AMBER} />
                  </linearGradient>
                  <linearGradient
                    id={`arc-local-${gid}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a16207" />
                    <stop offset="100%" stopColor={C_GOLD} />
                  </linearGradient>
                  <filter
                    id={`arc-glow-${gid}`}
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Track */}
                <circle
                  cx={compositionCx}
                  cy={compositionCy}
                  r={trackR}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />

                {/* Background ring */}
                <circle
                  cx={compositionCx}
                  cy={compositionCy}
                  r={compositionR}
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="14"
                />

                <path
                  d={intlArc}
                  fill="none"
                  stroke={`url(#arc-intl-${gid})`}
                  strokeWidth="14"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset={showMotion || prefersReducedMotion ? 0 : 1}
                  filter={`url(#arc-glow-${gid})`}
                  className={
                    prefersReducedMotion
                      ? ""
                      : "transition-[stroke-dashoffset] duration-1000 ease-out"
                  }
                />
                <path
                  d={localArc}
                  fill="none"
                  stroke={`url(#arc-local-${gid})`}
                  strokeWidth="14"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset={showMotion || prefersReducedMotion ? 0 : 1}
                  className={
                    prefersReducedMotion
                      ? ""
                      : "transition-[stroke-dashoffset] duration-1000 ease-out [transition-delay:180ms]"
                  }
                />

                <text
                  x={compositionCx}
                  y={compositionCy - 8}
                  textAnchor="middle"
                  fill="#fafafa"
                  fontSize="36"
                  fontWeight="600"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  className="tabular-nums"
                >
                  {intlSharePct.toFixed(1)}%
                </text>
                <text
                  x={compositionCx}
                  y={compositionCy + 18}
                  textAnchor="middle"
                  fill="#71717a"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="0.16em"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                >
                  INTERNATIONAL SHARE
                </text>
              </svg>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-8">
              <div className="rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3">
                <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  International
                </dt>
                <dd className="mt-1 text-2xl font-semibold tabular-nums text-white">
                  {internationalGuests}+
                </dd>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3">
                <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Local adventurers
                </dt>
                <dd className="mt-1 text-2xl font-semibold tabular-nums text-white">
                  {localGuests}+
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 lg:col-span-7">
          <div>
            <div className="mb-2 flex justify-between text-sm text-zinc-400">
              <span>International guests</span>
              <span className="tabular-nums font-medium text-white">
                {internationalGuests}+
              </span>
            </div>
            <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.05]">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-amber-500 shadow-[0_0_24px_-6px_rgba(255,92,61,0.55)] transition-[width] duration-[900ms] ease-out motion-reduce:transition-none"
                style={{
                  width:
                    showMotion || prefersReducedMotion
                      ? `${(internationalGuests / guestTotal) * 100}%`
                      : "0%",
                }}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm text-zinc-400">
              <span>Local adventurers</span>
              <span className="tabular-nums font-medium text-white">
                {localGuests}+
              </span>
            </div>
            <div className="relative h-3.5 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.05]">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-700/90 to-[#fcd34d] transition-[width] duration-[900ms] ease-out motion-reduce:transition-none"
                style={{
                  width:
                    showMotion || prefersReducedMotion
                      ? `${(localGuests / guestTotal) * 100}%`
                      : "0%",
                  transitionDelay: prefersReducedMotion ? "0ms" : "140ms",
                }}
              />
            </div>
          </div>
          <p className="text-sm leading-relaxed text-zinc-500">
            Bars show each cohort as a share of all hosted guests—international
            visitors represent{" "}
            <strong className="font-medium text-zinc-300">
              {intlSharePct.toFixed(1)}%
            </strong>{" "}
            of every story we tell from the trail.
          </p>
        </div>
      </div>

      {/* Global reach */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-transparent to-amber-500/[0.03] p-6 shadow-[0_28px_80px_-40px_rgba(0,0,0,0.88)] backdrop-blur-md sm:p-8 lg:p-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-amber-500/75">
            Global reach
          </p>
          <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Where our guests call home
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
            From high valleys to distant cities—fifteen regions and counting.
            Every pin is a relationship we are proud to carry into the
            mountains.
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-2.5 sm:gap-3"
            aria-label="Countries and regions guests have joined from"
          >
            {CLIENT_REGIONS.map((c) => (
              <li key={c.code}>
                <span
                  className="group inline-flex cursor-default items-center gap-2.5 rounded-full border border-white/[0.1] bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-3 py-2 shadow-[0_12px_32px_-18px_rgba(0,0,0,0.75)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-400/35 hover:shadow-[0_16px_40px_-16px_rgba(255,92,61,0.28)] sm:px-4 sm:py-2.5"
                  title={c.name}
                >
                  <RegionFlagImage code={c.code} name={c.name} />
                  <span className="max-w-[7rem] truncate text-xs font-medium tracking-wide text-zinc-300 sm:max-w-none">
                    {c.name}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const TrustStatsVisualization = memo(TrustStatsVisualizationInner);
TrustStatsVisualization.displayName = "TrustStatsVisualization";
