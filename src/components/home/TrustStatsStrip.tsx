import { contentWidthShell } from "@/lib/content-shell";
import { TrustStatsVisualization } from "./TrustStatsVisualization";

export function TrustStatsStrip() {
  return (
    <section
      id="trust-by-numbers"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.05] py-16 sm:py-20 lg:py-28"
      aria-label="Guided departures, guest composition, and global reach"
    >
      {/* Cinematic atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[#040405]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-8%,rgba(255,92,61,0.14),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_80%_100%,rgba(251,191,36,0.06),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_90%,rgba(255,92,61,0.05),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M100 0H0v100' fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vh,900px)] w-[min(140vw,1200px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-accent/[0.04] via-transparent to-transparent blur-3xl"
        aria-hidden
      />

      <div className={`relative z-[1] ${contentWidthShell}`}>
        <TrustStatsVisualization />
      </div>
    </section>
  );
}
