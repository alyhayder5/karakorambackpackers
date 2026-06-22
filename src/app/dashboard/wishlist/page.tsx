import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { getFeaturedTours } from "@/lib/data/tours";
import { formatPrice } from "@/lib/utils";

export const metadata = { title: "Wishlist" };

export default function WishlistPage() {
  const wishlist = getFeaturedTours();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <DashboardShell>
          <div>
            <h1 className="text-3xl font-bold">Wishlist</h1>
            <p className="mt-2 text-muted">Tours you&apos;ve saved for later.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {wishlist.map((tour) => (
                <div
                  key={tour.id}
                  className="overflow-hidden rounded-2xl border border-border bg-surface"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-red-400 backdrop-blur-sm"
                      aria-label="Remove from wishlist"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{tour.title}</h3>
                    <p className="text-sm text-muted">{tour.duration}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="font-bold text-primary">
                        {formatPrice(tour.price)}
                      </p>
                      <Link href={`/tours/${tour.slug}`}>
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DashboardShell>
      </main>
      <Footer />
    </>
  );
}
