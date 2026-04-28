"use client";

import { useMemo, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Person = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
};

const PEOPLE: Person[] = [
  {
    id: "couple",
    name: "Rahim & Lara A.",
    role: "Couple travelers",
    quote:
      "We wanted Hunza slow and romantic—fewer checkpoints, longer sunsets—and they balanced every camp night with space to breathe. Felt like traveling with friends who actually pick up the phone.",
    image: "/tour-package/couple.jpeg",
  },
  {
    id: "family",
    name: "The Hassan–Siddiq family",
    role: "Family group (two generations)",
    quote:
      "With grandparents and teenagers in one van you worry about pacing—they split tough days cleanly, flagged altitude gently, and the kids still talk about Fairy Meadows louder than Wi‑Fi passwords.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&q=80",
  },
  {
    id: "teacher",
    name: "Maria Tan",
    role: "Secondary school teacher",
    quote:
      "I grade rubrics all year; this trip handed me transparency instead—route PDFs before we flew, timings that matched reality in the valleys, zero drama at handovers. Classroom-order comfort in terrain that isn’t tame.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    id: "geologist",
    name: "Dr. Elena Volkov",
    role: "Field geologist",
    quote:
      "I inspect structure and strata for work—having guides who understood fault lines casually, without turning every stop into a seminar, meant I could nerd out—or just stand under Nanga Parbat and shut up.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    id: "solo-female",
    name: "Priya Sharma",
    role: "Solo female traveler",
    quote:
      "First time solo above 3,000 m—they paired me thoughtfully, lodges felt safe without feeling sterile, and I never argued for seat choice on jeeps twice. Came back quieter in the lungs, louder in the camera roll.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
];

const VISIBLE_COUNT = 3;

function windowStartIndex(focused: number, total: number, visible: number) {
  if (total <= visible) return 0;
  const maxStart = total - visible;
  const centered = focused - Math.floor((visible - 1) / 2);
  return Math.min(Math.max(centered, 0), maxStart);
}

export function TestimonialsBlock() {
  const n = PEOPLE.length;
  const [focusedIndex, setFocusedIndex] = useState(0);

  const start = useMemo(
    () => windowStartIndex(focusedIndex, n, VISIBLE_COUNT),
    [focusedIndex, n],
  );

  const visible = PEOPLE.slice(start, start + VISIBLE_COUNT);
  const active = PEOPLE[focusedIndex];

  const go = (direction: -1 | 1) => {
    setFocusedIndex((i) => (i + direction + n) % n);
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-t border-white/5 bg-surface/40 py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Testimonials
        </p>
        <h2
          id="testimonials-heading"
          className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Hear from Our Happy Clients
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="min-w-0">
            <div
              className="overflow-hidden rounded-xl"
              aria-roledescription="carousel"
              aria-label="Browse three traveler stories at a time"
            >
              <ul className="space-y-4" aria-live="polite">
                {visible.map((p, slot) => {
                  const absoluteIndex = start + slot;
                  const isFocused = absoluteIndex === focusedIndex;
                  return (
                    <li
                      key={p.id}
                      className={`flex gap-4 rounded-2xl border p-4 sm:p-5 ${
                        isFocused
                          ? "z-[1] border-accent/40 bg-surface-elevated shadow-xl shadow-accent/15 ring-1 ring-accent/30"
                          : "border-white/5 bg-[#0a0a0c]/80 shadow-none ring-0"
                      }`}
                    >
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
                        <Image
                          src={p.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        {isFocused && (
                          <Quote
                            className="mb-2 size-6 text-accent"
                            aria-hidden
                          />
                        )}
                        <p className="text-sm leading-relaxed text-zinc-300">
                          &ldquo;{p.quote}&rdquo;
                        </p>
                        <p className="mt-3 text-sm font-semibold text-white">
                          {p.name}
                        </p>
                        <p className="text-xs text-zinc-500">{p.role}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="mt-4 text-xs text-zinc-500" aria-live="polite">
              Story {focusedIndex + 1} of {n} — arrows or dots change who is
              highlighted.
            </p>
          </div>

          <div className="flex min-h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="relative hidden size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15 sm:block">
                <Image
                  src={active.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={`${active.id}-${i}`}
                      className="size-5 shrink-0 fill-accent sm:size-6"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  {active.name}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{active.role}</p>
              </div>
            </div>
            <blockquote className="mt-8 flex flex-1 flex-col">
              <Quote className="mb-4 size-7 text-accent/90" aria-hidden />
              <p className="text-lg leading-relaxed text-zinc-300 lg:text-xl">
                &ldquo;{active.quote}&rdquo;
              </p>
            </blockquote>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
              <div
                className="flex gap-1.5"
                role="group"
                aria-label="Jump to a traveler story"
              >
                {PEOPLE.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    aria-pressed={i === focusedIndex}
                    onClick={() => setFocusedIndex(i)}
                    className={`size-2.5 rounded-full transition ${
                      i === focusedIndex
                        ? "bg-accent shadow-[0_0_10px_rgba(255,92,61,0.6)]"
                        : "bg-zinc-600 hover:bg-zinc-500"
                    }`}
                    aria-label={`Show ${p.name}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-accent/50 hover:text-white"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-accent/50 hover:text-white"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
