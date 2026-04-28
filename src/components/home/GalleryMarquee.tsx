import Image from "next/image";
import { contentWidthShell } from "@/lib/content-shell";
import { galleryImagePaths } from "@/lib/gallery-images";

function doubled(paths: readonly string[]) {
  return [...paths, ...paths];
}

const galleryRow2Paths = (() => {
  const n = galleryImagePaths.length;
  const pivot = Math.ceil(n / 2);
  return [
    ...galleryImagePaths.slice(pivot),
    ...galleryImagePaths.slice(0, pivot),
  ] as const;
})();

/** Mixed aspect “deck” like a physical photo spread — reads more premium than one ratio. */
function cardShapeClass(i: number) {
  const r = i % 4;
  switch (r) {
    case 0:
      return "aspect-[3/4] w-[min(34vw,160px)] sm:w-[min(26vw,180px)] md:w-[min(22vw,200px)] lg:w-[min(18vw,220px)]";
    case 1:
      return "aspect-[16/10] w-[min(64vw,240px)] sm:aspect-[5/3] sm:w-[min(44vw,280px)] md:w-[min(36vw,300px)] lg:w-[min(30vw,320px)]";
    case 2:
      return "aspect-[4/3] w-[min(52vw,200px)] sm:w-[min(38vw,240px)] md:w-[min(32vw,260px)] lg:w-[min(27vw,280px)]";
    default:
      return "aspect-square w-[min(34vw,160px)] sm:w-[min(28vw,180px)] md:w-[min(24vw,200px)] lg:w-[min(20vw,220px)]";
  }
}

function MarqueeRow({
  paths,
  reverse,
}: {
  paths: readonly string[];
  reverse?: boolean;
}) {
  const sequence = doubled(paths);
  return (
    <div className="gallery-marquee-viewport relative overflow-hidden py-2 md:py-3 [transform-style:preserve-3d]">
      <div
        className={`flex w-max gap-[0.85rem] pr-[0.85rem] will-change-transform sm:gap-5 sm:pr-5 md:gap-6 md:pr-6 lg:gap-7 lg:pr-7 [transform-style:preserve-3d] ${
          reverse ? "gallery-marquee-track-right" : "gallery-marquee-track-left"
        }`}
      >
        {sequence.map((src, i) => (
          <figure
            key={`${src}-${i}`}
            className={`gallery-float-card group relative shrink-0 overflow-hidden rounded-2xl border border-white/[0.13] bg-zinc-950 sm:rounded-[1.15rem] md:rounded-3xl ${cardShapeClass(
              i,
            )} after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white/[0.04] after:via-transparent after:to-black/50`}
          >
            <Image
              src={src}
              alt={`Karakoram and Gilgit-Baltistan landscape — gallery photo ${(i % paths.length) + 1}`}
              fill
              className="object-cover motion-reduce:transition-none motion-safe:transition-[transform] motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 64vw, (max-width: 1280px) 42vw, 320px"
              loading={i > 8 ? "lazy" : undefined}
              quality={92}
            />
            <span
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/4 bg-gradient-to-t from-black/78 via-black/25 to-transparent sm:h-[30%]"
              aria-hidden
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function GalleryMarquee() {
  return (
    <section
      id="gallery"
      className="gallery-marquee-block relative isolate scroll-mt-24 bg-[#050506] pb-4 sm:pb-6 lg:pb-8"
      aria-labelledby="gallery-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(60vh,32rem)] bg-gradient-to-b from-[#0b0b0f] via-transparent to-transparent opacity-[0.9]" />

      <div className={`relative z-[2] pb-11 pt-14 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24 ${contentWidthShell}`}>
        <div className="relative border-l-[3px] border-accent pl-5 sm:pl-6 lg:max-w-[90%]">
          <div className="flex flex-wrap items-baseline gap-3">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.38em] text-accent sm:text-xs">
              Gallery
            </p>
            <span className="hidden font-light text-white/35 sm:inline" aria-hidden>
              —
            </span>
            <p className="text-xs tracking-wide text-zinc-600 sm:text-[0.7rem] uppercase">
              Northern Pakistan • Live frames
            </p>
          </div>
          <div className="mt-8 max-w-[22ch] lg:max-w-none">
            <h2
              id="gallery-heading"
              className="text-[2.65rem] font-black leading-[0.93] tracking-[-0.045em] text-white sm:text-5xl sm:leading-[0.93] lg:text-6xl lg:leading-[0.9] xl:text-[5.35rem]"
            >
              Through the{" "}
              <span className="bg-gradient-to-br from-white via-[#ebe6e8] via-40% to-zinc-500 bg-clip-text text-transparent">
                Karakoram lens
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="gallery-scroll-spacer relative z-[1] min-h-[120vh] lg:min-h-[150vh]">
        <div className="gallery-marquee-pin sticky top-[clamp(11.5rem,30svh,15.5rem)] z-[1] md:top-[clamp(13rem,32svh,17rem)]">
          <div className="gallery-marquee-pin-inner relative flex min-h-[calc(100svh-12.5rem)] w-full flex-col justify-center overflow-x-clip md:min-h-[calc(100svh-13.75rem)] lg:justify-center lg:pb-10 lg:pt-12">
            <div
              className="gallery-premium-vignette pointer-events-none absolute inset-0 z-[30]"
              aria-hidden
            />
            <div
              className="gallery-noise-overlay pointer-events-none absolute inset-0 z-[29] mix-blend-soft-light"
              aria-hidden
            />

            <div
              className="pointer-events-none absolute left-1/2 top-[56%] z-[4] h-[min(42vh,24rem)] w-[min(200vw,140rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.22)_45%,transparent_68%)] blur-2xl"
              aria-hidden
            />

            <div className="pointer-events-none absolute inset-x-10 top-[12%] z-[27] hidden h-px lg:block xl:inset-x-16 xl:top-[14%]"
              aria-hidden>
              <div className="h-full w-full bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
            </div>

            <div className="gallery-isometric-shell relative z-[6] mx-auto w-full max-w-[100vw] px-3 sm:px-4 md:px-6">
              <div className="gallery-isometric-tilt py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex flex-col gap-5 sm:gap-6 lg:gap-9">
                  <MarqueeRow paths={galleryImagePaths} />
                  <MarqueeRow paths={galleryRow2Paths} reverse />
                </div>
              </div>
            </div>

            <p className="sr-only">
              Two looping rows of travel photography. Pause by hovering the gallery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
