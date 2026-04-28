import Image from "next/image";
import { Compass, Tent, CalendarCheck } from "lucide-react";
import { contentWidthShell } from "@/lib/content-shell";
import { whyChooseUsImages } from "@/lib/why-choose-us";

const features = [
  {
    title: "Expert tour guides",
    body: "Local leaders who know the trails, weather, and culture—keeping you safe and inspired every day.",
    icon: Compass,
  },
  {
    title: "Best camp experience",
    body: "Thoughtfully planned campsites, warm meals, and gear that stands up to mountain conditions.",
    icon: Tent,
  },
  {
    title: "Easy booking",
    body: "Clear itineraries, transparent pricing, and a team that answers quickly from first question to takeoff.",
    icon: CalendarCheck,
  },
];

export function FeaturesNature() {
  return (
    <section
      id="why-us"
      className="relative flex min-h-[calc(100svh-4.5rem)] scroll-mt-24 flex-col overflow-hidden sm:min-h-[calc(100svh-5rem)]"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px]" />

      <div
        className={`relative z-[1] flex min-h-0 flex-1 flex-col justify-center py-12 sm:py-14 lg:py-14 ${contentWidthShell}`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why choose us
            </p>
            <h2
              id="features-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Discover the beauty of nature
            </h2>
            <ul className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent">
                    <f.icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative ml-auto aspect-[3/4] w-[78%] max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50 lg:w-[70%]">
              <Image
                src={whyChooseUsImages.large}
                alt="Ali Shan — Gilgit-Baltistan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-0 w-[62%] max-w-xs overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/40 ring-4 ring-[#0a0a0c] lg:-bottom-10">
              <div className="relative aspect-[5/3]">
                <Image
                  src={whyChooseUsImages.overlap}
                  alt="Zahid Hussain — Gilgit-Baltistan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 55vw, 28vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
