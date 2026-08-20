import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { readCms, writeCms } from "@/lib/cms/store";
import type { GalleryItem } from "@/lib/cms/types";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(readCms().gallery);
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as Partial<GalleryItem>;
  if (!body.src) {
    return NextResponse.json({ error: "Image is required" }, { status: 400 });
  }
  const item: GalleryItem = {
    id: crypto.randomUUID(),
    src: body.src,
    alt: body.alt || "Karakoram Backpackers gallery photo",
    height: body.height || "medium",
  };
  const cms = readCms();
  cms.gallery = [item, ...cms.gallery];
  writeCms(cms);
  return NextResponse.json(item, { status: 201 });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const cms = readCms();
  cms.gallery = cms.gallery.filter((g) => g.id !== id);
  writeCms(cms);
  return NextResponse.json({ ok: true });
}
