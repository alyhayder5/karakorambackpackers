import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getAbout, getTeam } from "@/lib/cms/store";
import { companyStats } from "@/lib/data/blog";
import { siteName } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Us",
  description: `Learn about ${siteName} — Gilgit-Baltistan's adventure travel company, founded by Ali Shan and Zahid Hussain.`,
};

export default function AboutPage() {
  const about = getAbout();
  const team = getTeam();

  return (
    <>
      <main className="pt-[120px]">
        <section className="relative overflow-hidden pb-16 pt-8">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container-premium relative">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {about.headline}
            </h1>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-premium space-y-20">
            <ScrollReveal>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={about.image}
                    alt={about.imageAlt}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Company Story</h2>
                  {about.story.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-4 leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-surface p-8">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="mt-4 text-muted">{about.mission}</p>
                </div>
                <div className="rounded-3xl border border-border bg-surface p-8">
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="mt-4 text-muted">{about.vision}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {companyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-surface p-6 text-center card-lift"
                  >
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="mb-8 text-2xl font-bold">Meet Our Team</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                  {team.map((member) => (
                    <div
                      key={member.id}
                      className="overflow-hidden rounded-3xl border border-border bg-surface card-lift"
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="25vw"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold">{member.name}</h3>
                        <p className="text-sm text-accent">{member.role}</p>
                        <p className="mt-2 text-sm text-muted">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
