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
  siteDescription,
} from "@/lib/site";

const footerLinks = {
  important: [
    { href: "/about", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  tours: [
    { href: "/tours", label: "Family Tours" },
    { href: "/destinations/hunza", label: "Hunza Valley" },
    { href: "/destinations/fairy-meadows", label: "Fairy Meadows" },
    { href: "/tours", label: "Hunza, Naltar Valley, China Border" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Share2 },
  { href: "https://instagram.com", label: "Instagram", icon: Globe },
  { href: "https://youtube.com", label: "Youtube", icon: Video },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-surface">
      <div className="container-premium section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <BrandLogo imageClassName="h-14" />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {siteDescription}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/40 hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Important Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.important.map((link) => (
                <li key={link.label}>
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
              Tours
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.tours.map((link) => (
                <li key={link.label}>
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
              Connect with us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteAddressLine}
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
              <li>
                <a
                  href={`mailto:${siteSupportEmail}`}
                  className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {siteSupportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            Copyright {new Date().getFullYear()} © All Right Reserved, {siteName}
          </p>
        </div>
      </div>
    </footer>
  );
}
