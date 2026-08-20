import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const CTA_IMAGE = "/gallery/07.jpeg";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={CTA_IMAGE}
          alt="Karakoram mountain panorama"
          fill  
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-black/60 to-primary/25" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-premium text-center">
          <ScrollReveal className="mb-12 text-center">
            <SectionHeading
              eyebrow="Your Journey Awaits"
              title="Ready For The Adventure Of A Lifetime?"
              align="center"
              titleClassName="max-w-3xl text-white"
              className="mb-0"
              description="Join thousands of travelers who have discovered the magic of Gilgit-Baltistan with our expert guides."
              
            />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Join thousands of travelers who have discovered the magic of
              Gilgit-Baltistan with our expert guides.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/tours">
                <Button size="lg" className="gap-2">
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="glass" size="lg" className="gap-2 text-white">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
