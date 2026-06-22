import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
      <Navbar />
      <main className="pt-24">
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
          <div className="container-premium grid gap-8">
            {destinations.map((dest, i) => (
              <ScrollReveal key={dest.slug} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="group grid overflow-hidden rounded-3xl border border-border bg-surface card-lift md:grid-cols-2"
                >
                  <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px] img-zoom">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {dest.tagline}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold group-hover:text-primary">
                      {dest.name}
                    </h2>
                    <p className="mt-3 text-muted">{dest.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {dest.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted">
                      Best time: {dest.bestTime} · Elevation: {dest.elevation}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
