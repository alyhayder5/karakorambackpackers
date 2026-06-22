import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { blogPosts } from "@/lib/data/blog";

export function BlogSection() {
  const featured = blogPosts.slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <ScrollReveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Travel Guides
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                From Our Blog
              </h2>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                All Articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((post, i) => (
            <ScrollReveal key={post.id} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-3xl border border-border bg-surface card-lift"
              >
                <div className="relative aspect-[16/10] img-zoom">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-bold leading-snug group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime} read
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
