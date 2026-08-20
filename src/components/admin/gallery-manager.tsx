"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { ImageUploader } from "@/components/admin/image-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { GalleryItem } from "@/lib/cms/types";

export function GalleryManager({ initial }: { initial: GalleryItem[] }) {
  const [items, setItems] = useState(initial);
  const [alt, setAlt] = useState("");

  useEffect(() => {
    setItems(initial);
  }, [initial]);

  async function addImage(src: string) {
    const res = await fetch("/api/admin/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ src, alt: alt || "Karakoram photo" }),
    });
    const data = await res.json();
    if (!res.ok) {
      toast.error(data.error || "Could not add image");
      return;
    }
    setItems((prev) => [data, ...prev]);
    setAlt("");
    toast.success("Photo added to gallery");
  }

  async function remove(id: string) {
    if (!confirm("Remove this photo from the gallery?")) return;
    const res = await fetch(`/api/admin/gallery?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      toast.error("Delete failed");
      return;
    }
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.success("Removed");
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold">Upload a new photo</h2>
        <div className="mb-4 space-y-2">
          <Input
            placeholder="Alt text (what the photo shows)"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
          />
        </div>
        <ImageUploader
          folder="gallery"
          label="Choose image"
          value=""
          onChange={(url) => {
            if (url) addImage(url);
          }}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <figure
            key={item.id}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
            <figcaption className="flex items-start justify-between gap-2 p-3">
              <p className="line-clamp-2 text-xs text-muted">{item.alt}</p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => remove(item.id)}
              >
                Delete
              </Button>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
