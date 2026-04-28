import type { Metadata } from "next";
import { HomeView } from "@/components/home/HomeView";
import { defaultKeywords, siteDescription, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteName} | Explore Nature's Beauty`,
  description: siteDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Explore Nature's Beauty`,
    description: siteDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    title: `${siteName} | Explore Nature's Beauty`,
    description: siteDescription,
  },
};

export default function Home() {
  return <HomeView />;
}
