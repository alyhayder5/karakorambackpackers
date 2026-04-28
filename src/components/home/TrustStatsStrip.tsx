import { contentWidthShell } from "@/lib/content-shell";
import { TrustStatsVisualization } from "./TrustStatsVisualization";

export function TrustStatsStrip() {
  return (
    <section
      id="trust-by-numbers"
      className="relative scroll-mt-24 overflow-x-clip border-y border-white/[0.06] bg-gradient-to-b from-[#060608] via-[#0a0a0c] to-[#060608] py-14 sm:py-16 lg:py-20"
      aria-label="Trip departures by year and guest demographics"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
      >
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-teal-500/10 blur-[90px]" />
      </div>

      <div className={`relative z-[1] ${contentWidthShell}`}>
        <TrustStatsVisualization />
      </div>
    </section>
  );
}
