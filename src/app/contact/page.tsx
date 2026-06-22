"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  siteAddressLine,
  siteSupportEmail,
  sitePhoneDisplay,
  sitePhoneHref,
  getSiteGoogleMapsEmbedSrc,
  siteGoogleMapsUrl,
} from "@/lib/site";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="pb-12 pt-8">
          <div className="container-premium">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Get In Touch
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Ready to plan your adventure? Our team is here to help you craft
              the perfect expedition.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-premium grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl border border-border bg-surface p-8"
              >
                <h2 className="text-xl font-bold">Send a Message</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="space-y-6">
                <div className="rounded-3xl border border-border bg-surface p-8">
                  <h2 className="text-xl font-bold">Office Details</h2>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {siteAddressLine}
                    </li>
                    <li>
                      <a
                        href={`mailto:${siteSupportEmail}`}
                        className="flex items-center gap-3 text-sm text-muted hover:text-foreground"
                      >
                        <Mail className="h-5 w-5 shrink-0 text-primary" />
                        {siteSupportEmail}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${sitePhoneHref}`}
                        className="flex items-center gap-3 text-sm text-muted hover:text-foreground"
                      >
                        <Phone className="h-5 w-5 shrink-0 text-primary" />
                        {sitePhoneDisplay}
                      </a>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      Mon – Sat, 9:00 AM – 6:00 PM (PKT)
                    </li>
                  </ul>
                </div>

                <div className="overflow-hidden rounded-3xl border border-border">
                  <iframe
                    title="Karakoram Backpackers Office Location"
                    src={getSiteGoogleMapsEmbedSrc()}
                    className="h-72 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="bg-surface p-4 text-center">
                    <a
                      href={siteGoogleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
