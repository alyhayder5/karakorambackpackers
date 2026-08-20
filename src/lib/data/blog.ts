export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  dateLabel: string;
  datePublished: string;
  image: string;
  imageAlt: string;
  author: string;
  readTime: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "skardu-travel-guide",
    title: "The Ultimate Skardu Travel Guide",
    description: "Everything you need to know before visiting the gateway to the Karakoram.",
    excerpt:
      "From Kachura Lakes to Cold Desert, discover why Skardu is Pakistan's adventure capital.",
    content: `Skardu sits at the confluence of the Indus and Shigar rivers, framed by some of the world's highest peaks. Whether you're preparing for a K2 expedition or seeking a leisurely lakes circuit, this guide covers the essentials.

**Getting There:** Daily flights from Islamabad (weather permitting) or the scenic Karakoram Highway drive from Gilgit.

**Must-See:** Upper Kachura Lake, Shangrila Resort, Cold Desert, Shigar Fort, and Manthal Buddha rock carving.

**Best Time:** April through October, with peak season June–August.

**Where to Stay:** From boutique guesthouses in Skardu town to the heritage Shigar Fort Serena.`,
    dateLabel: "15 Mar 2026",
    datePublished: "2026-03-15",
    image: "/destinations/skardu-blind-lake.jpg",
    imageAlt: "Skardu valley with mountain lake",
    author: "Karakoram Backpackers",
    readTime: "8 min",
    category: "Travel Guide",
  },
  {
    id: "2",
    slug: "hunza-travel-guide",
    title: "Hunza Valley Travel Guide",
    description: "Ancient forts, apricot blossoms, and the warmest hospitality in the Karakoram.",
    excerpt:
      "Plan your perfect Hunza itinerary with our insider tips on forts, lakes, and viewpoints.",
    content: `Hunza Valley has been a crossroads of civilizations for over a thousand years. Today it offers one of the most accessible yet spectacular mountain experiences in Asia.

**Highlights:** Baltit Fort, Altit Fort, Attabad Lake, Passu Cones, Khunjerab Pass, and Eagle's Nest sunset point.

**Culture:** Try chapshuro, attend a traditional music evening, and visit during apricot blossom season (March–April).

**Practical Tips:** Carry cash — ATMs are limited. Dress modestly in villages. Book accommodations ahead in peak season.`,
    dateLabel: "8 Mar 2026",
    datePublished: "2026-03-08",
    image: "/tours/hunza-valley.jpeg",
    imageAlt: "Hunza Valley mountain panorama",
    author: "Karakoram Backpackers",
    readTime: "10 min",
    category: "Travel Guide",
  },
  {
    id: "3",
    slug: "k2-base-camp-guide",
    title: "K2 Base Camp Trek: Complete Guide",
    description: "Prepare for the world's most spectacular trek with our comprehensive guide.",
    excerpt:
      "14 days, 100+ km, and views that will change you forever. Here's how to prepare.",
    content: `The K2 Base Camp trek via the Baltoro Glacier is consistently ranked among the world's greatest treks. Here's what you need to know.

**Duration:** 14 days from Islamabad, including travel.

**Difficulty:** Challenging — long days at altitude (max ~5,150m at Concordia).

**Fitness:** Train with multi-day hikes carrying a loaded pack. Prior altitude experience recommended.

**Gear:** Layering system, broken-in boots, sleeping bag rated to -10°C, trekking poles, and sun protection.

**Permits:** Handled by your tour operator — independent trekking requires NOC from tourism department.`,
    dateLabel: "1 Mar 2026",
    datePublished: "2026-03-01",
    image: "/destinations/haramosh-peak.jpg",
    imageAlt: "Karakoram mountain peaks",
    author: "Karakoram Backpackers",
    readTime: "12 min",
    category: "Expedition Guide",
  },
  {
    id: "4",
    slug: "fairy-meadows-guide",
    title: "Fairy Meadows & Nanga Parbat Guide",
    description: "Camp beneath the Killer Mountain — planning your perfect meadow trek.",
    excerpt:
      "Jeep rides, alpine camping, and the most dramatic mountain face on Earth.",
    content: `Fairy Meadows offers one of the most accessible high-mountain experiences in Pakistan. At 3,300 meters, you camp with unobstructed views of Nanga Parbat's 8,126m north face.

**Access:** Jeep from Raikot Bridge (thrilling!) then 3-hour moderate trek.

**Best Season:** May–September. Meadows are snow-covered until late April.

**Extension:** Continue to Beyal Camp and Nanga Parbat Base Camp for glacier views.

**Accommodation:** Camping (we provide all gear) or basic wooden huts.`,
    dateLabel: "22 Feb 2026",
    datePublished: "2026-02-22",
    image: "/tours/fairy-meadows.jpeg",
    imageAlt: "Fairy Meadows alpine landscape",
    author: "Karakoram Backpackers",
    readTime: "7 min",
    category: "Travel Guide",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const teamMembers = [
  {
    name: "Ali Shan",
    role: "Founder & Trip Manager",
    bio: "Founder of Karakoram Backpackers. Plans and leads trips across the Karakoram, Hindukush, and Himalayas from our Danyore office.",
    image: "/team/ali-shan.jpg",
  },
  {
    name: "Zahid Hussain",
    role: "Co-Founder & Tour Operator",
    bio: "Co-founder and tour operator. Oversees operations and guest experience for customized northern Pakistan itineraries.",
    image: "/team/zahid-hussain.jpg",
  },
  {
    name: "Dr. Nabeel Hussain",
    role: "Expedition Doctor",
    bio: "Expedition doctor supporting high-altitude trips and guest wellbeing on the trail.",
    image: "/team/dr-nabeel-hussain.jpg",
  },
  {
    name: "Ikhlaq Hussain",
    role: "Senior Trip Leader",
    bio: "Senior trip leader for multi-day tours across Gilgit-Baltistan.",
    image: "/team/ikhlaq-hussain.jpg",
  },
  {
    name: "Zahoor Mehdi",
    role: "Senior Tour Guide",
    bio: "Senior tour guide with deep local knowledge of mountain routes and village culture.",
    image: "/team/zahoor-mehdi.jpg",
  },
  {
    name: "Rehan Shango",
    role: "Off-Roading Expert & Tour Guide",
    bio: "Off-roading specialist and tour guide for jeep tracks, remote valleys, and high passes.",
    image: "/team/rehan-shango.jpg",
  },
  {
    name: "Zameer Abbas",
    role: "Tour Guide — Gilgit & Skardu",
    bio: "Guide for the Gilgit and Skardu region, including lakes, forts, and Baltistan circuits.",
    image: "/team/zameer-abbas.jpg",
  },
  {
    name: "Hasnain Fida",
    role: "Tour Guide — Nagar & Hunza",
    bio: "Guide for Nagar and Hunza Valley — forts, Passu, and the Karakoram Highway corridor.",
    image: "/team/hasnain-fida.jpg",
  },
  {
    name: "Hammad Faiz",
    role: "Senior Tour Guide — Lahore Region",
    bio: "Senior tour guide coordinating departures and guest care from the Lahore side.",
    image: "/team/hammad-faiz.jpg",
  },
  {
    name: "Sumaira",
    role: "Senior Trip Leader",
    bio: "Senior trip leader supporting group logistics and guest experience on the trail.",
    image: "/team/sumaira.jpg",
  },
];

export const companyStats = [
  { value: "8+", label: "Years Guiding" },
  { value: "438", label: "International Guests" },
  { value: "173", label: "Local Guests" },
  { value: "611", label: "Trips Led" },
];
