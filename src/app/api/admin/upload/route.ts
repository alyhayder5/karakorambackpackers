import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";

const MAX_BYTES = 4 * 1024 * 1024;

const ALLOWED = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif",
]);

const FOLDERS = new Set(["tours", "destinations", "gallery", "team", "about"]);

function safeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-");
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const folderRaw = String(form.get("folder") || "gallery");
  const folder = FOLDERS.has(folderRaw) ? folderRaw : "gallery";

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json(
      { error: "Use JPG, PNG, WebP, GIF, or AVIF" },
      { status: 400 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "File must be under 4MB after compression" },
      { status: 400 },
    );
  }

  const ext = path.extname(file.name) || ".jpg";
  const base = path.basename(file.name, ext);
  const filename = `${Date.now()}-${safeName(base)}${ext.toLowerCase()}`;
  const dir = path.join(process.cwd(), "public", "uploads", folder);
  await mkdir(dir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), buffer);

  return NextResponse.json({
    url: `/uploads/${folder}/${filename}`,
    name: file.name,
    type: file.type,
    size: file.size,
  });
}
