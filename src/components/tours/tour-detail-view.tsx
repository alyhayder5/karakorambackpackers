"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  Mountain,
  Check,
  X,
  MapPin,
} from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Tour } from "@/lib/data/tours";
import { formatPrice } from "@/lib/utils";

export function TourDetailView({ tour }: { tour: Tour }) {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "1",
    message: "",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request sent!", {
      description: "We'll contact you within 24 hours to confirm your adventure.",
    });
    setBooking({ name: "", email: "", phone: "", date: "", guests: "1", message: "" });
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-premium pb-12">
              <Badge variant="accent" className="mb-4">
                {tour.category}
              </Badge>
              <h1 className="max-w-3xl text-4xl font-bold text-white md:text-6xl">
                {tour.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {tour.destination}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mountain className="h-4 w-4" />
                  {tour.difficulty}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {tour.rating} ({tour.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-premium grid gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold">Overview</h2>
                  <p className="mt-4 leading-relaxed text-muted">{tour.overview}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold">Itinerary</h2>
                  <div className="mt-6 space-y-0">
                    {tour.itinerary.map((day, i) => (
                      <div key={day.day} className="relative flex gap-6 pb-8">
                        {i < tour.itinerary.length - 1 && (
                          <div className="absolute left-[19px] top-10 h-full w-px bg-border" />
                        )}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/30">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="font-semibold">{day.title}</h3>
                          <p className="mt-1 text-sm text-muted">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <h3 className="mb-4 font-bold text-success">Included</h3>
                    <ul className="space-y-2">
                      {tour.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <h3 className="mb-4 font-bold text-muted">Not Included</h3>
                    <ul className="space-y-2">
                      {tour.excluded.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <X className="mt-0.5 h-4 w-4 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold">Gallery</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {tour.images.map((img) => (
                      <div
                        key={img}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl img-zoom"
                      >
                        <Image
                          src={img}
                          alt={tour.title}
                          fill
                          className="object-cover"
                          sizes="33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-3xl border border-border bg-surface p-6 premium-shadow">
                  <p className="text-sm text-muted">Starting from</p>
                  <p className="text-4xl font-bold text-primary">
                    {formatPrice(tour.price)}
                  </p>
                  <p className="mt-1 text-xs text-muted">per person</p>
                  <div className="mt-4 space-y-2 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Group size: {tour.groupSize}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      {tour.difficulty}
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleBooking}
                  className="rounded-3xl border border-border bg-surface p-6 space-y-4"
                >
                  <h3 className="text-lg font-bold">Book This Tour</h3>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      required
                      value={booking.name}
                      onChange={(e) =>
                        setBooking({ ...booking, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={booking.email}
                      onChange={(e) =>
                        setBooking({ ...booking, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={booking.phone}
                      onChange={(e) =>
                        setBooking({ ...booking, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={booking.date}
                        onChange={(e) =>
                          setBooking({ ...booking, date: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Guests</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        value={booking.guests}
                        onChange={(e) =>
                          setBooking({ ...booking, guests: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={booking.message}
                      onChange={(e) =>
                        setBooking({ ...booking, message: e.target.value })
                      }
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Request Booking
                  </Button>
                </form>

                <Link href="/tours">
                  <Button variant="outline" className="w-full">
                    ← Back to Tours
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
