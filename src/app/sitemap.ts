import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { tours } from "@/lib/data/tours";
import { destinations } from "@/lib/data/destinations";

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

  return [...staticPages, ...tourPages, ...destinationPages];
}
