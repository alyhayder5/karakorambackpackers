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
    image: "/testimonials/john.jpg",
  },
  {
    id: "2",
    name: "Usman Raza",
    role: "IT Manager",
    rating: 5,
    review:
      "A perfect blend of adventure and history! The visit to Altit & Baltit Forts was a highlight of my Pakistan trip. Highly Recommended!",
    image: "/testimonials/usman.jpg",
  },
  {
    id: "3",
    name: "Haris Ahmad",
    role: "Business Owner",
    rating: 5,
    review:
      "Camping in Deosai was magical! The team ensured everything was eco-friendly and comfortable. Will definitely book again!",
    image: "/testimonials/haris.jpg",
  },
  {
    id: "4",
    name: "Daniel M.",
    role: "Teacher",
    rating: 5,
    review:
      "Hiking to Fairy Meadows with Karakoram Backpackers was a dream come true. Well-organized, safe, and incredibly scenic!",
    image: "/testimonials/daniel.jpg",
  },
];

export const heroStats = [
  { value: "8+", label: "Years Guiding" },
  { value: "438", label: "International Guests" },
  { value: "173", label: "Local Guests" },
  { value: "611", label: "Trips Led" },
];

export const whyChooseContent = {
  eyebrow: "We are the Best!",
  title: "Why Choose Karakoram Backpackers?",
  paragraphs: [
    "At Karakoram Backpackers, we offer unforgettable adventures across Northern Pakistan, from K2 Basecamp to Fairy Meadows and Deosai Plains. With expert local guides and seamless logistics, we ensure a hassle-free experience for all travelers.",
    "We prioritize eco-friendly tourism, practicing zero-waste camping, and supporting local communities through home stays. With trusted accommodations and transport partners, we make every journey smooth, enriching, and truly unforgettable. Join us for life time memories and thrilling adventures.",
  ],
};

export const comfortSectionContent = {
  title: "Our Comfort",
  description:
    "At Karakoram Backpackers, we make every journey comfortable, seamless, and unforgettable. With cozy stays, thrilling camping, self cooking experiences, adventure trekking and smooth transport, and expert service, you can focus on the adventure while we handle the rest.",
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
  image: "/why-choose-us/ali-shan.jpeg",
};

export const exploreMoreContent = {
  eyebrow: "Explore More",
  title: "Discover the incredible treks led by our experienced team",
  description:
    "Explore breathtaking mountains, hidden valleys, and scenic trails. Join us for a journey you'll never forget!",
  image: "/destinations/kutwal-trek.jpg",
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
    tagline: "30k–50k PKR",
    description:
      "Perfect for budget-conscious explorers who don't want to compromise on fun. Comfortable accommodations, essential amenities, and expertly planned itineraries — whether you're a backpacker, a student, or looking for a great deal.",
    highlights: [
      "Budget-friendly prices",
      "Clean, comfortable stays",
      "Handpicked value experiences",
    ],
  },
  {
    tier: "Executive",
    tagline: "50k–100k PKR",
    description:
      "For those who appreciate a little extra luxury without going over the top. Upgraded accommodations, priority services, and exclusive perks for couples, families, or anyone seeking a refined travel experience.",
    highlights: [
      "Spacious, high-quality lodging",
      "Faster check-ins & priority access",
      "Premium transportation options",
      "Curated experiences with comfort",
    ],
    featured: true,
  },
  {
    tier: "Deluxe",
    tagline: "100k–300k PKR",
    description:
      "The pinnacle of travel, where every detail is crafted for sophistication and exclusivity. From 5-star resorts and private tours to VIP treatment and personalized service.",
    highlights: [
      "Ultra-luxury hotels & private villas",
      "Bespoke itineraries & private guides",
      "First-class transportation & fine dining",
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
    image: "/destinations/kutwal-trek.jpg",
  },
  {
    title: "Mountaineering",
    description: "Expeditions to base camps and peaks above 6,000m.",
    icon: "Mountain",
    image: "/destinations/haramosh-peak.jpg",
  },
  {
    title: "Jeep Safari",
    description: "High-altitude plains and remote valleys by 4x4.",
    icon: "Car",
    image: "/destinations/naltar-valley.jpg",
  },
  {
    title: "Photography Tours",
    description: "Golden-hour shoots at the world's most dramatic viewpoints.",
    icon: "Camera",
    image: "/destinations/passu-cones.jpg",
  },
  {
    title: "Camping",
    description: "Sleep under the stars at 3,000m+ with full camp support.",
    icon: "Tent",
    image: "/tours/fairy-meadows-2.jpeg",
  },
  {
    title: "Cultural Tours",
    description: "Forts, festivals, and homestays with Balti families.",
    icon: "Landmark",
    image: "/tours/hunza-valley.jpeg",
  },
];

export const galleryImages = [
  { id: "1", src: "/gallery/01.jpeg", alt: "Karakoram expedition camp", height: "tall" },
  { id: "2", src: "/gallery/02.jpeg", alt: "High mountain valley in Gilgit-Baltistan", height: "medium" },
  { id: "3", src: "/gallery/03.jpeg", alt: "Trekking trail through northern Pakistan", height: "short" },
  { id: "4", src: "/gallery/04.jpeg", alt: "Guests on a Karakoram Backpackers trip", height: "medium" },
  { id: "5", src: "/gallery/06.jpeg", alt: "Alpine lake and peaks", height: "tall" },
  { id: "6", src: "/gallery/07.jpeg", alt: "Mountain road and valley views", height: "short" },
  { id: "7", src: "/destinations/passu-cones.jpg", alt: "Passu Cones, Hunza", height: "medium" },
  { id: "8", src: "/gallery/15.jpg", alt: "Trip photograph from the Karakoram", height: "tall" },
  { id: "9", src: "/destinations/naltar-valley.jpg", alt: "Naltar Valley", height: "short" },
  { id: "10", src: "/gallery/19.jpg", alt: "Group adventure in Gilgit-Baltistan", height: "medium" },
  { id: "11", src: "/destinations/skardu-blind-lake.jpg", alt: "Skardu Blind Lake", height: "short" },
  { id: "12", src: "/tours/fairy-meadows-2.jpeg", alt: "Fairy Meadows and Nanga Parbat", height: "tall" },
];
