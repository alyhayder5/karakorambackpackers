import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { destinations as seedDestinations } from "@/lib/data/destinations";
import { tours as seedTours } from "@/lib/data/tours";
import { teamMembers as seedTeam } from "@/lib/data/blog";
import { galleryImages as seedGallery } from "@/lib/data/content";
import {
  siteAddressLine,
  siteGoogleMapsUrl,
  sitePhoneDisplay,
  sitePhoneHref,
  siteSupportEmail,
} from "@/lib/site";
import type { CmsData, GalleryItem, TeamMember } from "./types";

const CMS_PATH = path.join(process.cwd(), "data", "cms.json");

function seed(): CmsData {
  return {
    tours: seedTours.map((t) => ({ ...t })),
    destinations: seedDestinations.map((d) => ({ ...d })),
    gallery: seedGallery.map((g) => ({
      ...g,
      height: g.height as GalleryItem["height"],
    })),
    team: seedTeam.map((m, i) => ({
      id: `team-${i + 1}`,
      ...m,
    })),
    about: {
      headline: "Born in the Mountains, Built for Adventure",
      story: [
        "Karakoram Backpackers was founded in Gilgit-Baltistan by Ali Shan (Founder & Trip Manager) and Zahid Hussain (Co-Founder & Tour Operator). Based in Danyore, we specialize in customized tours across northern Pakistan and focus on sustainable tourism — authentic experiences in the Karakoram, Hindukush, and Himalayas.",
        "Today we lead family tours, festival journeys, and treks across Fairy Meadows, Hunza, Skardu, Khaplu, Shimshal, Darel, and Kalash — always with local expertise, sustainable practices, and an unwavering commitment to safety.",
      ],
      mission:
        "To share the unparalleled beauty of Gilgit-Baltistan with travelers worldwide through safe, sustainable, and deeply authentic adventure experiences led by local experts.",
      vision:
        "To establish Pakistan's northern areas as a premier global adventure destination — where world-class expeditions meet warm Balti hospitality and leave positive impact on local communities.",
      image: "/destinations/kutwal-valley.jpg",
      imageAlt: "Kutwal Valley and Haramosh Peak",
    },
    contact: {
      address: siteAddressLine,
      email: siteSupportEmail,
      phoneDisplay: sitePhoneDisplay,
      phoneHref: sitePhoneHref,
      hours: "Mon – Sat, 9:00 AM – 6:00 PM (PKT)",
      mapsUrl: siteGoogleMapsUrl,
    },
  };
}

export function readCms(): CmsData {
  try {
    if (fs.existsSync(CMS_PATH)) {
      const parsed = JSON.parse(fs.readFileSync(CMS_PATH, "utf8")) as CmsData;
      const base = seed();
      return {
        ...base,
        ...parsed,
        tours: parsed.tours ?? base.tours,
        destinations: parsed.destinations ?? base.destinations,
        gallery: parsed.gallery ?? base.gallery,
        team: parsed.team ?? base.team,
        about: { ...base.about, ...parsed.about },
        contact: { ...base.contact, ...parsed.contact },
      };
    }
  } catch {
    /* fall through to seed */
  }
  return seed();
}

export function writeCms(data: CmsData) {
  fs.mkdirSync(path.dirname(CMS_PATH), { recursive: true });
  fs.writeFileSync(CMS_PATH, JSON.stringify(data, null, 2), "utf8");
  revalidatePath("/", "layout");
}

export function getTours() {
  return readCms().tours;
}

export function getTourBySlug(slug: string) {
  return getTours().find((t) => t.slug === slug);
}

export function getFeaturedTours() {
  return getTours().filter((t) => t.featured);
}

export function getToursByDestination(destinationSlug: string) {
  return getTours().filter((t) => t.destinationSlug === destinationSlug);
}

export function getDestinations() {
  return readCms().destinations;
}

export function getDestinationBySlug(slug: string) {
  return getDestinations().find((d) => d.slug === slug);
}

export function getFeaturedDestinations() {
  return getDestinations().filter((d) => d.featured);
}

export function getGallery(): GalleryItem[] {
  return readCms().gallery;
}

export function getTeam(): TeamMember[] {
  return readCms().team;
}

export function getAbout() {
  return readCms().about;
}

export function getContact() {
  return readCms().contact;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
