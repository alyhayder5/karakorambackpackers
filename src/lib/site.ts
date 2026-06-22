export const siteName = "Karakoram Backpackers";
export const siteNameSlug = "karakorambackpackers";

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "https://www.karakorambackpackers.com";
}

/** Publish your Trustpilot company profile URL once live — enables clickable trust row on packages. */
export function getTrustpilotProfileUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_TRUSTPILOT_URL?.trim();
  if (!raw) return undefined;
  return raw.replace(/\/$/, "");
}

export const siteDescription =
  "Premium adventure travel across Gilgit-Baltistan — expert-guided treks to K2 Base Camp, Hunza, Skardu, Fairy Meadows, Deosai, and beyond. Book your expedition today.";

export const defaultKeywords = [
  "Karakoram Backpackers",
  "Pakistan adventure travel",
  "K2 Base Camp trek",
  "Hunza Valley tours",
  "Skardu expeditions",
  "Fairy Meadows trek",
  "Deosai National Park",
  "Gilgit Baltistan tourism",
  "luxury adventure travel Pakistan",
  "Nanga Parbat trek",
  "Passu Glacier",
  "Baltistan tours",
];

/** Street / area line for footer & structured data */
export const siteAddressLine =
  "Kkh, Near Chinese Graveyard, Danyore, Gilgit";

export const siteSupportEmail = "support@karakorambackpackers.com";

/** Local mobile format (PK) — same digits as SMS / WhatsApp. */
export const sitePhoneDisplay = "03124883570";

/** E.164 for `tel:` / schema.org telephone */
export const sitePhoneHref = "+923124883570";

/** Official Maps listing — directions & "open in app". Place pin matches embed. */
export const siteGoogleMapsUrl =
  "https://www.google.com/maps/place/Karakoram+Backpackers+Office+and+Mountain+gears/@35.9043572,74.3924449,17z/data=!3m1!4b1!4m6!3m5!1s0x38e64901980dc7f1:0x4776fb88874d6c9d!8m2!3d35.9043572!4d74.3924449!16s%2Fg%2F11scmdztxj";

const siteMapsEmbedLatLng = [35.9043572, 74.3924449] as const;

/** Coordinate-based iframe embed (no Maps Embed API key). */
export function getSiteGoogleMapsEmbedSrc(): string {
  const [lat, lng] = siteMapsEmbedLatLng;
  const q = encodeURIComponent(`${lat},${lng}`);
  return `https://maps.google.com/maps?q=${q}&z=17&hl=en&t=m&output=embed`;
}
