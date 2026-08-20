import { getGallery } from "@/lib/cms/store";
import { GalleryManager } from "@/components/admin/gallery-manager";

export const dynamic = "force-dynamic";

export default function AdminGalleryPage() {
  const gallery = getGallery();
  return (
    <div>
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mb-6 mt-1 text-sm text-muted">
        Upload photos and see them immediately. They appear on /gallery and the
        homepage marquee.
      </p>
      <GalleryManager initial={gallery} />
    </div>
  );
}
