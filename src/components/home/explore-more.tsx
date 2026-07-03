import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { exploreMoreContent } from "@/lib/data/content";
import { Button } from "../ui/button";

export function ExploreMore() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-premium">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <ScrollReveal delay={1}>
              <SectionHeading
                eyebrow={exploreMoreContent.eyebrow}
                title={exploreMoreContent.title}
                description={exploreMoreContent.description}
              />
            </ScrollReveal>
            <ScrollReveal delay={2} className="mt-8">
              <Link href="/tours">
                <Button className="gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl img-zoom">
              <Image
                src={exploreMoreContent.image}
                alt="Trekking through Karakoram valleys"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
