import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getDestinations } from "@/lib/cms/store";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/admin/delete-button";

export const dynamic = "force-dynamic";

export default function AdminDestinationsPage() {
  const destinations = getDestinations();
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Destinations</h1>
          <p className="mt-1 text-sm text-muted">
            Places shown on /destinations
          </p>
        </div>
        <Link href="/admin/destinations/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {destinations.map((d) => (
          <article
            key={d.slug}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="relative aspect-[16/10]">
              <Image src={d.image} alt={d.name} fill className="object-cover" sizes="360px" />
            </div>
            <div className="space-y-3 p-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-accent">
                  {d.tagline}
                </p>
                <h2 className="font-semibold">{d.name}</h2>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/destinations/${d.slug}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Edit
                  </Button>
                </Link>
                <DeleteButton
                  endpoint={`/api/admin/destinations/${d.slug}`}
                  label={d.name}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
