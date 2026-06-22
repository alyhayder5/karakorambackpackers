import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { companyStats, teamMembers } from "@/lib/data/blog";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: `Learn about ${siteName} — Gilgit-Baltistan's premier adventure travel company with 10+ years of excellence.`,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden pb-16 pt-8">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container-premium relative">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Born in the Mountains, Built for Adventure
            </h1>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-premium space-y-20">
            <ScrollReveal>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85"
                    alt="Karakoram mountains"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Company Story</h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    Karakoram Backpackers was founded in Gilgit by local mountain
                    guides who believed the world deserved to experience the raw
                    beauty of their homeland. What started as small-group treks
                    to K2 Base Camp has grown into Pakistan&apos;s most trusted
                    adventure travel company — without losing the personal touch
                    that makes every journey special.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted">
                    Today we lead expeditions across Skardu, Hunza, Deosai, Fairy
                    Meadows, and beyond — always with local expertise, sustainable
                    practices, and an unwavering commitment to safety.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-surface p-8">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="mt-4 text-muted">
                    To share the unparalleled beauty of Gilgit-Baltistan with
                    travelers worldwide through safe, sustainable, and deeply
                    authentic adventure experiences led by local experts.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-surface p-8">
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="mt-4 text-muted">
                    To establish Pakistan&apos;s northern areas as a premier
                    global adventure destination — where world-class expeditions
                    meet warm Balti hospitality and leave positive impact on
                    local communities.
                  </p>
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
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
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
