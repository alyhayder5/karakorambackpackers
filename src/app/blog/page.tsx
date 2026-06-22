import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { blogPosts } from "@/lib/data/blog";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Travel Blog",
  description: `Expert travel guides for Skardu, Hunza, K2 Base Camp, and Fairy Meadows from ${siteName}.`,
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="pb-12 pt-8">
          <div className="container-premium">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Travel Guides
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Blog
            </h1>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-premium grid gap-8 sm:grid-cols-2">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-border bg-surface card-lift"
                >
                  <div className="relative aspect-[16/9] img-zoom">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary">{post.category}</Badge>
                    <h2 className="mt-3 text-xl font-bold group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                      <span>{post.dateLabel}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
