import { notFound } from "next/navigation";
import Link from "next/link";
import { TourForm } from "@/components/admin/tour-form";
import { readCms } from "@/lib/cms/store";

type Props = { params: Promise<{ id: string }> };

export const dynamic = "force-dynamic";

export default async function EditTourPage({ params }: Props) {
  const { id } = await params;
  const tour = readCms().tours.find((t) => t.id === id || t.slug === id);
  if (!tour) notFound();
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm text-muted">
        <Link href="/admin/tours" className="text-primary">
          Tours
        </Link>{" "}
        / Edit
      </p>
      <h1 className="mb-6 mt-2 text-3xl font-bold">{tour.title}</h1>
      <TourForm initial={tour} />
    </div>
  );
}
