export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  image: string;
  images: string[];
  elevation: string;
  bestTime: string;
  highlights: string[];
  attractions: { name: string; description: string }[];
  stats: { label: string; value: string }[];
  featured: boolean;
  bentoSize?: "large" | "medium" | "small";
};

export const destinations: Destination[] = [
  {
    slug: "skardu",
    name: "Skardu",
    tagline: "Gateway to the Karakoram",
    description: "The adventure capital where turquoise lakes meet desert dunes beneath 8,000m peaks.",
    overview:
      "Skardu serves as the launching point for expeditions to K2, Broad Peak, and the Gasherbrum massif. Beyond mountaineering, the region offers Kachura Lakes, Shangrila Resort, Cold Desert, and some of the most dramatic landscapes in Asia.",
    image: "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    ],
    elevation: "2,228m",
    bestTime: "April – October",
    highlights: ["Kachura Lakes", "Cold Desert", "Shangrila", "K2 Gateway"],
    attractions: [
      { name: "Upper Kachura Lake", description: "Crystal-clear alpine lake surrounded by apricot orchards." },
      { name: "Cold Desert", description: "Unique sand dunes at 2,500m with mountain backdrop." },
      { name: "Shigar Fort", description: "400-year-old restored fort turned heritage hotel." },
    ],
    stats: [
      { label: "Elevation", value: "2,228m" },
      { label: "Tours", value: "12+" },
      { label: "Rating", value: "4.9★" },
    ],
    featured: true,
    bentoSize: "large",
  },
  {
    slug: "hunza",
    name: "Hunza",
    tagline: "Valley of Eternal Youth",
    description: "Ancient forts, terraced orchards, and the most hospitable people in the Karakoram.",
    overview:
      "Hunza Valley has captivated travelers for centuries. From the UNESCO-listed Baltit and Altit Forts to Attabad Lake's turquoise waters and the legendary Passu Cones, every turn reveals another masterpiece of nature and culture.",
    image: "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=1200&q=85",
    ],
    elevation: "2,438m",
    bestTime: "March – November",
    highlights: ["Baltit Fort", "Attabad Lake", "Eagle's Nest", "Passu Cones"],
    attractions: [
      { name: "Baltit Fort", description: "700-year-old fort overlooking Karimabad." },
      { name: "Attabad Lake", description: "Stunning lake formed by a 2010 landslide." },
      { name: "Eagle's Nest", description: "Premier sunset viewpoint above Hunza." },
    ],
    stats: [
      { label: "Elevation", value: "2,438m" },
      { label: "Tours", value: "18+" },
      { label: "Rating", value: "4.95★" },
    ],
    featured: true,
    bentoSize: "large",
  },
  {
    slug: "fairy-meadows",
    name: "Fairy Meadows",
    tagline: "Beneath the Killer Mountain",
    description: "Alpine meadows with the most dramatic Nanga Parbat views on Earth.",
    overview:
      "Accessible via a thrilling jeep ride and moderate trek, Fairy Meadows offers camping beneath the 8,126m north face of Nanga Parbat. A must for photographers and nature lovers seeking raw Himalayan beauty.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    ],
    elevation: "3,300m",
    bestTime: "May – September",
    highlights: ["Nanga Parbat Views", "Alpine Camping", "Beyal Camp"],
    attractions: [
      { name: "Raikot Bridge", description: "Starting point of the legendary jeep track." },
      { name: "Beyal Camp", description: "Base camp area with glacier views." },
    ],
    stats: [
      { label: "Elevation", value: "3,300m" },
      { label: "Tours", value: "8+" },
      { label: "Rating", value: "4.88★" },
    ],
    featured: true,
    bentoSize: "medium",
  },
  {
    slug: "deosai",
    name: "Deosai",
    tagline: "Land of Giants",
    description: "Vast high-altitude plains where brown bears roam among wildflowers.",
    overview:
      "Deosai National Park sits at an average elevation of 4,114 meters — the second-highest plateau in the world. Open only in summer, its endless meadows, Sheosar Lake, and wildlife make it a jeep safari paradise.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
    ],
    elevation: "4,114m",
    bestTime: "June – September",
    highlights: ["Brown Bears", "Sheosar Lake", "Wildflowers"],
    attractions: [
      { name: "Sheosar Lake", description: "Pristine alpine lake at 4,142m." },
      { name: "Bara Pani", description: "Main camping area in the park." },
    ],
    stats: [
      { label: "Elevation", value: "4,114m" },
      { label: "Tours", value: "6+" },
      { label: "Rating", value: "4.85★" },
    ],
    featured: true,
    bentoSize: "medium",
  },
  {
    slug: "passu",
    name: "Passu",
    tagline: "Cathedral of the Karakoram",
    description: "Dramatic spires, glaciers, and the world's most scenic highway corridor.",
    overview:
      "Passu village sits beneath the iconic Passu Cones (Cathedral Spires) along the Karakoram Highway. Batura Glacier, Borith Lake, and the famous Hussaini suspension bridge await adventurous travelers.",
    image: "https://images.unsplash.com/photo-1486870591958-9d9d0d4734c9?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1486870591958-9d9d0d4734c9?w=1200&q=85",
    ],
    elevation: "2,500m",
    bestTime: "April – October",
    highlights: ["Passu Cones", "Batura Glacier", "Hussaini Bridge"],
    attractions: [
      { name: "Passu Glacier", description: "Accessible glacier trek with ice caves." },
      { name: "Hussaini Bridge", description: "One of the most photographed bridges in the world." },
    ],
    stats: [
      { label: "Elevation", value: "2,500m" },
      { label: "Tours", value: "7+" },
      { label: "Rating", value: "4.87★" },
    ],
    featured: true,
    bentoSize: "small",
  },
  {
    slug: "khaplu",
    name: "Khaplu",
    tagline: "Palace of Baltistan",
    description: "A living museum of Balti culture in the serene Ghanche Valley.",
    overview:
      "Khaplu Palace, restored by the Aga Khan Trust, anchors this peaceful valley. Traditional music, apricot drying, and views of Masherbrum make Khaplu a hidden gem of Baltistan.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
    ],
    elevation: "2,600m",
    bestTime: "April – October",
    highlights: ["Khaplu Palace", "Ghanche Valley", "Masherbrum Views"],
    attractions: [
      { name: "Khaplu Palace", description: "19th-century royal residence and heritage hotel." },
      { name: "Chaqchan Mosque", description: "One of the oldest mosques in the region." },
    ],
    stats: [
      { label: "Elevation", value: "2,600m" },
      { label: "Tours", value: "5+" },
      { label: "Rating", value: "4.91★" },
    ],
    featured: true,
    bentoSize: "small",
  },
  {
    slug: "baltistan",
    name: "Baltistan",
    tagline: "Roof of the World",
    description: "Home to K2, Broad Peak, and the greatest concentration of 8,000m peaks.",
    overview:
      "Baltistan is the mountaineering heart of Pakistan. The Baltoro Glacier, Concordia, and K2 Base Camp trek represent the pinnacle of Himalayan adventure.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    ],
    elevation: "Up to 8,611m",
    bestTime: "June – September",
    highlights: ["K2", "Concordia", "Baltoro Glacier"],
    attractions: [
      { name: "Concordia", description: "The Throne Room of the Mountain Gods." },
      { name: "K2 Base Camp", description: "Base of the world's second-highest peak." },
    ],
    stats: [
      { label: "8000m Peaks", value: "4" },
      { label: "Tours", value: "10+" },
      { label: "Rating", value: "4.95★" },
    ],
    featured: false,
  },
  {
    slug: "shigar-valley",
    name: "Shigar Valley",
    tagline: "Fortress of the East",
    description: "Where the Indus meets ancient Balti civilization.",
    overview:
      "Shigar Valley leads to the trailheads of K2 and hosts the magnificent Shigar Fort. Apricot orchards, traditional stone architecture, and warm Balti hospitality define this valley.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
    images: [],
    elevation: "2,200m",
    bestTime: "April – October",
    highlights: ["Shigar Fort", "Amburiq Mosque", "Apricot Orchards"],
    attractions: [
      { name: "Shigar Fort", description: "Restored 17th-century fort and museum." },
    ],
    stats: [
      { label: "Elevation", value: "2,200m" },
      { label: "Tours", value: "6+" },
      { label: "Rating", value: "4.9★" },
    ],
    featured: false,
  },
  {
    slug: "nanga-parbat",
    name: "Nanga Parbat",
    tagline: "The Killer Mountain",
    description: "The ninth-highest peak with the greatest vertical relief on Earth.",
    overview:
      "Nanga Parbat's Rupal Face rises 4,600m from valley to summit — the highest mountain face in the world. Treks to Fairy Meadows and Rupal Base Camp offer unparalleled views.",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
    images: [],
    elevation: "8,126m",
    bestTime: "May – September",
    highlights: ["Rupal Face", "Fairy Meadows", "Base Camp"],
    attractions: [
      { name: "Rupal Base Camp", description: "Close-up views of the Rupal Face." },
    ],
    stats: [
      { label: "Summit", value: "8,126m" },
      { label: "Tours", value: "5+" },
      { label: "Rating", value: "4.93★" },
    ],
    featured: false,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}
