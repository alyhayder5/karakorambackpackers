import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tours } from "@/lib/data/tours";
import { formatPrice } from "@/lib/utils";

export const metadata = { title: "My Bookings" };

const bookings = tours.slice(0, 4).map((tour, i) => ({
  id: String(i + 1),
  tour,
  date: ["2026-07-15", "2026-08-20", "2026-09-05", "2026-06-10"][i],
  status: ["Confirmed", "Pending", "Confirmed", "Completed"][i],
  guests: [2, 1, 4, 2][i],
  total: tour.price * [2, 1, 4, 2][i],
}));

export default function BookingsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <DashboardShell>
          <div>
            <h1 className="text-3xl font-bold">My Bookings</h1>
            <p className="mt-2 text-muted">View and manage your tour reservations.</p>

            <div className="mt-8 space-y-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {b.tour.destination}
                      </Badge>
                      <h3 className="text-lg font-bold">{b.tour.title}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {b.date} · {b.guests} guest{b.guests > 1 ? "s" : ""} ·{" "}
                        {b.tour.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant={b.status === "Completed" ? "outline" : b.status === "Confirmed" ? "success" : "secondary"}>
                        {b.status}
                      </Badge>
                      <p className="mt-2 text-xl font-bold text-primary">
                        {formatPrice(b.total)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Link href={`/tours/${b.tour.slug}`}>
                      <Button size="sm" variant="outline">
                        View Tour
                      </Button>
                    </Link>
                    {b.status === "Pending" && (
                      <Button size="sm" variant="ghost">
                        Cancel
                      </Button>
                    )}
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
