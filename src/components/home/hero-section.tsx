"use client";

import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { heroStats } from "@/lib/data/content";
import { HeroVideo } from "@/components/home/hero-video";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <HeroVideo />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="relative z-10 w-full pb-16 pt-32 md:pb-24">
        <div className="container-premium">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Gilgit-Baltistan · Pakistan
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Explore Pakistan&apos;s{" "}
              <span className="text-gradient">Greatest Adventures</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Discover the breathtaking mountains, valleys, lakes, and cultures
              of Gilgit Baltistan with expert local guides.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/tours">
                <Button size="lg" className="gap-2">
                  Explore Tours
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="glass" size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                Watch Story
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-24">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 text-center card-lift"
                >
                  <p className="text-2xl font-bold text-foreground md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
