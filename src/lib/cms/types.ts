import type { Destination } from "@/lib/data/destinations";
import type { Tour } from "@/lib/data/tours";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  height: "short" | "medium" | "tall";
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type AboutContent = {
  headline: string;
  story: string[];
  mission: string;
  vision: string;
  image: string;
  imageAlt: string;
};

export type ContactContent = {
  address: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  hours: string;
  mapsUrl: string;
};

export type CmsData = {
  tours: Tour[];
  destinations: Destination[];
  gallery: GalleryItem[];
  team: TeamMember[];
  about: AboutContent;
  contact: ContactContent;
};
