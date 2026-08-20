import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import {
  getDestinationBySlug,
  getDestinations,
  readCms,
  slugify,
  writeCms,
} from "@/lib/cms/store";
import type { Destination } from "@/lib/data/destinations";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(getDestinations());
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as Partial<Destination>;
  const name = (body.name || "").trim();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  const slug = slugify(body.slug || name);
  if (getDestinationBySlug(slug)) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
  }
  const destination: Destination = {
    slug,
    name,
    tagline: body.tagline || "",
    description: body.description || "",
    overview: body.overview || body.description || "",
    image: body.image || "/destinations/passu-cones.jpg",
    images: body.images?.length ? body.images : body.image ? [body.image] : [],
    elevation: body.elevation || "",
    bestTime: body.bestTime || "April – October",
    highlights: body.highlights || [],
    attractions: body.attractions || [],
    stats: body.stats || [
      { label: "Elevation", value: body.elevation || "—" },
    ],
    featured: Boolean(body.featured),
    bentoSize: body.bentoSize || "medium",
  };
  const cms = readCms();
  cms.destinations = [destination, ...cms.destinations];
  writeCms(cms);
  return NextResponse.json(destination, { status: 201 });
}
