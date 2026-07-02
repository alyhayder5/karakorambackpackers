import {
  Compass,
  Sparkles,
  Shield,
  Leaf,
  Car,
  Headphones,
  type LucideIcon,
  Link,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/lib/data/content";
import { Button } from "../ui/button";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Sparkles,
  Shield,
  Leaf,
  Car,
  Headphones,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
      <ScrollReveal delay={1} className="mb-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="The Difference"
            title="Why Choose Us"
            description="We are a team of experienced guides who are passionate about the mountains and the people who live in them."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Compass;
            return (
              <ScrollReveal key={item.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <div className="glass-card group rounded-3xl p-8 card-lift">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:ring-primary/40">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
