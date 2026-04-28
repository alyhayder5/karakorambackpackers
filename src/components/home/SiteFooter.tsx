import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contentWidthShell } from "@/lib/content-shell";
import {
  getSiteGoogleMapsEmbedSrc,
  siteAddressLine,
  siteDescription,
  siteGoogleMapsUrl,
  siteName,
  sitePhoneDisplay,
  sitePhoneHref,
  siteSupportEmail,
} from "@/lib/site";

const company = [
  { href: "/#trust-by-numbers", label: "Team" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#why-us", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const seasonalTours = [
  "Hunza Valley",
  "Fairy Meadows",
  "Hunza, Naltar Valley, China Border",
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-white/5 bg-[#060608] py-16"
    >
      <div className={`grid gap-12 sm:grid-cols-2 lg:grid-cols-4 ${contentWidthShell}`}>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-lg font-bold text-white">
            {siteName.split(" ")[0]}
            <span className="text-accent">
              {" "}
              {siteName.split(" ").slice(1).join(" ")}
            </span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {siteDescription}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-400">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{siteAddressLine}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a
                href={`mailto:${siteSupportEmail}`}
                className="hover:text-white"
              >
                {siteSupportEmail}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`tel:${sitePhoneHref}`} className="hover:text-white">
                {sitePhoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2">
            {company.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Seasonal tours
          </h3>
          <ul className="mt-4 space-y-2">
            {seasonalTours.map((label) => (
              <li
                key={label}
                className="text-sm leading-snug text-zinc-400"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Office location
          </h3>
          <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 sm:aspect-[16/10]">
            <iframe
              title="Karakoram Backpackers on Google Maps"
              src={getSiteGoogleMapsEmbedSrc()}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div
        className={`mt-12 border-t border-white/5 pt-8 text-center text-xs text-zinc-500 ${contentWidthShell}`}
      >
        © {new Date().getFullYear()} {siteName}. All rights reserved.
      </div>
    </footer>
  );
}
