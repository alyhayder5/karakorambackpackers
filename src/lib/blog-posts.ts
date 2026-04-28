/**
 * Homepage blog teaser cards — URLs are on-page anchors until dedicated blog routes exist.
 */
export type BlogPostPreview = {
  id: string;
  slug: string;
  title: string;
  /** Plain summary for listings + JSON-LD description (keep unique per post). */
  description: string;
  dateLabel: string;
  /** ISO 8601 for schema.org datePublished */
  datePublished: string;
  image: string;
  imageAlt: string;
};

export const blogPostPreviews: BlogPostPreview[] = [
  {
    id: "1",
    slug: "karakoram-summer-pack-list",
    title: "What to pack for a Karakoram summer trek",
    description:
      "Layering, footwear, hydration, and small gear picks we recommend for predictable summer mountain weather across Hunza and base-camp corridors.",
    dateLabel: "12 Mar 2026",
    datePublished: "2026-03-12",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    imageAlt: "Backpack and hiking boots on a wooden bench",
  },
  {
    id: "2",
    slug: "altitude-acclimatization-groups",
    title: "Altitude tips: how we help groups acclimatize safely",
    description:
      "How we pace rest days, communicate symptoms, and adjust itineraries around elevation so hikers and families ease into thinner air.",
    dateLabel: "2 Mar 2026",
    datePublished: "2026-03-02",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    imageAlt: "Mountain summit above a sea of clouds",
  },
  {
    id: "3",
    slug: "responsible-travel-karakoram",
    title: "Responsible travel in fragile mountain ecosystems",
    description:
      "Leave-no-trace basics, campsite choices, and why lighter footprints keep Gilgit–Baltistan’s valleys accessible for generations of trekkers.",
    dateLabel: "18 Feb 2026",
    datePublished: "2026-02-18",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    imageAlt: "Hiker on a narrow ridge overlooking valleys",
  },
];
