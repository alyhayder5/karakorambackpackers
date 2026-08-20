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
    image: "/destinations/skardu-blind-lake.jpg",
    images: [
      "/destinations/skardu-blind-lake.jpg",
      "/gallery/22.jpeg",
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
    image: "/tours/hunza-valley.jpeg",
    images: [
      "/tours/hunza-valley.jpeg",
      "/destinations/passu-cones.jpg",
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
    image: "/tours/fairy-meadows.jpeg",
    images: [
      "/tours/fairy-meadows.jpeg",
      "/tours/fairy-meadows-2.jpeg",
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
    image: "/gallery/01.jpeg",
    images: [
      "/gallery/01.jpeg",
      "/gallery/06.jpeg",
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
    image: "/destinations/passu-cones.jpg",
    images: [
      "/destinations/passu-cones.jpg",
      "/tours/hunza-extra.jpeg",
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
    image: "/tours/shyok-winter-festival.jpg",
    images: [
      "/tours/shyok-winter-festival.jpg",
      "/destinations/skardu-blind-lake.jpg",
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
    image: "/destinations/haramosh-peak.jpg",
    images: [
      "/destinations/haramosh-peak.jpg",
      "/gallery/07.jpeg",
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
    image: "/gallery/22.jpeg",
    images: ["/gallery/22.jpeg"],
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
    image: "/tours/fairy-meadows-2.jpeg",
    images: ["/tours/fairy-meadows-2.jpeg", "/tours/fairy-meadows.jpeg"],
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
  {
    slug: "naltar",
    name: "Naltar Valley",
    tagline: "Lakes of the Karakoram",
    description: "Pine forests, ski slopes, and turquoise alpine lakes a short drive from Gilgit.",
    overview:
      "Naltar Valley is one of the treks our team leads most often — forested slopes, rainbow-colored lakes, and a quieter alternative to Hunza's busier viewpoints. Featured on the Karakoram Backpackers homepage alongside Kutwal and Passu.",
    image: "/destinations/naltar-valley.jpg",
    images: ["/destinations/naltar-valley.jpg"],
    elevation: "3,000m",
    bestTime: "May – October",
    highlights: ["Naltar Lakes", "Pine forests", "Ski slopes"],
    attractions: [
      { name: "Naltar Lakes", description: "A chain of high alpine lakes reached by jeep and short walks." },
    ],
    stats: [
      { label: "Elevation", value: "3,000m" },
      { label: "Tours", value: "Guided" },
      { label: "From Gilgit", value: "2–3 hrs" },
    ],
    featured: true,
    bentoSize: "small",
  },
  {
    slug: "kutwal",
    name: "Kutwal Valley",
    tagline: "Haramosh Gateway",
    description: "A remote pasture beneath Haramosh Peak — one of the signature treks of our Gilgit team.",
    overview:
      "Kutwal (Kutwal Lake / Haramosh) is a high pasture trek from the Gilgit side, with views of Haramosh Peak. It is highlighted on our homepage as one of the treks led by the Karakoram Backpackers team.",
    image: "/destinations/kutwal-valley.jpg",
    images: [
      "/destinations/kutwal-valley.jpg",
      "/destinations/kutwal-trek.jpg",
      "/destinations/haramosh-peak.jpg",
    ],
    elevation: "3,200m",
    bestTime: "June – September",
    highlights: ["Haramosh Peak", "Kutwal Lake", "High pastures"],
    attractions: [
      { name: "Haramosh Peak", description: "A 7,409m giant of the Rakaposhi-Haramosh range." },
      { name: "Kutwal Trek", description: "Pasture and lake trek operated by our Gilgit team." },
    ],
    stats: [
      { label: "Elevation", value: "3,200m" },
      { label: "Peak", value: "7,409m" },
      { label: "Region", value: "Gilgit" },
    ],
    featured: true,
    bentoSize: "small",
  },
  {
    slug: "darel",
    name: "Darel Valley",
    tagline: "Polo & Heritage",
    description: "Home of the Sut Das Darel Festival — polo, horse racing, and Diamer traditions.",
    overview:
      "Darel Valley in Diamer District hosts the Sut Das Darel Festival, an annual gathering of polo, football, Bazm Adab, and mountain hospitality. We run an 8–10 day cultural tour here each season.",
    image: "/gallery/03.jpeg",
    images: ["/gallery/03.jpeg"],
    elevation: "2,000m+",
    bestTime: "Festival season (varies)",
    highlights: ["Sut Das Festival", "Polo", "Diamer culture"],
    attractions: [
      { name: "Sut Das Darel Festival", description: "Polo, horse racing, football, crafts, and Bazm Adab." },
    ],
    stats: [
      { label: "District", value: "Diamer" },
      { label: "Tours", value: "1+" },
      { label: "From Gilgit", value: "4–5 hrs" },
    ],
    featured: false,
  },
  {
    slug: "kalash",
    name: "Kalash Valley",
    tagline: "Last Pagans of the Hindu Kush",
    description: "Three valleys in Chitral — Bumburet, Rumbur, and Birir — home of the Chilam Joshi spring festival.",
    overview:
      "The Kalash people of Chitral District preserve an ancient polytheistic culture often called the Last Pagans of the Hindu Kush. We run a 6–7 day tour for Chilam Joshi in mid-May, with stays in Bumburet and a visit to Rumbur.",
    image: "/gallery/05.jpeg",
    images: ["/gallery/05.jpeg", "/tours/kalash.jpeg"],
    elevation: "3,100m",
    bestTime: "May (Chilam Joshi) & September–October",
    highlights: ["Chilam Joshi", "Bumburet", "Rumbur"],
    attractions: [
      { name: "Bumburet", description: "The largest Kalash valley and main festival ground." },
      { name: "Rumbur Valley", description: "A more remote Kalash valley with traditional graveyards." },
    ],
    stats: [
      { label: "Elevation", value: "3,100m" },
      { label: "Valleys", value: "3" },
      { label: "Region", value: "Chitral" },
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
