/** Stay under typical serverless body limits (Vercel ~4.5MB). */
const MAX_BYTES = 3.5 * 1024 * 1024;
const MAX_EDGE = 2000;

function withJpgName(name: string) {
  return name.replace(/\.[a-z0-9]+$/i, "") + ".jpg";
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  quality: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) reject(new Error("Could not compress image"));
        else resolve(blob);
      },
      "image/jpeg",
      quality,
    );
  });
}

export async function compressImageForUpload(file: File): Promise<File> {
  if (file.type === "image/gif") {
    if (file.size > MAX_BYTES) {
      throw new Error(
        "This GIF is too large. Use a JPG, PNG, or WebP instead.",
      );
    }
    return file;
  }

  const bitmap = await createImageBitmap(file);
  const needsResize = Math.max(bitmap.width, bitmap.height) > MAX_EDGE;
  if (!needsResize && file.size <= MAX_BYTES && file.type !== "image/png") {
    bitmap.close();
    return file;
  }

  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    bitmap.close();
    throw new Error("Could not process image");
  }
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  for (const quality of [0.82, 0.7, 0.58, 0.45]) {
    const blob = await canvasToBlob(canvas, quality);
    if (blob.size <= MAX_BYTES) {
      return new File([blob], withJpgName(file.name), { type: "image/jpeg" });
    }
  }

  throw new Error("Image is still too large after compression. Try a smaller photo.");
}

export function readUploadError(status: number, text: string) {
  if (status === 413) {
    return "Image is too large for the server. Try a smaller photo.";
  }
  try {
    const data = JSON.parse(text) as { error?: string };
    return data.error || text.slice(0, 140) || "Upload failed";
  } catch {
    return text.slice(0, 140) || "Upload failed";
  }
}
