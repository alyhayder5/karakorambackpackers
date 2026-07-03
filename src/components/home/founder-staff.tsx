import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { founderStaffContent } from "@/lib/data/content";
import { Button } from "../ui/button";

export function FounderStaff() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl img-zoom">
              <Image
                src={founderStaffContent.image}
                alt="Karakoram Backpackers team in the mountains"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={1}>
              <SectionHeading
                title={founderStaffContent.title}
                className="mb-6"
              />
            </ScrollReveal>

            <div className="space-y-4">
              {founderStaffContent.paragraphs.map((paragraph, i) => (
                <ScrollReveal key={i} delay={(i + 1) as 0 | 1 | 2 | 3}>
                  <p className="leading-relaxed text-muted">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={3} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="gap-2">
                  Contact Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="gap-2">
                  <Users className="h-4 w-4" />
                  Our Team
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
