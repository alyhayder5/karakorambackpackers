import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getTours } from "@/lib/cms/store";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { DeleteButton } from "@/components/admin/delete-button";

export const dynamic = "force-dynamic";

export default function AdminToursPage() {
  const tours = getTours();
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Tours</h1>
          <p className="mt-1 text-sm text-muted">
            Create packages visitors see on /tours
          </p>
        </div>
        <Link href="/admin/tours/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {tours.map((tour) => (
          <article
            key={tour.id}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
                sizes="360px"
              />
            </div>
            <div className="space-y-3 p-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-accent">
                  {tour.destination}
                </p>
                <h2 className="font-semibold">{tour.title}</h2>
                <p className="text-sm text-primary">
                  {formatPrice(tour.price, tour.currency)}
                </p>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/tours/${tour.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Edit
                  </Button>
                </Link>
                <DeleteButton
                  endpoint={`/api/admin/tours/${tour.id}`}
                  label={tour.title}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
