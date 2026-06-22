"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { galleryImages } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const heightMap = {
  short: "h-52 sm:h-56",
  medium: "h-64 sm:h-72",
  tall: "h-80 sm:h-96",
};

export default function GalleryPage() {
  const [selected, setSelected] = useState<(typeof galleryImages)[0] | null>(
    null,
  );

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="pb-12 pt-8">
          <div className="container-premium">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Visual Journey
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Moments captured across the Karakoram — from sunrise at K2 Base
              Camp to starlit nights in Fairy Meadows.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-premium">
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
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{img.alt}</p>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

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
    </>
  );
}
