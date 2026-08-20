import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  getDestinations,
  getGallery,
  getTeam,
  getTours,
} from "@/lib/cms/store";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default function AdminHomePage() {
  const tours = getTours();
  const destinations = getDestinations();
  const gallery = getGallery();
  const team = getTeam();

  const cards = [
    {
      href: "/admin/destinations",
      createHref: "/admin/destinations/new",
      label: "Destinations",
      count: `${destinations.length} places`,
      image: destinations[0]?.image || "/destinations/passu-cones.jpg",
    },
    {
      href: "/admin/tours",
      createHref: "/admin/tours/new",
      label: "Tours",
      count: `${tours.length} packages`,
      image: tours[0]?.image || "/tours/fairy-meadows.jpeg",
    },
    {
      href: "/admin/gallery",
      createHref: "/admin/gallery",
      label: "Gallery",
      count: `${gallery.length} photos`,
      image: gallery[0]?.src || "/gallery/01.jpeg",
    },
    {
      href: "/admin/about",
      createHref: "/admin/about",
      label: "About",
      count: `${team.length} team members`,
      image: team[0]?.image || "/team/ali-shan.jpg",
    },
    {
      href: "/admin/contact",
      createHref: "/admin/contact",
      label: "Contact",
      count: "Office details",
      image: "/destinations/kutwal-valley.jpg",
    },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Karakoram Backpackers
          </p>
          <h1 className="mt-1 text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Create and manage Destinations, Tours, Gallery, About, and Contact —
            with live image previews.
          </p>
        </div>
        <Link href="/admin/tours/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create tour
          </Button>
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className="overflow-hidden rounded-3xl border border-border bg-surface"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={card.image}
                alt={card.label}
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-white">{card.label}</h2>
                <p className="text-sm text-white/80">{card.count}</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <Link href={card.href} className="text-sm font-medium text-primary">
                Manage
              </Link>
              <Link href={card.createHref}>
                <Button size="sm" variant="outline" className="gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  Create
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
