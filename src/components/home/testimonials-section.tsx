import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data/content";
import { Button } from "../ui/button";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-premium">
        <ScrollReveal delay={1} className="mb-12 text-center">
          <SectionHeading
            eyebrow="Traveler Stories"
            title="What Our Travelers Say"
            description="Hear from our happy clients who have experienced the magic of Gilgit-Baltistan."
            action={
              <Link href="/testimonials">
                <Button variant="outline" className="gap-2">
                  View All Testimonials
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            }
            align="center"
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <ScrollReveal key={t.id} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <article className="glass-card flex h-full flex-col rounded-3xl p-8 card-lift">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="flex items-center gap-2 text-xs text-muted">
                      <Image
                        src={`https://flagcdn.com/w20/${t.countryCode}.png`}
                        alt=""
                        width={16}
                        height={12}
                        className="rounded-sm"
                      />
                      {t.country}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-accent">{t.tour}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
