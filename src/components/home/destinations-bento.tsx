import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getFeaturedDestinations } from "@/lib/data/destinations";

export function DestinationsBento() {
  const destinations = getFeaturedDestinations();

  return (
    <section className="section-padding bg-surface">
      <div className="container-premium">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Where We Go
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
              Popular Destinations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              From the turquoise lakes of Skardu to the ancient forts of Hunza —
              explore the crown jewels of Gilgit-Baltistan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <ScrollReveal
              key={dest.slug}
              delay={(i % 3) as 0 | 1 | 2 | 3}
              className="h-full"
            >
              <Link
                href={`/destinations/${dest.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-border card-lift"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">
                        {dest.tagline}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white lg:text-3xl">
                        {dest.name}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {dest.stats.map((stat) => (
                          <span
                            key={stat.label}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                          >
                            {stat.value} {stat.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
