import { notFound } from "next/navigation";
import Link from "next/link";
import { DestinationForm } from "@/components/admin/destination-form";
import { getDestinationBySlug } from "@/lib/cms/store";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export default async function EditDestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm text-muted">
        <Link href="/admin/destinations" className="text-primary">
          Destinations
        </Link>{" "}
        / Edit
      </p>
      <h1 className="mb-6 mt-2 text-3xl font-bold">{destination.name}</h1>
      <DestinationForm initial={destination} />
    </div>
  );
}
