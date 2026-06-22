import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ToursListing } from "@/components/tours/tours-listing";
import { tours } from "@/lib/data/tours";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Tours & Expeditions",
  description: `Browse premium adventure tours across Skardu, Hunza, K2 Base Camp, Fairy Meadows, and more with ${siteName}.`,
};

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden pb-12 pt-8">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container-premium relative">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Adventures Await
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tours & Expeditions
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              From gentle cultural circuits to world-class trekking expeditions
              — find your perfect Gilgit-Baltistan adventure.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-premium">
            <ToursListing tours={tours} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
