import Link from "next/link";
import { siteDescription, siteName } from "@/lib/site";
import { HeroVideo } from "./HeroVideo";

const YOUTUBE_WATCH_URL = "https://www.youtube.com/watch?v=Mz2sQMhfV5g";

export function HeroSection() {
  return (
    <section
      className="relative isolate min-h-[calc(100svh-4.5rem)] w-full overflow-hidden bg-black sm:min-h-[calc(100svh-5rem)]"
      aria-label="Featured film"
    >
      <div className="pointer-events-none absolute inset-0">
        <HeroVideo />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-teal-500/5"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[min(90rem,92vw)] flex-col justify-end px-4 pb-16 pt-24 sm:min-h-[calc(100svh-5rem)] sm:px-6 sm:pb-20 md:px-10 md:pb-24 lg:px-12 xl:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">
          Karakoram &amp; beyond
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {siteName.split(" ")[0]}
          <span className="text-zinc-300">
            {" "}
            {siteName.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {siteDescription}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <Link
            href="/#packages"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-hover sm:px-8 sm:text-base"
          >
            Explore trips
          </Link>
          <a
            href={YOUTUBE_WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 sm:px-8 sm:text-base"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
