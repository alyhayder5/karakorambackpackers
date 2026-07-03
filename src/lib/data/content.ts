export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Peterson",
    role: "Traveller",
    rating: 5,
    review:
      "An unforgettable trekking experience! The guides were professional, and the views of K2 Basecamp were breathtaking.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "2",
    name: "Usman Raza",
    role: "IT Manager",
    rating: 5,
    review:
      "A perfect blend of adventure and history! The visit to Altit & Baltit Forts was a highlight of my Pakistan trip. Highly Recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: "3",
    name: "Haris Ahmad",
    role: "Business Owner",
    rating: 5,
    review:
      "Camping in Deosai was magical! The team ensured everything was eco-friendly and comfortable. Will definitely book again!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: "4",
    name: "Guest Traveler",
    role: "Teacher",
    rating: 5,
    review:
      "Hiking to Fairy Meadows with Karakoram Backpackers was a dream come true. Well-organized, safe, and incredibly scenic!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const heroStats = [
  { value: "5000+", label: "Travelers" },
  { value: "100+", label: "Expeditions" },
  { value: "4.9/5", label: "Rating" },
  { value: "10+", label: "Years Experience" },
];

export const whyChooseContent = {
  eyebrow: "We are the Best!",
  title: "Why Choose Karakoram Backpackers?",
  paragraphs: [
    "At Karakoram Backpackers, we offer unforgettable adventures across Northern Pakistan, from K2 Basecamp to Fairy Meadows and Deosai Plains. With expert local guides and seamless logistics, we ensure a hassle-free experience for all travelers.",
    "We prioritize eco-friendly tourism, practicing zero-waste camping, and supporting local communities through homestays. With trusted accommodations and transport partners, we make every journey smooth, enriching, and truly unforgettable. Join us for lifetime memories and thrilling adventures.",
  ],
};

export const comfortSectionContent = {
  title: "Our Comfort",
  description:
    "At Karakoram Backpackers, we make every journey comfortable, seamless, and unforgettable. With cozy stays, thrilling camping, self-cooking experiences, adventure trekking, smooth transport, and expert service, you can focus on the adventure while we handle the rest.",
};

export const comfortFeatures = [
  {
    title: "Secret Location",
    description:
      "Explore hidden trails and untouched landscapes, far from the crowds.",
    icon: "MapPin",
  },
  {
    title: "Expert Guides",
    description:
      "Travel with experienced guides who ensure a safe and insightful journey.",
    icon: "Compass",
  },
  {
    title: "Great Waterfall",
    description:
      "Visit stunning waterfalls nestled in the heart of breathtaking valleys.",
    icon: "Droplets",
  },
  {
    title: "Seamless Travel",
    description:
      "Enjoy smooth transport, cozy stays, and well-planned itineraries.",
    icon: "Car",
  },
];

export const founderStaffContent = {
  title: "Our Founder & Staff",
  paragraphs: [
    "Karakoram Backpackers is an adventure travel company based in Gilgit Baltistan. We specialize in customized tours across northern Pakistan and focus on sustainable tourism, offering authentic experiences in the Karakoram, Hindukush, and Himalayas.",
    "Our team of experts ensures safe, enriching trips, connecting travelers with the region's natural beauty and culture.",
    "Get in touch with us to plan your next adventure!",
  ],
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
};

export const exploreMoreContent = {
  eyebrow: "Explore More",
  title: "Discover the incredible treks led by our experienced team",
  description:
    "Explore breathtaking mountains, hidden valleys, and scenic trails. Join us for a journey you'll never forget!",
  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
};

export type PricingPlan = {
  tier: string;
  tagline: string;
  description: string;
  highlights: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    tier: "Economical",
    tagline: "Smart Travel, Unbeatable Value",
    description:
      "Perfect for budget-conscious travelers who want authentic Karakoram experiences without compromise on safety or local expertise.",
    highlights: [
      "Shared transport & group departures",
      "Camping & guesthouse stays",
      "Certified local guides",
    ],
  },
  {
    tier: "Executive",
    tagline: "Elevated Comfort, Premium Convenience",
    description:
      "A balanced package with upgraded accommodations, flexible pacing, and enhanced comfort for families and small groups.",
    highlights: [
      "Private 4x4 transport",
      "Mid-range hotels & camps",
      "Customizable daily itinerary",
    ],
    featured: true,
  },
  {
    tier: "Deluxe",
    tagline: "Unmatched Luxury, Once-in-a-Lifetime Experiences",
    description:
      "The ultimate northern Pakistan journey — premium lodges, private guides, and bespoke routes crafted around your dream adventure.",
    highlights: [
      "Private guide & vehicle",
      "Premium lodges & resorts",
      "Fully bespoke itinerary",
    ],
  },
];

export const testimonialsSectionContent = {
  eyebrow: "The Testimonial",
  title: "What Our Clients Say",
  description:
    "At Karakoram Backpackers, we believe every journey should be an unforgettable adventure. Our clients come from all walks of life, and their experiences speak for themselves. Here's what they have to say about exploring Northern Pakistan with us:",
};

export type AdventureCategory = {
  title: string;
  description: string;
  icon: string;
  image: string;
};

export const adventureCategories: AdventureCategory[] = [
  {
    title: "Trekking",
    description: "Multi-day hikes through glacier corridors and alpine meadows.",
    icon: "Footprints",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
  },
  {
    title: "Mountaineering",
    description: "Expeditions to base camps and peaks above 6,000m.",
    icon: "Mountain",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80",
  },
  {
    title: "Jeep Safari",
    description: "High-altitude plains and remote valleys by 4x4.",
    icon: "Car",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
  },
  {
    title: "Photography Tours",
    description: "Golden-hour shoots at the world's most dramatic viewpoints.",
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=600&q=80",
  },
  {
    title: "Camping",
    description: "Sleep under the stars at 3,000m+ with full camp support.",
    icon: "Tent",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  },
  {
    title: "Cultural Tours",
    description: "Forts, festivals, and homestays with Balti families.",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=600&q=80",
  },
];

export const galleryImages = [
  { id: "1", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85", alt: "Karakoram peaks at sunrise", height: "tall" },
  { id: "2", src: "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=800&q=85", alt: "Hunza Valley panorama", height: "medium" },
  { id: "3", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85", alt: "Alpine meadow trek", height: "short" },
  { id: "4", src: "https://images.unsplash.com/photo-1585408778703-1cf0f1cff791?w=800&q=85", alt: "Skardu lake reflection", height: "medium" },
  { id: "5", src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=85", alt: "Mountain summit above clouds", height: "tall" },
  { id: "6", src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=85", alt: "Hiker on mountain ridge", height: "short" },
  { id: "7", src: "https://images.unsplash.com/photo-1486870591958-9d9d0d4734c9?w=800&q=85", alt: "Passu Cones", height: "medium" },
  { id: "8", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=85", alt: "Starry mountain night", height: "tall" },
  { id: "9", src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=85", alt: "Trekking through valley", height: "short" },
  { id: "10", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85", alt: "Glacier expedition", height: "medium" },
  { id: "11", src: "https://images.unsplash.com/photo-1609137144813-7d992133842f?w=800&q=85", alt: "Hunza fort", height: "short" },
  { id: "12", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85", alt: "Camping at altitude", height: "tall" },
];
