import Image from "next/image";
import Link from "next/link";
import { contentWidthShell } from "@/lib/content-shell";
import { siteName } from "@/lib/site";
import { FloatingBubbleNav } from "./FloatingBubbleNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#0a0a0c]/96 via-[#0a0a0c]/72 to-transparent backdrop-blur-md">
      <div
        className={`${contentWidthShell} relative pb-6 pt-5 sm:pb-7 sm:pt-6 lg:pb-8 lg:pt-7`}
      >
        <div className="relative flex flex-col gap-4 lg:min-h-[4.5rem] lg:flex-row lg:items-center lg:gap-0">
          {/* Left: logo (+ Book on small screens) */}
          <div className="relative z-[2] flex min-w-0 flex-1 items-center justify-between gap-4 lg:justify-start lg:pr-2">
            <Link
              href="/"
              className="relative block h-12 w-[12.85rem] shrink-0 sm:h-[4.9375rem] sm:w-[16.25rem] lg:h-16 lg:w-[17rem]"
              prefetch={false}
            >
              <Image
                src="/karakoram-backpackers-logo.png"
                alt={`${siteName} — home`}
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 210px, 260px"
                priority
              />
            </Link>

            <Link
              href="/#packages"
              className="group relative inline-flex shrink-0 items-center gap-3 overflow-visible rounded-full bg-accent px-[1.0625rem] py-2.5 text-[0.9rem] font-semibold tracking-tight text-white shadow-xl shadow-accent/30 transition hover:bg-accent-hover sm:px-[1.25rem] lg:hidden"
            >
              <span className="absolute -right-1 -top-1 inline-flex items-center justify-center rounded-full bg-black/40 p-[0.2875rem] ring-1 ring-emerald-500/35">
                <span className="relative flex size-[0.6625rem] rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.95)] motion-reduce:shadow-none" />
              </span>
              <span className="hidden sm:inline">Book a trip</span>
              <span className="sm:hidden">Book</span>
            </Link>
          </div>

          {/* Nav: centered in row on lg (absolute overlay); stacked on mobile */}
          <div className="relative z-[3] flex w-full justify-center lg:pointer-events-none lg:absolute lg:inset-0 lg:z-[3] lg:flex lg:items-center lg:justify-center">
            <div className="pointer-events-auto w-full max-w-full lg:w-auto">
              <FloatingBubbleNav className="py-0 sm:py-0.5 lg:py-0" />
            </div>
          </div>

          {/* Right: Book desktop — flex-1 mirrors left so nav stays true center */}
          <div className="relative z-[2] hidden min-w-0 flex-1 justify-end lg:flex lg:pl-2">
            <Link
              href="/#packages"
              className="group relative inline-flex shrink-0 items-center gap-3 overflow-visible rounded-full bg-accent px-[1.0625rem] py-2.5 text-[0.9rem] font-semibold tracking-tight text-white shadow-xl shadow-accent/30 transition hover:bg-accent-hover sm:px-[1.25rem]"
            >
              <span className="absolute -right-1 -top-1 inline-flex items-center justify-center rounded-full bg-black/40 p-[0.2875rem] ring-1 ring-emerald-500/35">
                <span className="relative flex size-[0.6625rem] rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.95)] motion-reduce:shadow-none" />
              </span>
              Book a trip
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
