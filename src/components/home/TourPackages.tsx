import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { contentWidthShell } from "@/lib/content-shell";
import { tourPackages } from "@/lib/tour-packages";
import { buildTourPackagesItemListJsonLd } from "@/lib/tour-packages-schema";

/** Prefer `5.0` over `5.00` when the score is a whole step. */
function formatRatingScore(n: number) {
  return n % 1 === 0 ? n.toFixed(1) : n.toFixed(2);
}

function FractionalStars({ rating }: { rating: number }) {
  const capped = Math.min(5, Math.max(0, rating));
  return (
    <div className="flex gap-0.5" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(1, Math.max(0, capped - i));
        return (
          <span
            key={i}
            className="relative inline-flex size-[14px] sm:size-[15px]"
          >
            <Star
              className="absolute size-[14px] text-white/35 sm:size-[15px]"
              strokeWidth={1.5}
            />
            <span
              className="absolute inset-y-0 left-0 overflow-hidden text-amber-300"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                className="size-[14px] shrink-0 fill-amber-300 text-amber-300 sm:size-[15px]"
                strokeWidth={0}
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function TourPackages() {
  const jsonLd = buildTourPackagesItemListJsonLd(tourPackages);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section
        id="packages"
        className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.06] py-16 sm:py-24 lg:py-28"
        aria-labelledby="packages-heading"
      >
        {/* Same ambience as `#why-us` (FeaturesNature) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px]" />

        <div className={`relative z-[1] ${contentWidthShell}`}>
          <header className="text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Karakoram Backpackers tour packages
            </p>
            <h2
              id="packages-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Gilgit-Baltistan trips for every kind of traveler
            </h2>
          </header>

          <ul className="mt-14 grid list-none gap-7 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
            {tourPackages.map((pkg, index) => {
              const ratingText = formatRatingScore(pkg.ratingValue);
              const reviewLabel = `Rated ${ratingText} out of 5 based on ${pkg.reviewCount} traveler reviews`;
              return (
                <li key={pkg.id}>
                  <article
                    id={`package-${pkg.id}`}
                    className="group relative isolate flex min-h-[min(62vh,500px)] w-full flex-col overflow-hidden rounded-[28px] shadow-[0_32px_90px_-28px_rgba(0,0,0,0.88)] ring-1 ring-white/[0.07] outline-none transition duration-500 hover:ring-accent/30 sm:min-h-[min(64vh,520px)] lg:focus-within:ring-accent/30"
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.imageAlt}
                      fill
                      priority={index === 0}
                      className="object-cover object-[50%_18%] transition duration-700 ease-out group-hover:scale-[1.04] sm:object-[50%_15%]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                    {/* Light top edge so the badge stays readable without darkening faces */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-black/35 to-transparent"
                      aria-hidden
                    />
                    {/* Bottom band — touch / small screens only (content always visible there) */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[58%] bg-gradient-to-t from-[#060607] via-[#060607]/82 to-transparent sm:h-[55%] lg:hidden"
                      aria-hidden
                    />
                    {/* lg+: dark scrim — same duration/easing as panel so in/out stays symmetric */}
                    <div
                      className="pointer-events-none absolute inset-0 z-[2] hidden bg-black/82 opacity-0 lg:block lg:transition-opacity lg:duration-[480ms] lg:ease-[cubic-bezier(0.4,0,0.2,1)] lg:group-hover:opacity-[0.92] lg:group-focus-within:opacity-[0.92] motion-reduce:lg:transition-none"
                      aria-hidden
                    />

                    <p className="absolute left-5 top-5 z-[5] max-w-[85%] rounded-full border border-white/[0.14] bg-black/50 px-3.5 py-1.5 text-[11px] font-semibold capitalize tracking-wide text-white backdrop-blur-md sm:left-6 sm:top-6">
                      {pkg.badge}
                    </p>

                    <div
                      className="relative z-[4] mt-auto flex origin-bottom translate-y-0 transform-gpu flex-col px-6 pb-6 pt-36 sm:px-7 sm:pb-7 sm:pt-40 lg:translate-y-11 lg:pt-32 lg:opacity-0 lg:motion-safe:transition-[transform,opacity] lg:motion-safe:duration-[480ms] lg:motion-safe:ease-[cubic-bezier(0.4,0,0.2,1)] lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 motion-reduce:lg:translate-y-0 motion-reduce:lg:opacity-100"
                    >
                      <h3
                        className="text-balance font-bold leading-snug tracking-tight text-white [text-wrap:balance] sm:text-xl lg:text-[1.35rem]"
                        id={`pkg-title-${pkg.id}`}
                      >
                        {pkg.title}
                      </h3>
                      <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-white/[0.92] drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]">
                        {pkg.seoDescription}
                      </p>

                      <div className="mt-5 space-y-1">
                        {pkg.priceLeadingText && pkg.priceAmountText ? (
                          <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <span className="text-base font-semibold tracking-tight text-orange-300/98 sm:text-[1.0625rem]">
                              {pkg.priceLeadingText}
                            </span>
                            <span className="text-[0.75rem] font-semibold tabular-nums tracking-tight leading-none text-orange-300/95 sm:text-[0.875rem]">
                              {pkg.priceAmountText}
                            </span>
                          </p>
                        ) : (
                          <p className="text-base font-semibold tracking-tight text-orange-300/98 sm:text-[1.0625rem]">
                            {pkg.priceLine}
                          </p>
                        )}
                        {pkg.priceNote && (
                          <p className="text-[11px] font-medium uppercase tracking-wider text-white/65">
                            {pkg.priceNote}
                          </p>
                        )}
                      </div>

                      <div
                        className="mt-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/[0.1] bg-black/50 px-3.5 py-2 text-white backdrop-blur-md"
                        aria-label={reviewLabel}
                      >
                        <FractionalStars rating={pkg.ratingValue} />
                        <span className="text-sm font-bold tabular-nums text-white">
                          {ratingText}
                        </span>
                        <span className="text-[11px] font-medium text-white/75">
                          · {pkg.reviewCount} reviews
                        </span>
                      </div>

                      <Link
                        href="/#contact"
                        className="mt-8 flex w-full items-center justify-center rounded-full bg-white py-3.5 text-[15px] font-bold tracking-tight text-[#171717] shadow-lg shadow-black/25 transition hover:bg-zinc-100"
                      >
                        {pkg.ctaLabel ?? "Reserve now"}
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
