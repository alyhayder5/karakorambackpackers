import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Users, Mountain, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedTours } from "@/lib/data/tours";
import { formatPrice } from "@/lib/utils";

export function FeaturedTours() {
  const tours = getFeaturedTours();

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <ScrollReveal delay={1} className="mb-12 text-center">
          <SectionHeading
            eyebrow="Curated Expeditions"
            title="Featured Tours"
            description="Discover our most popular tours, carefully crafted to showcase the best of Gilgit-Baltistan."
            action={
              <Link href="/tours">
                <Button variant="outline">View All Tours</Button>
              </Link>
            }
            align="center"
          />
        </ScrollReveal>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tours.map((tour, i) => (
            <ScrollReveal key={tour.id} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <article className="group w-[340px] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-surface card-lift sm:w-[380px]">
                <div className="relative aspect-[4/3] img-zoom">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <Badge className="absolute left-4 top-4" variant="accent">
                    {tour.category}
                  </Badge>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {tour.reviewCount > 0
                      ? `${tour.rating} (${tour.reviewCount})`
                      : `${tour.rating}`}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {tour.destination}
                  </p>
                  <h3 className="mt-1 text-xl font-bold leading-snug">
                    {tour.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">
                    {tour.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mountain className="h-3.5 w-3.5" />
                      {tour.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {tour.groupSize}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted">From</p>
                      <p className="text-2xl font-bold text-primary">
                        {formatPrice(tour.price, tour.currency)}
                      </p>
                    </div>
                    <Link href={`/tours/${tour.slug}`}>
                      <Button size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
