import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Mountain } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { destinations } from "@/lib/data/destinations";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Destinations",
  description: `Explore Skardu, Hunza, Fairy Meadows, Deosai, Passu, Khaplu and more with ${siteName}.`,
};

export default function DestinationsPage() {
  return (
    <>
      <main className="pt-[120px]">
        <section className="pb-12 pt-8">
          <div className="container-premium">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Gilgit-Baltistan
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Destinations
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              From the gateway to K2 to the Valley of Eternal Youth — discover
              every corner of Pakistan&apos;s northern paradise.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-premium grid gap-10 lg:gap-12">
            {destinations.map((dest, i) => {
              const reversed = i % 2 === 1;

              return (
                <ScrollReveal key={dest.slug} delay={(i % 3) as 0 | 1 | 2 | 3}>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="group relative grid overflow-hidden rounded-3xl border border-border bg-surface card-lift md:grid-cols-2"
                  >
                    <div
                      className={`relative aspect-[16/10] md:aspect-auto md:min-h-[320px] img-zoom ${
                        reversed ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                      <Badge
                        variant="accent"
                        className="absolute left-5 top-5 border-white/10 bg-black/40 text-white backdrop-blur-md"
                      >
                        {dest.tagline}
                      </Badge>
                      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                        {dest.stats.map((stat) => (
                          <span
                            key={stat.label}
                            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
                          >
                            {stat.value} {stat.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`relative flex flex-col justify-center p-8 md:p-10 lg:p-12 ${
                        reversed ? "md:order-1" : ""
                      }`}
                    >
                      <span className="text-xs font-semibold tabular-nums tracking-[0.25em] text-muted/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-4xl">
                        {dest.name}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-muted">
                        {dest.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {dest.highlights.slice(0, 4).map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-6 text-sm text-muted">
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4 shrink-0 text-accent" />
                          {dest.bestTime}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Mountain className="h-4 w-4 shrink-0 text-accent" />
                          {dest.elevation}
                        </span>
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                          Explore destination
                        </span>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated transition-all group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
