import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { readCms, slugify, writeCms } from "@/lib/cms/store";
import type { Tour } from "@/lib/data/tours";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_: Request, ctx: Ctx) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await ctx.params;
  const tour = readCms().tours.find((t) => t.id === id || t.slug === id);
  if (!tour) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(tour);
}

export async function PUT(request: Request, ctx: Ctx) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await ctx.params;
  const cms = readCms();
  const idx = cms.tours.findIndex((t) => t.id === id || t.slug === id);
  if (idx < 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const body = (await request.json()) as Partial<Tour>;
  const current = cms.tours[idx];
  const next: Tour = {
    ...current,
    ...body,
    id: current.id,
    slug: slugify(body.slug || current.slug),
    price: body.price !== undefined ? Number(body.price) : current.price,
    durationDays:
      body.durationDays !== undefined
        ? Number(body.durationDays)
        : current.durationDays,
  };
  cms.tours[idx] = next;
  writeCms(cms);
  return NextResponse.json(next);
}

export async function DELETE(_: Request, ctx: Ctx) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await ctx.params;
  const cms = readCms();
  const before = cms.tours.length;
  cms.tours = cms.tours.filter((t) => t.id !== id && t.slug !== id);
  if (cms.tours.length === before) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  writeCms(cms);
  return NextResponse.json({ ok: true });
}
