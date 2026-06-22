import { siteName } from "@/lib/site";

export const metadata = {
  title: "Gallery",
  description: `Explore stunning photography from Skardu, Hunza, K2, and Fairy Meadows with ${siteName}.`,
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
