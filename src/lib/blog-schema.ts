import type { BlogPostPreview } from "@/lib/blog-posts";
import { getSiteUrl, siteName } from "@/lib/site";

function absoluteImage(src: string): string {
  if (src.startsWith("http")) return src;
  const base = getSiteUrl().replace(/\/$/, "");
  return `${base}${src.startsWith("/") ? "" : "/"}${src}`;
}

/**
 * Homepage blog section — Blog + BlogPosting for rich results hygiene (match visible copy).
 */
export function buildBlogSectionJsonLd(posts: BlogPostPreview[]) {
  const base = `${getSiteUrl().replace(/\/$/, "")}/`;

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${base}#blog`,
    name: `${siteName} — blog & trekking news`,
    description:
      "Practical trekking advice, altitude safety, and responsible travel updates for Gilgit–Baltistan and the Karakoram region.",
    url: `${base}#blog`,
    publisher: {
      "@type": "TravelAgency",
      name: siteName,
      url: getSiteUrl(),
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${base}#blog-post-${p.slug}`,
      headline: p.title,
      description: p.description,
      datePublished: p.datePublished,
      image: absoluteImage(p.image),
      url: `${base}#blog-post-${p.slug}`,
      author: {
        "@type": "Organization",
        name: siteName,
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        url: getSiteUrl(),
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${base}#blog-post-${p.slug}`,
      },
    })),
  };
}
