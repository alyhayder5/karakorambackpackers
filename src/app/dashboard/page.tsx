import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tours } from "@/lib/data/tours";

export const metadata = {
  title: "Dashboard",
};

const demoBookings = [
  {
    id: "1",
    tour: tours[1],
    date: "2026-07-15",
    status: "Confirmed",
    guests: 2,
  },
  {
    id: "2",
    tour: tours[2],
    date: "2026-08-20",
    status: "Pending",
    guests: 1,
  },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <DashboardShell>
          <div>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="mt-2 text-muted">
              Manage your bookings, wishlist, and profile.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Active Bookings", value: "2" },
                { label: "Wishlist Items", value: "3" },
                { label: "Completed Tours", value: "5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold">Recent Bookings</h2>
              <div className="mt-4 space-y-4">
                {demoBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold">{booking.tour.title}</p>
                      <p className="text-sm text-muted">
                        {booking.date} · {booking.guests} guest
                        {booking.guests > 1 ? "s" : ""}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          booking.status === "Confirmed" ? "success" : "secondary"
                        }
                      >
                        {booking.status}
                      </Badge>
                      <Link href={`/tours/${booking.tour.slug}`}>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DashboardShell>
      </main>
      <Footer />
    </>
  );
}
