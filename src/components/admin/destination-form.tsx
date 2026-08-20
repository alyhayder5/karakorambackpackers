"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ImageUploader } from "@/components/admin/image-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Destination } from "@/lib/data/destinations";

type Props = { initial?: Destination };

export function DestinationForm({ initial }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState(initial?.name ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [tagline, setTagline] = useState(initial?.tagline ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [overview, setOverview] = useState(initial?.overview ?? "");
  const [elevation, setElevation] = useState(initial?.elevation ?? "");
  const [bestTime, setBestTime] = useState(initial?.bestTime ?? "April – October");
  const [highlights, setHighlights] = useState(
    (initial?.highlights ?? []).join(", "),
  );
  const [featured, setFeatured] = useState(initial?.featured ?? true);
  const [image, setImage] = useState(initial?.image ?? "");
  const [images, setImages] = useState<string[]>(initial?.images ?? []);
  const [attractionsText, setAttractionsText] = useState(
    (initial?.attractions ?? [])
      .map((a) => (a.description ? `${a.name}: ${a.description}` : a.name))
      .join("\n"),
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const payload = {
      name,
      slug,
      tagline,
      description,
      overview,
      elevation,
      bestTime,
      highlights: highlights
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      featured,
      image: image || images[0] || "",
      images: images.length ? images : image ? [image] : [],
      stats: [
        { label: "Elevation", value: elevation || "—" },
      ],
      attractions: attractionsText
        .split("\n")
        .map((line) => {
          const [name, ...rest] = line.split(":");
          return {
            name: (name || "").trim(),
            description: rest.join(":").trim(),
          };
        })
        .filter((a) => a.name),
    };
    try {
      const res = await fetch(
        initial
          ? `/api/admin/destinations/${initial.slug}`
          : "/api/admin/destinations",
        {
          method: initial ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      toast.success(initial ? "Destination updated" : "Destination created");
      router.push("/admin/destinations");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (!initial) {
                setSlug(
                  e.target.value
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, ""),
                );
              }
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">URL slug</Label>
          <Input id="slug" required value={slug} onChange={(e) => setSlug(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input
            id="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="elevation">Elevation</Label>
          <Input
            id="elevation"
            value={elevation}
            onChange={(e) => setElevation(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="best">Best time</Label>
          <Input
            id="best"
            value={bestTime}
            onChange={(e) => setBestTime(e.target.value)}
          />
        </div>
        <label className="flex items-center gap-2 text-sm md:col-span-2">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          Featured on homepage
        </label>
        <div className="space-y-2 md:col-span-2">
          <Label>Short description</Label>
          <Textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label>Overview</Label>
          <Textarea value={overview} onChange={(e) => setOverview(e.target.value)} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label>Highlights (comma separated)</Label>
          <Input
            value={highlights}
            onChange={(e) => setHighlights(e.target.value)}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label>Attractions (one per line: Name: description)</Label>
          <Textarea
            value={attractionsText}
            onChange={(e) => setAttractionsText(e.target.value)}
            placeholder="Baltit Fort: 700-year-old fort overlooking Karimabad."
          />
        </div>
      </div>
      <ImageUploader
        folder="destinations"
        label="Cover image"
        value={image}
        onChange={(url) => {
          setImage(url);
          if (url && !images.includes(url)) setImages([url, ...images]);
        }}
      />
      <ImageUploader
        folder="destinations"
        label="More photos"
        multiple
        values={images}
        onChange={() => undefined}
        onChangeMany={setImages}
      />
      <Button type="submit" disabled={busy}>
        {busy ? "Saving…" : initial ? "Save changes" : "Create destination"}
      </Button>
    </form>
  );
}
