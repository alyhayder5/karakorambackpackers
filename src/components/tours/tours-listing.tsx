"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Users, Mountain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import type { Tour } from "@/lib/data/tours";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-surface card-lift">
      <div className="relative aspect-[16/10] img-zoom">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute left-4 top-4" variant="accent">
          {tour.category}
        </Badge>
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {tour.rating}
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {tour.destination}
        </p>
        <h3 className="mt-1 text-xl font-bold">{tour.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{tour.description}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Mountain className="h-3.5 w-3.5" />
            {tour.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {tour.groupSize}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted">From</p>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(tour.price)}
            </p>
          </div>
          <Link href={`/tours/${tour.slug}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

type TourFiltersProps = {
  tours: Tour[];
};

export function ToursListing({ tours: allTours }: TourFiltersProps) {
  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const destinations = useMemo(
    () => [...new Set(allTours.map((t) => t.destination))],
    [allTours],
  );

  const filtered = useMemo(() => {
    let result = [...allTours];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.destination.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q),
      );
    }
    if (destination !== "all") {
      result = result.filter((t) => t.destination === destination);
    }
    if (difficulty !== "all") {
      result = result.filter((t) => t.difficulty === difficulty);
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "duration":
        result.sort((a, b) => a.durationDays - b.durationDays);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [allTours, search, destination, difficulty, sort]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4">
        <input
          type="search"
          placeholder="Search tours..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <select
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setPage(1);
          }}
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="all">All Destinations</option>
          {destinations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
            setPage(1);
          }}
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="all">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Challenging">Challenging</option>
          <option value="Expert">Expert</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="duration">Duration</option>
        </select>
      </div>

      <p className="mb-6 text-sm text-muted">
        Showing {paginated.length} of {filtered.length} tours
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-muted">
          No tours match your filters. Try adjusting your search.
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`h-10 w-10 rounded-full text-sm font-medium transition-colors ${
                p === page
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:bg-surface-elevated"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
