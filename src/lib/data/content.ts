export type Testimonial = {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  rating: number;
  review: string;
  image: string;
  tour: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    country: "United Kingdom",
    countryCode: "gb",
    rating: 5,
    review:
      "The K2 Base Camp trek exceeded every expectation. Our guide's knowledge of the glacier and local culture made this the adventure of a lifetime. Karakoram Backpackers handled every detail flawlessly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    tour: "K2 Base Camp Expedition",
  },
  {
    id: "2",
    name: "Marco Rossi",
    country: "Italy",
    countryCode: "it",
    rating: 5,
    review:
      "Hunza Valley with Karakoram Backpackers felt like traveling with friends who happen to be experts. The Eagle's Nest sunset and Attabad Lake boat ride were magical.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    tour: "Hunza Valley Cultural Immersion",
  },
  {
    id: "3",
    name: "Emily Chen",
    country: "Singapore",
    countryCode: "sg",
    rating: 5,
    review:
      "Fairy Meadows at sunrise with Nanga Parbat towering above — I'll never forget it. The team was professional, safety-conscious, and genuinely passionate about their homeland.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    tour: "Fairy Meadows & Nanga Parbat",
  },
  {
    id: "4",
    name: "James O'Brien",
    country: "Australia",
    countryCode: "au",
    rating: 5,
    review:
      "Deosai Plains safari was unlike anything I've experienced. We spotted a Himalayan brown bear and camped under a sky full of stars. Premium service from start to finish.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    tour: "Deosai Plains Jeep Safari",
  },
  {
    id: "5",
    name: "Anna Kowalski",
    country: "Poland",
    countryCode: "pl",
    rating: 5,
    review:
      "As a solo female traveler, I felt completely safe and welcomed. The custom itinerary through Skardu and Khaplu was perfectly paced. Already planning my return for K2.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    tour: "Skardu Lakes Expedition",
  },
];

export const heroStats = [
  { value: "5000+", label: "Travelers" },
  { value: "100+", label: "Expeditions" },
  { value: "4.9/5", label: "Rating" },
  { value: "10+", label: "Years Experience" },
];

export const whyChooseUs = [
  {
    title: "Local Expert Guides",
    description: "Born and raised in Gilgit-Baltistan, our guides share generations of mountain knowledge.",
    icon: "Compass",
  },
  {
    title: "Personalized Experiences",
    description: "Every itinerary is tailored to your pace, interests, and comfort level.",
    icon: "Sparkles",
  },
  {
    title: "Safe Adventures",
    description: "Certified guides, emergency protocols, and satellite communication on every trek.",
    icon: "Shield",
  },
  {
    title: "Sustainable Tourism",
    description: "Leave-no-trace principles and community partnerships that benefit local villages.",
    icon: "Leaf",
  },
  {
    title: "Premium Transportation",
    description: "Modern 4x4 vehicles and well-maintained camping equipment for every expedition.",
    icon: "Car",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance from booking through your return journey.",
    icon: "Headphones",
  },
];

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
