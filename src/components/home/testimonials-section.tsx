import Image from "next/image";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { testimonials } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-premium">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Traveler Stories
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              What Our Travelers Say
            </h2>
          </div>
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
