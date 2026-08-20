import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { readCms, slugify, writeCms } from "@/lib/cms/store";
import type { Destination } from "@/lib/data/destinations";

type Ctx = { params: Promise<{ slug: string }> };

export async function PUT(request: Request, ctx: Ctx) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { slug } = await ctx.params;
  const cms = readCms();
  const idx = cms.destinations.findIndex((d) => d.slug === slug);
  if (idx < 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const body = (await request.json()) as Partial<Destination>;
  const current = cms.destinations[idx];
  cms.destinations[idx] = {
    ...current,
    ...body,
    slug: slugify(body.slug || current.slug),
  };
  writeCms(cms);
  return NextResponse.json(cms.destinations[idx]);
}

export async function DELETE(_: Request, ctx: Ctx) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { slug } = await ctx.params;
  const cms = readCms();
  const before = cms.destinations.length;
  cms.destinations = cms.destinations.filter((d) => d.slug !== slug);
  if (cms.destinations.length === before) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  writeCms(cms);
  return NextResponse.json({ ok: true });
}
