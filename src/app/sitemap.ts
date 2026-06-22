import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { tours } from "@/lib/data/tours";
import { destinations } from "@/lib/data/destinations";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticPages = [
    "",
    "/tours",
    "/destinations",
    "/gallery",
    "/about",
    "/contact",
    "/blog",
    "/login",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const tourPages = tours.map((t) => ({
    url: `${base}/tours/${t.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const destinationPages = destinations.map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...tourPages, ...destinationPages, ...blogPages];
}
