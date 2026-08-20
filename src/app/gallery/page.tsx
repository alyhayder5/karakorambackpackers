import { GalleryView } from "@/components/gallery/gallery-view";
import { getGallery } from "@/lib/cms/store";
import { siteName } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Gallery",
  description: `Photos from ${siteName} trips across Gilgit-Baltistan — Fairy Meadows, Hunza, Skardu, and the Karakoram.`,
};

export default function GalleryPage() {
  return <GalleryView images={getGallery()} />;
}
