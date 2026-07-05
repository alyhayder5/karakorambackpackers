import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseContent } from "@/lib/data/content";
import { Button } from "../ui/button";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <ScrollReveal delay={1} className="mb-10 text-center">
          <SectionHeading
            align="center"
            eyebrow={whyChooseContent.eyebrow}
            title={whyChooseContent.title}
          />
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-5 text-center">
          {whyChooseContent.paragraphs.map((paragraph, i) => (
            <ScrollReveal key={i} delay={(i + 1) as 0 | 1 | 2 | 3}>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={3} className="mt-10 text-center">
          <Link href="/about">
            <Button variant="outline" className="gap-2">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
