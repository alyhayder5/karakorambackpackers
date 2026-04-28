/**
 * Tour packages — hero images live in `/public/tour-package/`.
 * Keep `ratingValue` / `reviewCount` aligned with real aggregates and JSON-LD.
 */
export type TourPackage = {
  id: string;
  badge: string;
  /** Card headline (keep natural language for people + search). */
  title: string;
  /** SEO-friendly full name for schema & screen readers. */
  schemaName: string;
  /** Short paragraph on the card — used in JSON-LD `description` as well. */
  seoDescription: string;
  /** Full line for non-split cases (e.g. custom). */
  priceLine: string;
  /** When both set, UI shows `priceLeadingText` larger and `priceAmountText` slightly smaller. */
  priceLeadingText?: string;
  priceAmountText?: string;
  priceNote?: string;
  /** Numeric string for structured data Offer (USD, no symbol). */
  priceAmount: string;
  image: string;
  imageAlt: string;
  /** Aggregate rating shown on card (1–5 scale). */
  ratingValue: number;
  reviewCount: number;
  /** Primary button label (defaults to “Reserve now” in the UI). */
  ctaLabel?: string;
};

export const tourPackages: TourPackage[] = [
  {
    id: "solo",
    badge: "Your rhythm",
    title: "Solo treks & departures",
    schemaName: "Solo Karakoram tour package — guided departures from USD 235",
    seoDescription:
      "Independent-friendly Karakoram trips with small groups, fixed departures, and clear inclusions so you can explore solo without planning stress.",
    priceLine: "Starts from 235$",
    priceLeadingText: "Starts from",
    priceAmountText: "235$",
    priceNote: "per person · typical departures",
    priceAmount: "235",
    image: "/tour-package/solo.jpeg",
    imageAlt:
      "Solo trekker on a mountain trail in Gilgit-Baltistan, Karakoram region",
    ratingValue: 4.9,
    reviewCount: 42,
  },
  {
    id: "couple",
    badge: "Made for two",
    title: "Couple escapes",
    schemaName: "Couple Karakoram tour package — shared room from USD 430",
    seoDescription:
      "Private-feeling mountain routes for two: comfortable stays, quieter pacing along Hunza & Skardu circuits, ideal for honeymoons and anniversaries.",
    priceLine: "Starts from 430$",
    priceLeadingText: "Starts from",
    priceAmountText: "430$",
    priceNote: "for two · shared room",
    priceAmount: "430",
    image: "/tour-package/couple.jpeg",
    imageAlt:
      "Couple watching sunset over Karakoram valleys and mountain ridges",
    ratingValue: 5,
    reviewCount: 117,
  },
  {
    id: "family",
    badge: "Everyone invited",
    title: "Family adventures",
    schemaName: "Family Karakoram tour package — group pricing from USD 790",
    seoDescription:
      "Family-ready itineraries across Gilgit-Baltistan: kid-conscious pacing, support vehicles where needed, and nature-first days everyone remembers.",
    priceLine: "Starts from 790$",
    priceLeadingText: "Starts from",
    priceAmountText: "790$",
    priceNote: "group pricing · ask about seats",
    priceAmount: "790",
    image: "/tour-package/family.jpeg",
    imageAlt: "Family hiking together on an easy Gilgit-Baltistan nature trail",
    ratingValue: 4.97,
    reviewCount: 29,
  },
  {
    id: "custom",
    badge: "We plan with you",
    title: "Customised routes",
    schemaName: "Custom Karakoram itinerary — quotation on request",
    seoDescription:
      "Dates, lodges, pacing, and add-ons tailored to your group—we quote line by line once your route sketch is ready (private groups & expeditions welcome).",
    priceLine: "As per requirement",
    priceNote: "tailored quote — no fixed template",
    priceAmount: "0",
    image: "/tour-package/customized.jpeg",
    imageAlt: "Custom travel planning with map and notebook for Karakoram trip",
    ratingValue: 4.99,
    reviewCount: 10,
    ctaLabel: "Contact us",
  },
];
