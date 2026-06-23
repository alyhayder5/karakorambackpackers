import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Share2,
  Globe,
  Video,
} from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import {
  siteName,
  siteAddressLine,
  siteSupportEmail,
  sitePhoneDisplay,
  sitePhoneHref,
} from "@/lib/site";

const footerLinks = {
  explore: [
    { href: "/destinations", label: "Destinations" },
    { href: "/tours", label: "Tours" },
    { href: "/gallery", label: "Gallery" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/tours?category=Mountaineering", label: "Expeditions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-surface">
      <div className="container-premium section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <BrandLogo imageClassName="h-14" />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Premier adventure travel across Gilgit-Baltistan. Expert guides,
              unforgettable expeditions, and the raw beauty of the Karakoram.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, Video].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/40 hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteAddressLine}
              </li>
              <li>
                <a
                  href={`mailto:${siteSupportEmail}`}
                  className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {siteSupportEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${sitePhoneHref}`}
                  className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {sitePhoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
