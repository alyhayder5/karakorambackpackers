import type { Metadata } from "next";
import { HomeView } from "@/components/home/home-view";
import { defaultKeywords, siteDescription, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteName} | Premium Adventure Travel in Gilgit-Baltistan`,
  description: siteDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Premium Adventure Travel in Gilgit-Baltistan`,
    description: siteDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    title: `${siteName} | Premium Adventure Travel in Gilgit-Baltistan`,
    description: siteDescription,
  },
};

export default function Home() {
  return <HomeView />;
}
