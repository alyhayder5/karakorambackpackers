import Image from "next/image";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "../ui/section-heading";
import { testimonials, testimonialsSectionContent } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="container-premium">
        <ScrollReveal delay={1} className="mb-12 text-center">
          <SectionHeading
            eyebrow={testimonialsSectionContent.eyebrow}
            title={testimonialsSectionContent.title}
            description={testimonialsSectionContent.description}
            align="center"
          />
          </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
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
                    <p className="text-xs text-muted">{t.role}</p>
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
