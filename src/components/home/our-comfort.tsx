import {
  MapPin,
  Compass,
  Droplets,
  Car,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { comfortFeatures, comfortSectionContent } from "@/lib/data/content";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Compass,
  Droplets,
  Car,
};

export function OurComfort() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-premium">
        <ScrollReveal delay={1} className="mb-12 text-center">
          <SectionHeading
            align="center"
            title={comfortSectionContent.title}
            description={comfortSectionContent.description}
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comfortFeatures.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Compass;
            return (
              <ScrollReveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="glass-card group h-full rounded-3xl p-8 text-center card-lift">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:ring-primary/40">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
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
