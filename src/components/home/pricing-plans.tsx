import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { pricingPlans } from "@/lib/data/content";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "../ui/section-heading";

export function PricingPlans() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <ScrollReveal delay={1} className="mb-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="Pricing Plan"
            title="Trips in Different Categories"
            description="Choose the travel style that fits your budget and comfort — every tier includes expert local guides and unforgettable Karakoram experiences."
          />
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.tier} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-8 card-lift",
                  plan.featured
                    ? "border-primary/40 bg-surface shadow-lg shadow-primary/5"
                    : "border-border bg-surface",
                )}
              >
                {plan.featured && (
                  <span className="mb-4 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.tier}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {plan.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-8">
                  <Button
                    variant={plan.featured ? "default" : "outline"}
                    className="w-full gap-2"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
