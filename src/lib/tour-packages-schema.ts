import type { TourPackage } from "@/lib/tour-packages";
import { getSiteUrl, siteName } from "@/lib/site";

function tripImage(pkg: TourPackage): string {
  if (pkg.image.startsWith("http")) return pkg.image;
  const base = getSiteUrl().replace(/\/$/, "");
  return `${base}${pkg.image.startsWith("/") ? "" : "/"}${pkg.image}`;
}

function offerFor(pkg: TourPackage, pageUrl: string) {
  if (pkg.priceAmount === "0") {
    return {
      "@type": "Offer" as const,
      name: `${pkg.schemaName} — quotation on enquiry`,
      url: `${pageUrl}#package-${pkg.id}`,
      seller: {
        "@type": "TravelAgency" as const,
        name: siteName,
      },
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      description:
        "Final price depends on itinerary, seats, season, and inclusions—we confirm in writing.",
    };
  }

  return {
    "@type": "Offer" as const,
    url: `${pageUrl}#package-${pkg.id}`,
    seller: {
      "@type": "TravelAgency" as const,
      name: siteName,
    },
    priceCurrency: "USD",
    price: pkg.priceAmount,
    availability: "https://schema.org/InStock",
  };
}

/**
 * ItemList of Trip entities — satisfies Google-supported Trip + AggregateRating pairing
 * when visible ratings match markup (March 2025 / 2026 guidance: align with real reviews).
 */
export function buildTourPackagesItemListJsonLd(packages: TourPackage[]): object {
  const pageUrl = `${getSiteUrl().replace(/\/$/, "")}/`;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#packages`,
    name: `${siteName} — Karakoram tour packages (${new Date().getFullYear()})`,
    description:
      "Solo, couple, family, and custom Karakoram travel packages departing Gilgit–Baltistan. Listed prices are indicative starting-from amounts in USD where applicable; bespoke itineraries quoted on enquiry.",
    numberOfItems: packages.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: packages.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@context": "https://schema.org",
        "@type": "Trip",
        "@id": `${pageUrl}#package-${pkg.id}`,
        url: `${pageUrl}#package-${pkg.id}`,
        name: pkg.schemaName,
        description: pkg.seoDescription,
        image: tripImage(pkg),
        provider: {
          "@type": "TravelAgency",
          name: siteName,
          url: getSiteUrl(),
        },
        offers: offerFor(pkg, pageUrl),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: String(pkg.ratingValue),
          reviewCount: String(pkg.reviewCount),
          bestRating: "5",
          worstRating: "1",
        },
      },
    })),
  };
}
