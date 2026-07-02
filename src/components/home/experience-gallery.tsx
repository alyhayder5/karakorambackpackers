"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryImages } from "@/lib/data/content";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <ScrollReveal delay={1} className="mb-12">
          <SectionHeading
            align="center"
            eyebrow="Visual Journey"
            title="Experience Gallery"
            description="Moments captured across the Karakoram from sunrise at K2 Base Camp to starlit nights in Fairy Meadows."
            action={
              <Link href="/gallery">
                <Button variant="outline" className="gap-2">
                  View All Gallery
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            }
          />
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
