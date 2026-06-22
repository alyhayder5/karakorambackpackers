import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { siteName } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | ${siteName}`,
      description: post.description,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.datePublished,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <article>
          <div className="relative h-[40vh] min-h-[300px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="container-premium section-padding">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted">
              <span>{post.author}</span>
              <span>{post.dateLabel}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <div className="prose prose-invert mt-10 max-w-3xl space-y-6">
              {paragraphs.map((para, i) => {
                if (para.startsWith("**") && para.includes(":**")) {
                  const [heading, ...rest] = para.split(":**");
                  return (
                    <div key={i}>
                      <h2 className="text-xl font-bold">
                        {heading.replace(/\*\*/g, "")}
                      </h2>
                      <p className="mt-2 leading-relaxed text-muted">
                        {rest.join(":**")}
                      </p>
                    </div>
                  );
                }
                return (
                  <p key={i} className="leading-relaxed text-muted">
                    {para}
                  </p>
                );
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
