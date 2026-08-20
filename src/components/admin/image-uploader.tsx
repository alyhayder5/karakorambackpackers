"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImagePlus, X } from "lucide-react";
import { toast } from "sonner";
import {
  compressImageForUpload,
  readUploadError,
} from "@/lib/cms/compress-image";
import { cn } from "@/lib/utils";

type Props = {
  value?: string;
  values?: string[];
  folder: "tours" | "destinations" | "gallery" | "team" | "about";
  multiple?: boolean;
  label?: string;
  onChange: (url: string) => void;
  onChangeMany?: (urls: string[]) => void;
};

export function ImageUploader({
  value,
  values,
  folder,
  multiple,
  label = "Image",
  onChange,
  onChangeMany,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const list = values ?? (value ? [value] : []);

  async function uploadFiles(files: FileList | null) {
    if (!files?.length) return;
    setBusy(true);
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        const compressed = await compressImageForUpload(file);
        const form = new FormData();
        form.set("file", compressed);
        form.set("folder", folder);
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: form,
        });
        const text = await res.text();
        if (!res.ok) {
          throw new Error(readUploadError(res.status, text));
        }
        let data: { url?: string };
        try {
          data = JSON.parse(text) as { url?: string };
        } catch {
          throw new Error("Upload failed");
        }
        if (!data.url) throw new Error("Upload failed");
        uploaded.push(data.url);
      }
      if (multiple && onChangeMany) {
        onChangeMany([...list, ...uploaded]);
      } else if (uploaded[0]) {
        onChange(uploaded[0]);
      }
      toast.success(uploaded.length > 1 ? "Images uploaded" : "Image uploaded");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function removeAt(index: number) {
    if (multiple && onChangeMany) {
      onChangeMany(list.filter((_, i) => i !== index));
    } else {
      onChange("");
    }
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">{label}</p>
      <div
        className={cn(
          "grid gap-3",
          multiple ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1",
        )}
      >
        {list.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface-elevated"
          >
            <Image src={src} alt="" fill className="object-cover" sizes="280px" />
            <button
              type="button"
              onClick={() => removeAt(i)}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition group-hover:opacity-100"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        {(multiple || list.length === 0) && (
          <button
            type="button"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
            className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface text-muted transition hover:border-primary/40 hover:text-primary"
          >
            <ImagePlus className="h-6 w-6" />
            <span className="text-xs font-medium">
              {busy ? "Uploading…" : multiple ? "Add images" : "Upload image"}
            </span>
          </button>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
        multiple={multiple}
        className="hidden"
        onChange={(e) => uploadFiles(e.target.files)}
      />
    </div>
  );
}
