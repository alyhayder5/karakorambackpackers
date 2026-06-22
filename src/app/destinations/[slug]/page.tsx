import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TourCard } from "@/components/tours/tours-listing";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { destinations, getDestinationBySlug } from "@/lib/data/destinations";
import { getToursByDestination } from "@/lib/data/tours";
import { siteName } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return { title: "Destination Not Found" };

  return {
    title: `${dest.name} Travel Guide`,
    description: dest.description,
    openGraph: {
      title: `${dest.name} | ${siteName}`,
      description: dest.description,
      images: [{ url: dest.image }],
    },
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const tours = getToursByDestination(slug);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[360px]">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-premium pb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                {dest.tagline}
              </p>
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                {dest.name}
              </h1>
              <div className="mt-4 flex gap-6 text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {dest.elevation}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {dest.bestTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-premium space-y-16">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="mt-4 leading-relaxed text-muted">{dest.overview}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Top Attractions</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {dest.attractions.map((attr) => (
                    <div
                      key={attr.name}
                      className="rounded-2xl border border-border bg-surface p-6 card-lift"
                    >
                      <h3 className="font-bold">{attr.name}</h3>
                      <p className="mt-2 text-sm text-muted">{attr.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {dest.images.length > 1 && (
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold">Gallery</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {dest.images.map((img) => (
                      <div
                        key={img}
                        className="relative aspect-[16/10] overflow-hidden rounded-2xl img-zoom"
                      >
                        <Image
                          src={img}
                          alt={dest.name}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {tours.length > 0 && (
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold">Available Tours</h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            <Link href="/destinations">
              <span className="text-sm text-primary hover:underline">
                ← All Destinations
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
