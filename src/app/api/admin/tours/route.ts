import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import {
  getTourBySlug,
  getTours,
  readCms,
  slugify,
  writeCms,
} from "@/lib/cms/store";
import type { Tour } from "@/lib/data/tours";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(getTours());
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as Partial<Tour>;
  const title = (body.title || "").trim();
  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }
  const slug = slugify(body.slug || title);
  if (getTourBySlug(slug)) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
  }
  const tour: Tour = {
    id: crypto.randomUUID(),
    slug,
    title,
    destination: body.destination || title,
    destinationSlug: slugify(body.destinationSlug || body.destination || title),
    location: body.location || "Gilgit-Baltistan, Pakistan",
    description: body.description || "",
    overview: body.overview || body.description || "",
    duration: body.duration || "5 Days",
    durationDays: Number(body.durationDays) || 5,
    difficulty: body.difficulty || "Moderate",
    groupSize: body.groupSize || "8–12 Guests",
    elevation: body.elevation || "",
    trekLocation: body.trekLocation || body.destination || title,
    departurePoint: body.departurePoint || "Departure from Lahore / Islamabad",
    price: Number(body.price) || 0,
    currency: body.currency || "USD",
    rating: Number(body.rating) || 5,
    reviewCount: Number(body.reviewCount) || 0,
    image: body.image || "/tours/fairy-meadows.jpeg",
    images: body.images?.length ? body.images : body.image ? [body.image] : [],
    category: body.category || "Family",
    featured: Boolean(body.featured),
    itinerary: body.itinerary || [],
    included: body.included || [],
    excluded: body.excluded || [],
  };
  const cms = readCms();
  cms.tours = [tour, ...cms.tours];
  writeCms(cms);
  return NextResponse.json(tour, { status: 201 });
}
