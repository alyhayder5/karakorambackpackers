import Image from "next/image";
import {
  Mountain,
  Car,
  Camera,
  Compass,
  Map,
  Building2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { adventureCategories } from "@/lib/data/content";

const iconMap: Record<string, LucideIcon> = {
  Footprints: Compass,
  Mountain,
  Car,
  Camera,
  Tent: Map,
  Landmark: Building2,
};

export function AdventureCategories() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-premium">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Find Your Adventure
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Adventure Categories
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {adventureCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Mountain;
            return (
              <ScrollReveal key={cat.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <Link
                  href={`/tours?category=${encodeURIComponent(cat.title.replace(" Tours", "").replace(" ", "+"))}`}
                  className="group relative block overflow-hidden rounded-3xl border border-border card-lift"
                >
                  <div className="relative aspect-[16/10] img-zoom">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{cat.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
