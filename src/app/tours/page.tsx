import { Suspense } from "react";
import { Footer } from "@/components/layout/footer";
import { ToursListing } from "@/components/tours/tours-listing";
import { tours } from "@/lib/data/tours";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Tours & Treks",
  description: `Browse family tours, cultural festivals, and treks with ${siteName}: Fairy Meadows, Hunza Valley, the 12-day Gilgit–Skardu circuit, Shyok Winter Festival, and more.`,
};

export default function ToursPage() {
  return (
    <>
      <main className="pt-[120px]">
        <section className="relative overflow-hidden pb-12 pt-8">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container-premium relative">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Tours
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Family Tours, Festivals & Treks
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              From a 5-day Fairy Meadows trek and Hunza family tour to winter
              festivals in Khaplu and Hunza, Chilam Joshi in Kalash, and a
              12-day Gilgit–Skardu circuit — these are the trips we actually
              run.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-premium">
            <Suspense fallback={<p className="text-muted">Loading tours...</p>}>
              <ToursListing tours={tours} />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
