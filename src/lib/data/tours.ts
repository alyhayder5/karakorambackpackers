export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Expert";
export type TourCategory =
  | "Family"
  | "Cultural"
  | "Trekking"
  | "Mountaineering"
  | "Jeep Safari"
  | "Photography"
  | "Camping";

export type Tour = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  location: string;
  description: string;
  overview: string;
  duration: string;
  durationDays: number;
  difficulty: Difficulty;
  groupSize: string;
  elevation: string;
  trekLocation: string;
  departurePoint: string;
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

const defaultIncluded = [
  "Private Transport",
  "Toll/Taxes",
  "Accommodation as per Itinerary",
  "Tour Guide Cum Driver",
  "Daily Breakfast",
  "Bonfire",
  "Basic First Aid",
];

const defaultExcluded = [
  "Unforeseen Circumstances",
  "Entry Tickets Etc",
  "Insurance & Liability",
  "Extras at hotels like hot/soft/mineral water",
];

export const tours: Tour[] = [
  {
    id: "1",
    slug: "shyok-winter-festival",
    title: "Shyok Winter Festival",
    destination: "Khaplu Valley",
    destinationSlug: "khaplu",
    location: "Khaplu Valley, Gilgit-Baltistan, Pakistan",
    description:
      "Experience the magic of Shyok Festival—where culture, history, and natural beauty come alive in Khaplu every January.",
    overview:
      "The Shyok Winter Festival in Khaplu, Gilgit-Baltistan, is an amazing festival of winter sports and local culture that takes place every January 7–9. Set against the stunning background of snow-capped mountains, the festival includes exhilarating games such as Tiaku Polo, Ice Hockey, rock climbing, and volleyball, as well as vivid Balti cultural performances. This 7–8-day family tour to Skardu is designed for comfort, fun, and unforgettable moments—from scenic mountain drives and historic forts to the peaceful beauty of Skardu and lively local bazaars.",
    duration: "8 Days",
    durationDays: 8,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "3,400 m",
    trekLocation: "Skardu Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1500,
    rating: 4.9,
    reviewCount: 48,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
      "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    ],
    category: "Family",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Fly to Skardu",
        description:
          "Early morning flight from Islamabad to Skardu (around an hour). Arrive at Skardu and transfer to your hotel. Explore neighboring sites such as Katpana Desert and Skardu Bazaar. A traditional Balti supper. Stay at Skardu for the night.",
      },
      {
        day: 2,
        title: "Drive to Khaplu",
        description:
          "Scenic drive through the Shyok Valley to Khaplu, the historic capital of Ghanche District. Check in and explore the town before the festival begins.",
      },
      {
        day: 3,
        title: "Shyok Festival Day 1",
        description:
          "Full day at the Shyok Winter Festival—Tiaku Polo, ice hockey, rock climbing, volleyball, and vibrant Balti cultural performances.",
      },
      {
        day: 4,
        title: "Shyok Festival Day 2",
        description:
          "Second day of festival celebrations with local sports, music, dance, and community gatherings against snow-capped peaks.",
      },
      {
        day: 5,
        title: "Khaplu to Skardu",
        description:
          "Return drive to Skardu with stops at scenic viewpoints. Evening free to explore the bazaar or relax at the hotel.",
      },
      {
        day: 6,
        title: "Fly to Islamabad",
        description:
          "Morning flight from Skardu to Islamabad (weather permitting). Transfer to hotel and rest.",
      },
      {
        day: 7,
        title: "Fly to Home Country",
        description: "International departure from Islamabad. End of tour.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "2",
    slug: "hunza-winter-festival",
    title: "Hunza Winter Festival",
    destination: "Hunza Valley",
    destinationSlug: "hunza",
    location: "Hunza Valley, Gilgit-Baltistan, Pakistan",
    description:
      "A dazzling annual celebration of culture, winter sports, and warm hospitality in the snow-blanketed Hunza Valley.",
    overview:
      "The Hunza Winter Festival is a dazzling annual event held in the stunning Hunza Valley, Gilgit-Baltistan, Pakistan, celebrating the region's rich culture, winter sports, and warm hospitality. The festival takes place every year from December 28 to December 31, turning the snow-blanketed valley into a lively carnival of music, dance, and adventure. This thrilling seven-day festival on gorgeous Attabad Lake features ice hockey, skating, spectacular cultural performances, and traditional games.",
    duration: "8–9 Days",
    durationDays: 9,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "2,438 m",
    trekLocation: "Hunza Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1800,
    rating: 4.95,
    reviewCount: 62,
    image: "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1486870591958-9d9d0d4734c9?w=1200&q=85",
    ],
    category: "Cultural",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Islamabad",
        description:
          "Our guide(s) will receive you from the airport and transfer you to the hotel. Relax and recover from your journey. Optional night walk or shopping in Islamabad city.",
      },
      {
        day: 2,
        title: "Islamabad to Gilgit",
        description:
          "Travel north via the Karakoram Highway or fly to Gilgit (weather permitting). Scenic views of river valleys and mountain passes throughout.",
      },
      {
        day: 3,
        title: "Festival Opening and Ice Sports",
        description:
          "Arrive in Hunza and attend the festival opening ceremony. Ice sports and cultural performances on Attabad Lake.",
      },
      {
        day: 4,
        title: "Festival Day",
        description:
          "Full day of winter festival activities—music, dance, traditional games, and community celebrations.",
      },
      {
        day: 5,
        title: "Sightseeing in Hunza",
        description:
          "Explore Baltit Fort, Altit Fort, Karimabad bazaar, and Eagle's Nest viewpoint.",
      },
      {
        day: 6,
        title: "Festival and Gulmit Exploration",
        description:
          "Return to festival events and visit Gulmit village with views of Passu Cones.",
      },
      {
        day: 7,
        title: "Passu and Nagar Valley",
        description:
          "Day trip through Passu Glacier viewpoint, suspension bridges, and Nagar Valley landscapes.",
      },
      {
        day: 8,
        title: "Fly to Islamabad",
        description: "Return flight or drive to Islamabad. Overnight in Islamabad.",
      },
      {
        day: 9,
        title: "Fly to Home Country",
        description: "International departure from Islamabad. End of tour.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "3",
    slug: "mayfung-fire-festival",
    title: "Mayfung Fire Festival",
    destination: "Skardu",
    destinationSlug: "skardu",
    location: "Gilgit-Baltistan, Pakistan",
    description:
      "Celebrate the Balti winter solstice with bonfires, traditional music, dancing, and local sports in Skardu.",
    overview:
      "The Mayfung Fire Festival in Skardu is a lively celebration of the winter solstice that includes bonfires, traditional music, dancing, and local sports. This centuries-old Balti celebration, held on December 21st, welcomes winter with warmth, community, and prayers for success, providing guests with an immersive cultural experience set against Skardu's breathtaking mountain background.",
    duration: "7–8 Days",
    durationDays: 8,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "2,438 m",
    trekLocation: "Skardu Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1500,
    rating: 4.88,
    reviewCount: 36,
    image: "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=1200&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    ],
    category: "Family",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Journey to Gilgit",
        description:
          "Depart Islamabad early morning (~5:00 am) along the Karakoram Highway through Abbottabad, Mansehra, and Besham. Travel follows the Indus River through gorges and rugged terrain (~10–12 hours). Evening arrival in Chilas. Or fly to Skardu if weather permits.",
      },
      {
        day: 2,
        title: "Drive to Skardu",
        description:
          "Continue to Skardu through stunning mountain scenery. Check in and prepare for the Mayfung celebrations.",
      },
      {
        day: 3,
        title: "Mayfung Festival Celebrations",
        description:
          "Experience the fire festival—bonfires, traditional Balti music, dancing, local sports, and community prayers welcoming the winter solstice.",
      },
      {
        day: 4,
        title: "Explore Skardu and Surroundings",
        description:
          "Visit Kachura Lakes, Shangrila, Cold Desert, or Skardu bazaar. Optional short hikes and photography.",
      },
      {
        day: 5,
        title: "Drive / Fly to Chilas",
        description:
          "Begin return journey to Chilas with scenic stops along the way.",
      },
      {
        day: 6,
        title: "Drive to Islamabad",
        description: "Full-day drive back to Islamabad via the KKH.",
      },
      {
        day: 7,
        title: "Fly to Home Country",
        description: "International departure from Islamabad. End of tour.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "4",
    slug: "shimshal-kuch-festival",
    title: "Shimshal Kuch Festival",
    destination: "Shimshal Valley",
    destinationSlug: "hunza",
    location: "Hunza Valley, Gilgit-Baltistan, Pakistan",
    description:
      "Celebrate Wakhi mountain culture with yak polo, traditional music, and high-altitude trekking in Pakistan's most remote valley.",
    overview:
      "Shimshal Valley, located in the Karakoram Mountains of Gilgit-Baltistan, is one of Pakistan's most remote and breathtaking regions, home to the Wakhi people. The Shimshal Kuch Festival, held annually in July or August, celebrates mountain life, yak herding, and Wakhi traditions with yak & horse polo, traditional music and dance, trekking, and local cuisine including Shir Chai and Chapshuro.",
    duration: "7–8 Days",
    durationDays: 8,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "3,200 m",
    trekLocation: "Hunza Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1800,
    rating: 4.92,
    reviewCount: 29,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85",
      "https://images.unsplash.com/photo-1486870591958-9d9d0d4734c9?w=1200&q=85",
    ],
    category: "Cultural",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Receive Guest from Airport",
        description:
          "Our guide(s) will receive you from the airport and transfer you to the hotel. Relax and recover from your journey. Optional night walk or shopping in Islamabad.",
      },
      {
        day: 2,
        title: "Islamabad → Gilgit (Flight - 1 hr)",
        description: "Morning flight to Gilgit. Transfer to hotel and acclimatize.",
      },
      {
        day: 3,
        title: "Gilgit to Hunza",
        description:
          "Scenic drive to Hunza Valley. Explore Karimabad and prepare for Shimshal journey.",
      },
      {
        day: 4,
        title: "Shimshal Kuch Festival (Full Day)",
        description:
          "Full day at the festival—yak & horse polo, Wakhi music and dance, local food, and cultural ceremonies.",
      },
      {
        day: 5,
        title: "Shimshal → Gilgit (Drive - 6 hrs)",
        description: "Return drive from Shimshal to Gilgit through mountain roads.",
      },
      {
        day: 6,
        title: "Gilgit → Islamabad (Flight or Drive)",
        description: "Fly or drive back to Islamabad (12–14 hrs by road).",
      },
      {
        day: 7,
        title: "Fly to Home Country",
        description: "International departure from Islamabad. End of tour.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "5",
    slug: "chilam-joshi-festival",
    title: "Chilam Joshi Festival",
    destination: "Kalash Valley",
    destinationSlug: "kalash",
    location: "Kalash Valley, KPK, Pakistan",
    description:
      "Witness the vibrant spring festival of the Kalash people—the Last Pagans of the Hindu Kush—in remote Chitral.",
    overview:
      "The Kalash Valley, located in the remote mountains of Chitral District, is home to the Kalash people, one of the world's most unique indigenous communities. The Chilam Joshi Festival, held every year in mid-May, marks the arrival of spring—a time for renewal, fertility, and matchmaking. Experience traditional attire, drum-and-flute dances, sacrificial offerings, and the unique customs of this living anthropological treasure.",
    duration: "6–7 Days",
    durationDays: 7,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "3,100 m",
    trekLocation: "Chitral Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1500,
    rating: 4.94,
    reviewCount: 41,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=1200&q=85",
    ],
    category: "Cultural",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Receive Guest from Airport",
        description:
          "Our guide(s) will receive you from the airport and transfer you to the hotel. Relax and recover from your journey.",
      },
      {
        day: 2,
        title: "Islamabad to Chitral",
        description:
          "Travel to Chitral via Lowari Tunnel or flight (weather permitting). Scenic journey through KPK mountains.",
      },
      {
        day: 3,
        title: "Chitral to Bumburet",
        description:
          "Drive to Bumburet, the largest of the three Kalash valleys. Check in and explore the village.",
      },
      {
        day: 4,
        title: "Chilam Joshi Festival (Full Day in Bumburet)",
        description:
          "Full day of festival celebrations—traditional dances, music, wine sharing, matchmaking rituals, and colorful Kalash attire.",
      },
      {
        day: 5,
        title: "Bumburet → Rumbur → Chitral",
        description:
          "Visit Rumbur valley and return to Chitral town for overnight stay.",
      },
      {
        day: 6,
        title: "Chitral to Islamabad",
        description: "Return journey to Islamabad by road or flight.",
      },
      {
        day: 7,
        title: "Fly to Home Country",
        description: "International departure from Islamabad. End of tour.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
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

export function getToursByCategory(category: TourCategory): Tour[] {
  return tours.filter((t) => t.category === category);
}

export const tourCategories: TourCategory[] = [
  "Family",
  "Cultural",
  "Trekking",
  "Mountaineering",
  "Jeep Safari",
  "Photography",
  "Camping",
];

export const destinations = [
  "skardu",
  "hunza",
  "khaplu",
  "kalash",
] as const;

export const difficulties: Difficulty[] = ["Easy", "Moderate", "Challenging", "Expert"];
