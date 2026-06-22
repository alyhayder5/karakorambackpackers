export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Expert";
export type TourCategory =
  | "Trekking"
  | "Mountaineering"
  | "Jeep Safari"
  | "Photography"
  | "Camping"
  | "Cultural";

export type Tour = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  description: string;
  overview: string;
  duration: string;
  durationDays: number;
  difficulty: Difficulty;
  groupSize: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  category: TourCategory;
  featured: boolean;
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  excluded: string[];
};

export const tours: Tour[] = [
  {
    id: "1",
    slug: "k2-base-camp-trek",
    title: "K2 Base Camp Expedition",
    destination: "Baltistan",
    destinationSlug: "baltistan",
    description:
      "Walk in the shadow of the world's second-highest peak through the legendary Baltoro Glacier corridor.",
    overview:
      "This iconic 14-day expedition takes you from Skardu through Askole to Concordia and K2 Base Camp — one of the most spectacular trekking routes on Earth. Expert guides, porter support, and carefully planned acclimatization ensure a safe, unforgettable journey.",
    duration: "14 Days",
    durationDays: 14,
    difficulty: "Challenging",
    groupSize: "4–12",
    price: 2890,
    rating: 4.95,
    reviewCount: 87,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    ],
    category: "Trekking",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Islamabad", description: "Welcome briefing, gear check, and overnight in Islamabad." },
      { day: 2, title: "Fly to Skardu", description: "Scenic flight to Skardu, explore the bazaar and rest." },
      { day: 3, title: "Skardu to Askole", description: "Jeep ride through Shigar Valley to trek start point." },
      { day: 4, title: "Trek to Jhola", description: "Begin Baltoro trek through Braldu Valley." },
      { day: 5, title: "Paiju Campsite", description: "Acclimatization day with short hikes." },
      { day: 6, title: "Urdukas", description: "Cross Baltoro Glacier moraine." },
      { day: 7, title: "Goro II", description: "Enter the heart of the glacier." },
      { day: 8, title: "Concordia", description: "Arrive at the Throne Room of the Mountain Gods." },
      { day: 9, title: "K2 Base Camp", description: "Day hike to K2 Base Camp and return." },
      { day: 10, title: "Return to Goro II", description: "Begin descent with panoramic views." },
      { day: 11, title: "Descent to Paiju", description: "Retrace steps through glacier corridor." },
      { day: 12, title: "Askole", description: "Final trekking day to road head." },
      { day: 13, title: "Return to Skardu", description: "Jeep transfer and celebration dinner." },
      { day: 14, title: "Departure", description: "Fly to Islamabad and onward journey." },
    ],
    included: [
      "Professional mountain guide",
      "All camping equipment",
      "Porter support",
      "All meals on trek",
      "Domestic flights",
      "Permits and fees",
      "Airport transfers",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal trekking gear",
      "Tips for staff",
      "Personal expenses",
    ],
  },
  {
    id: "2",
    slug: "hunza-valley-cultural-tour",
    title: "Hunza Valley Cultural Immersion",
    destination: "Hunza",
    destinationSlug: "hunza",
    description:
      "Discover ancient forts, apricot orchards, and warm hospitality in Pakistan's most legendary valley.",
    overview:
      "A refined 7-day journey through Hunza's cultural heartland — from Baltit and Altit Forts to Passu Cones, Attabad Lake, and Eagle's Nest viewpoints. Perfect for travelers seeking beauty, culture, and comfort.",
    duration: "7 Days",
    durationDays: 7,
    difficulty: "Easy",
    groupSize: "2–16",
    price: 890,
    rating: 4.92,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    ],
    category: "Cultural",
    featured: true,
    itinerary: [
      { day: 1, title: "Islamabad to Hunza", description: "Scenic drive via Babusar Pass or flight to Gilgit." },
      { day: 2, title: "Karimabad Exploration", description: "Baltit Fort, local bazaar, and sunset at Eagle's Nest." },
      { day: 3, title: "Altit Fort & Ganish", description: "UNESCO heritage villages and traditional architecture." },
      { day: 4, title: "Attabad Lake & Passu", description: "Boat ride and Passu Glacier viewpoint." },
      { day: 5, title: "Khunjerab Pass Day Trip", description: "Highest paved border crossing in the world." },
      { day: 6, title: "Duikar & Local Life", description: "Sunrise photography and homestay experience." },
      { day: 7, title: "Return Journey", description: "Depart with memories of a lifetime." },
    ],
    included: ["Luxury transport", "Boutique hotels", "All meals", "Expert local guide", "Entrance fees"],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Tips"],
  },
  {
    id: "3",
    slug: "fairy-meadows-nanga-parbat",
    title: "Fairy Meadows & Nanga Parbat",
    destination: "Fairy Meadows",
    destinationSlug: "fairy-meadows",
    description:
      "Camp beneath the Killer Mountain's north face — one of the most dramatic mountain views on the planet.",
    overview:
      "Trek to the legendary Fairy Meadows at 3,300m, with optional extension to Nanga Parbat Base Camp. Alpine meadows, pine forests, and the towering 8,126m peak create an unforgettable 5-day adventure.",
    duration: "5 Days",
    durationDays: 5,
    difficulty: "Moderate",
    groupSize: "4–10",
    price: 650,
    rating: 4.88,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    ],
    category: "Trekking",
    featured: true,
    itinerary: [
      { day: 1, title: "Islamabad to Chilas", description: "Drive through Kaghan Valley." },
      { day: 2, title: "Trek to Fairy Meadows", description: "Jeep to Raikot Bridge, then 3-hour trek." },
      { day: 3, title: "Nanga Parbat Base Camp", description: "Day hike to Beyal Camp with glacier views." },
      { day: 4, title: "Meadows Exploration", description: "Photography, rest, and local cuisine." },
      { day: 5, title: "Return to Islamabad", description: "Descent and drive back." },
    ],
    included: ["Guide and porters", "Camping gear", "All meals", "Jeep transfers", "Permits"],
    excluded: ["Travel insurance", "Personal gear", "Tips", "Accommodation in Islamabad"],
  },
  {
    id: "4",
    slug: "deosai-plains-safari",
    title: "Deosai Plains Jeep Safari",
    destination: "Deosai",
    destinationSlug: "deosai",
    description:
      "Cross the Land of Giants — vast high-altitude plains teeming with wildlife and wildflowers.",
    overview:
      "A 4-day jeep safari through Deosai National Park, connecting Skardu and Astore. Spot Himalayan brown bears, golden marmots, and endless wildflower meadows at 4,114 meters.",
    duration: "4 Days",
    durationDays: 4,
    difficulty: "Easy",
    groupSize: "2–8",
    price: 720,
    rating: 4.85,
    reviewCount: 94,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
    ],
    category: "Jeep Safari",
    featured: true,
    itinerary: [
      { day: 1, title: "Skardu to Deosai", description: "Enter the national park via Sadpara Lake." },
      { day: 2, title: "Sheosar Lake", description: "Crystal-clear alpine lake at 4,142m." },
      { day: 3, title: "Wildlife & Photography", description: "Bear watching and meadow exploration." },
      { day: 4, title: "Return via Astore", description: "Descent through Rama Meadows to Gilgit." },
    ],
    included: ["4x4 jeep with driver", "Camping equipment", "Park fees", "Meals", "Guide"],
    excluded: ["Personal expenses", "Travel insurance", "Tips"],
  },
  {
    id: "5",
    slug: "skardu-lakes-expedition",
    title: "Skardu Lakes Expedition",
    destination: "Skardu",
    destinationSlug: "skardu",
    description:
      "Explore Kachura Lakes, Shangrila, and the gateway to the Karakoram in a premium 6-day circuit.",
    overview:
      "Skardu is the adventure capital of Pakistan. This curated expedition covers Upper and Lower Kachura, Shigar Fort, Cold Desert, and Manthal Buddha rock — with boutique lodging and private transport throughout.",
    duration: "6 Days",
    durationDays: 6,
    difficulty: "Easy",
    groupSize: "2–12",
    price: 780,
    rating: 4.9,
    reviewCount: 128,
    image: "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=1200&q=85",
    ],
    category: "Photography",
    featured: false,
    itinerary: [
      { day: 1, title: "Arrive Skardu", description: "Airport pickup and Shangrila Resort." },
      { day: 2, title: "Kachura Lakes", description: "Upper and Lower Kachura boat rides." },
      { day: 3, title: "Shigar Valley", description: "Shigar Fort and Amburiq Mosque." },
      { day: 4, title: "Cold Desert", description: "Sand dunes beneath mountain peaks." },
      { day: 5, title: "Khaplu Day Trip", description: "Khaplu Fort and Ghanche Valley." },
      { day: 6, title: "Departure", description: "Fly or drive out." },
    ],
    included: ["Boutique hotels", "Private transport", "All meals", "Guide", "Boat rides"],
    excluded: ["Flights to Skardu", "Insurance", "Tips"],
  },
  {
    id: "6",
    slug: "passu-adventure-trek",
    title: "Passu Adventure Trek",
    destination: "Passu",
    destinationSlug: "passu",
    description:
      "Trek to Passu Glacier, cross suspension bridges, and witness the Cathedral Spires up close.",
    overview:
      "A 5-day moderate trek in the heart of the Karakoram Highway corridor. Passu Cones, Batura Glacier, and the famous Hussaini Bridge make this a photographer's paradise.",
    duration: "5 Days",
    durationDays: 5,
    difficulty: "Moderate",
    groupSize: "4–10",
    price: 590,
    rating: 4.87,
    reviewCount: 76,
    image: "https://images.unsplash.com/photo-1486870591958-9d9d0d4734c9?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1486870591958-9d9d0d4734c9?w=1200&q=85",
    ],
    category: "Trekking",
    featured: false,
    itinerary: [
      { day: 1, title: "Gilgit to Passu", description: "Drive along the KKH." },
      { day: 2, title: "Passu Glacier Trek", description: "Full-day glacier exploration." },
      { day: 3, title: "Borith Lake", description: "Alpine lake and bird watching." },
      { day: 4, title: "Suspension Bridges", description: "Hussaini and Passu bridge walks." },
      { day: 5, title: "Return", description: "Drive back to Gilgit or Hunza." },
    ],
    included: ["Guide", "Camping", "Meals", "Transport", "Permits"],
    excluded: ["Insurance", "Personal gear", "Tips"],
  },
  {
    id: "7",
    slug: "shigar-khaplu-heritage",
    title: "Shigar & Khaplu Heritage Tour",
    destination: "Shigar Valley",
    destinationSlug: "shigar-valley",
    description:
      "Walk through centuries of Balti heritage — restored forts, mosques, and apricot-laden valleys.",
    overview:
      "A refined cultural journey through Baltistan's twin gems: Shigar Fort (now a Serena heritage hotel) and Khaplu Palace. Includes traditional music evenings and local cuisine masterclasses.",
    duration: "4 Days",
    durationDays: 4,
    difficulty: "Easy",
    groupSize: "2–8",
    price: 540,
    rating: 4.91,
    reviewCount: 62,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
    ],
    category: "Cultural",
    featured: false,
    itinerary: [
      { day: 1, title: "Skardu to Shigar", description: "Shigar Fort check-in and village walk." },
      { day: 2, title: "Shigar Exploration", description: "Amburiq Mosque and local workshops." },
      { day: 3, title: "Khaplu Palace", description: "Ghanche Valley and palace tour." },
      { day: 4, title: "Return to Skardu", description: "Leisure morning and departure." },
    ],
    included: ["Heritage hotel stays", "All meals", "Cultural guide", "Transport"],
    excluded: ["Flights", "Insurance", "Tips"],
  },
  {
    id: "8",
    slug: "nanga-parbat-base-camp",
    title: "Nanga Parbat Base Camp Trek",
    destination: "Nanga Parbat",
    destinationSlug: "nanga-parbat",
    description:
      "The ultimate close encounter with the ninth-highest peak — Rupal Face views that defy description.",
    overview:
      "An 8-day challenging trek to the Rupal Base Camp of Nanga Parbat, offering views of the highest mountain face on Earth. For experienced trekkers seeking raw Himalayan grandeur.",
    duration: "8 Days",
    durationDays: 8,
    difficulty: "Expert",
    groupSize: "4–8",
    price: 1450,
    rating: 4.93,
    reviewCount: 41,
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
    ],
    category: "Mountaineering",
    featured: false,
    itinerary: [
      { day: 1, title: "Islamabad to Tarashing", description: "Drive to Astore Valley trailhead." },
      { day: 2, title: "Trek to Herligkoffer Base Camp", description: "Enter Rupal Valley." },
      { day: 3, title: "Acclimatization", description: "Short hikes and rest." },
      { day: 4, title: "Latbo Meadow", description: "High camp with Rupal Face views." },
      { day: 5, title: "Base Camp", description: "Reach Nanga Parbat Base Camp." },
      { day: 6, title: "Exploration Day", description: "Photography and glacier walks." },
      { day: 7, title: "Descent", description: "Return to Tarashing." },
      { day: 8, title: "Return", description: "Drive to Islamabad." },
    ],
    included: ["Expert guide", "Full camping kit", "Porters", "All meals", "Permits"],
    excluded: ["Insurance", "Personal gear", "Tips", "Emergency evacuation insurance"],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured);
}

export function getToursByDestination(destinationSlug: string): Tour[] {
  return tours.filter((t) => t.destinationSlug === destinationSlug);
}

export const destinations = [
  "skardu",
  "hunza",
  "fairy-meadows",
  "deosai",
  "baltistan",
  "passu",
  "shigar-valley",
  "khaplu",
  "nanga-parbat",
] as const;

export const difficulties: Difficulty[] = ["Easy", "Moderate", "Challenging", "Expert"];
