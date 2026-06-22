"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryImages } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const heightMap = {
  short: "h-48",
  medium: "h-64",
  tall: "h-80",
};

export function ExperienceGallery() {
  const [selected, setSelected] = useState<(typeof galleryImages)[0] | null>(
    null,
  );

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Visual Journey
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Experience Gallery
            </h2>
          </div>
        </ScrollReveal>

        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.id} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <button
                type="button"
                onClick={() => setSelected(img)}
                className={cn(
                  "masonry-item group relative w-full overflow-hidden rounded-2xl border border-border img-zoom",
                  heightMap[img.height as keyof typeof heightMap] ?? "h-64",
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
          {selected && (
            <>
              <DialogTitle className="sr-only">{selected.alt}</DialogTitle>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={selected.src.replace("w=800", "w=1600")}
                  alt={selected.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
