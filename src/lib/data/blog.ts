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
    image: "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=1200&q=85",
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
    image: "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=1200&q=85",
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
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
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
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
    name: "Ahmed Khan",
    role: "Founder & Lead Guide",
    bio: "20 years of Karakoram expeditions. Summited multiple 6,000m peaks and led 200+ K2 Base Camp treks.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Fatima Ali",
    role: "Operations Director",
    bio: "Ensures every expedition runs seamlessly — from permits to porter welfare.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Hassan Raza",
    role: "Senior Mountain Guide",
    bio: "IFMGA-certified guide specializing in high-altitude trekking and mountaineering.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sara Bukhari",
    role: "Cultural Experience Lead",
    bio: "Connects travelers with Hunza and Balti communities through authentic cultural programs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export const companyStats = [
  { value: "5,000+", label: "Happy Travelers" },
  { value: "100+", label: "Expeditions Led" },
  { value: "4.9", label: "Average Rating" },
  { value: "10+", label: "Years of Excellence" },
];
