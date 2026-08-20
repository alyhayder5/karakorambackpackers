"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ImageUploader } from "@/components/admin/image-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Tour, TourCategory, Difficulty, TourCurrency } from "@/lib/data/tours";

const categories: TourCategory[] = [
  "Family",
  "Cultural",
  "Trekking",
  "Mountaineering",
  "Jeep Safari",
  "Photography",
  "Camping",
];
const difficulties: Difficulty[] = ["Easy", "Moderate", "Challenging", "Expert"];

type Props = {
  initial?: Tour;
};

export function TourForm({ initial }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [destination, setDestination] = useState(initial?.destination ?? "");
  const [destinationSlug, setDestinationSlug] = useState(
    initial?.destinationSlug ?? "",
  );
  const [location, setLocation] = useState(initial?.location ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [overview, setOverview] = useState(initial?.overview ?? "");
  const [duration, setDuration] = useState(initial?.duration ?? "5 Days");
  const [durationDays, setDurationDays] = useState(initial?.durationDays ?? 5);
  const [difficulty, setDifficulty] = useState<Difficulty>(
    initial?.difficulty ?? "Moderate",
  );
  const [groupSize, setGroupSize] = useState(initial?.groupSize ?? "8–12 Guests");
  const [elevation, setElevation] = useState(initial?.elevation ?? "");
  const [price, setPrice] = useState(initial?.price ?? 0);
  const [currency, setCurrency] = useState<TourCurrency>(
    initial?.currency ?? "USD",
  );
  const [category, setCategory] = useState<TourCategory>(
    initial?.category ?? "Family",
  );
  const [featured, setFeatured] = useState(initial?.featured ?? true);
  const [image, setImage] = useState(initial?.image ?? "");
  const [images, setImages] = useState<string[]>(initial?.images ?? []);
  const [included, setIncluded] = useState(
    (initial?.included ?? []).join("\n"),
  );
  const [excluded, setExcluded] = useState(
    (initial?.excluded ?? []).join("\n"),
  );
  const [itinerary, setItinerary] = useState(
    initial?.itinerary ?? [{ day: 1, title: "", description: "" }],
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const payload = {
      title,
      slug,
      destination,
      destinationSlug,
      location,
      description,
      overview,
      duration,
      durationDays,
      difficulty,
      groupSize,
      elevation,
      trekLocation: destination,
      departurePoint: "Departure from Lahore / Islamabad",
      price,
      currency,
      category,
      featured,
      image: image || images[0] || "",
      images: images.length ? images : image ? [image] : [],
      included: included.split("\n").map((s) => s.trim()).filter(Boolean),
      excluded: excluded.split("\n").map((s) => s.trim()).filter(Boolean),
      itinerary: itinerary
        .filter((d) => d.title.trim())
        .map((d, i) => ({ ...d, day: d.day || i + 1 })),
    };
    try {
      const res = await fetch(
        initial ? `/api/admin/tours/${initial.id}` : "/api/admin/tours",
        {
          method: initial ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      toast.success(initial ? "Tour updated" : "Tour created");
      router.push("/admin/tours");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
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
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            required
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              if (!initial) {
                setDestinationSlug(
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
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Hunza Valley, Gilgit-Baltistan, Pakistan"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            min={0}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currency">Currency</Label>
          <select
            id="currency"
            className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as TourCurrency)}
          >
            <option value="USD">USD</option>
            <option value="PKR">PKR</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration">Duration label</Label>
          <Input
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="days">Duration (days)</Label>
          <Input
            id="days"
            type="number"
            min={1}
            value={durationDays}
            onChange={(e) => setDurationDays(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <select
            className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value as TourCategory)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label>Difficulty</Label>
          <select
            className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          >
            {difficulties.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="group">Group size</Label>
          <Input
            id="group"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
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
        <label className="flex items-center gap-2 text-sm md:col-span-2">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          Featured on homepage
        </label>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Short description</Label>
          <Textarea
            id="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="overview">Overview</Label>
          <Textarea
            id="overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
        </div>
      </div>

      <ImageUploader
        folder="tours"
        label="Cover image"
        value={image}
        onChange={(url) => {
          setImage(url);
          if (url && !images.includes(url)) setImages([url, ...images]);
        }}
      />
      <ImageUploader
        folder="tours"
        label="Gallery images"
        multiple
        values={images}
        onChange={() => undefined}
        onChangeMany={setImages}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Itinerary</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              setItinerary([
                ...itinerary,
                { day: itinerary.length + 1, title: "", description: "" },
              ])
            }
          >
            Add day
          </Button>
        </div>
        {itinerary.map((day, i) => (
          <div key={i} className="grid gap-3 rounded-2xl border border-border p-4">
            <Input
              placeholder={`Day ${i + 1} title`}
              value={day.title}
              onChange={(e) => {
                const next = [...itinerary];
                next[i] = { ...day, day: i + 1, title: e.target.value };
                setItinerary(next);
              }}
            />
            <Textarea
              placeholder="What happens this day"
              value={day.description}
              onChange={(e) => {
                const next = [...itinerary];
                next[i] = { ...day, description: e.target.value };
                setItinerary(next);
              }}
            />
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Included (one per line)</Label>
          <Textarea value={included} onChange={(e) => setIncluded(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Excluded (one per line)</Label>
          <Textarea value={excluded} onChange={(e) => setExcluded(e.target.value)} />
        </div>
      </div>

      <Button type="submit" disabled={busy}>
        {busy ? "Saving…" : initial ? "Save changes" : "Create tour"}
      </Button>
    </form>
  );
}
