export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Expert";
export type TourCategory =
  | "Family"
  | "Cultural"
  | "Trekking"
  | "Mountaineering"
  | "Jeep Safari"
  | "Photography"
  | "Camping";
export type TourCurrency = "USD" | "PKR";

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
  currency: TourCurrency;
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
  "Any item not mentioned",
];

/** Approximate USD for mixed-currency sorting only. */
export function tourSortPrice(tour: Tour): number {
  return tour.currency === "PKR" ? tour.price / 280 : tour.price;
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "fairy-meadows",
    title: "Fairy Meadows",
    destination: "Fairy Meadows",
    destinationSlug: "fairy-meadows",
    location: "Fairy Meadows, Gilgit-Baltistan, Pakistan",
    description:
      "A 5-day family trek to Fairy Meadows — locally known as Joot — at the base of Nanga Parbat, the world's 9th-highest peak.",
    overview:
      "Fairy Meadows is a beautiful meadow located at the base of the majestic Nanga Parbat, one of the highest mountains in Pakistan. This 5-day tour package will take you on a trek to Fairy Meadows, where you can experience the beauty of the Himalayas up close. You will also get to visit the Nanga Parbat base camp, Raikot Bridge, and the Junction Point of the Three Great Mountain Ranges.",
    duration: "5 Days",
    durationDays: 5,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "3,300 m",
    trekLocation: "Gilgit-Baltistan",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 500,
    currency: "USD",
    rating: 5,
    reviewCount: 0,
    image: "/tours/fairy-meadows.jpeg",
    images: [
      "/tours/fairy-meadows.jpeg",
      "/tours/fairy-meadows-2.jpeg",
      "/tours/fairy-meadows-3.jpg",
    ],
    category: "Family",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Chilas",
        description:
          "Start from Islamabad early in the morning and drive to Chilas via the Karakoram Highway (about 10 hours), with stops for meals and views. Evening check-in in Chilas. If Naran is open, the route uses Babusar Top instead of the Besham Road.",
      },
      {
        day: 2,
        title: "Chilas to Fairy Meadows",
        description:
          "After breakfast, drive to Raikot Bridge, then take a jeep to Tattu Village. Trek from Tattu to Fairy Meadows through forests and meadows. Evening arrival and overnight at camp or guesthouse.",
      },
      {
        day: 3,
        title: "Fairy Meadows Exploration",
        description:
          "Full day exploring Fairy Meadows. Optional hike to Nanga Parbat Base Camp (weather permitting). Relax among the meadows with views of the 8,126 m north face. Overnight in Fairy Meadows.",
      },
      {
        day: 4,
        title: "Fairy Meadows to Chilas",
        description:
          "Trek back to Tattu Village, jeep to Raikot Bridge, and drive to Chilas. Overnight in Chilas — or Naran if that road is open.",
      },
      {
        day: 5,
        title: "Chilas to Islamabad / Lahore",
        description:
          "After breakfast, return to Islamabad with scenic stops. Arrival in Lahore concludes the tour for guests continuing south.",
      },
    ],
    included: [...defaultIncluded, "Jeep Charges"],
    excluded: defaultExcluded,
  },
  {
    id: "2",
    slug: "hunza-valley",
    title: "Hunza Valley",
    destination: "Hunza Valley",
    destinationSlug: "hunza",
    location: "Hunza Valley, Gilgit-Baltistan, Pakistan",
    description:
      "A 5-day family tour through Hunza — forts, Attabad Lake, Passu Cones, Hussaini Bridge, and Khunjerab Pass on the China border.",
    overview:
      "This 5-day family tour to Hunza is designed for comfort, fun, and unforgettable moments. From scenic mountain drives and historic forts to the peaceful beauty of Attabad Lake and lively local bazaars, each day offers something special for all ages. With smooth travel, cozy stays, and guided visits, this trip is the perfect mix of adventure and relaxation for your whole family.",
    duration: "5 Days",
    durationDays: 5,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "2,438 m",
    trekLocation: "Hunza Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 40000,
    currency: "PKR",
    rating: 5,
    reviewCount: 0,
    image: "/tours/hunza-valley.jpeg",
    images: [
      "/tours/hunza-valley.jpeg",
      "/tours/hunza-valley-2.jpeg",
      "/tours/hunza-extra.jpeg",
      "/destinations/passu-cones.jpg",
    ],
    category: "Family",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Journey to Gilgit",
        description:
          "Breakfast at Balakot, then Dassu and Besham. Tea and lunch break at Chilas. Reach Gilgit by about 5:00 pm for check-in. Overnight in Gilgit. If Naran is open, the scenic Babusar Top road is used.",
      },
      {
        day: 2,
        title: "Gilgit to Hunza",
        description:
          "Morning drive to Hunza (about 2 hours), arriving around 1:30 pm. Visit Rakaposhi viewpoint, Altit and Baltit Forts, stroll Karimabad Bazaar, and eat at Café de Hunza. Overnight in Karimabad.",
      },
      {
        day: 3,
        title: "Hunza to China Border",
        description:
          "Drive to Khunjerab Pass (about 3.5 hours one way). Visit Attabad Lake, Passu Cones, and Hussaini Suspension Bridge. Return to Karimabad for the night.",
      },
      {
        day: 4,
        title: "Hunza to Besham",
        description:
          "Sunrise at Eagle's Nest viewpoint, then a long drive toward Besham (8–10 hours) with scenic stops. Overnight in Chilas — or Naran if open.",
      },
      {
        day: 5,
        title: "Return to Islamabad",
        description:
          "Breakfast in Chilas or Naran, then 5–6 hours to Islamabad with short stops. Drop-off at agreed locations in Islamabad.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "3",
    slug: "hunza-nalter-valley-china-border",
    title: "12 Days Complete Tour of Gilgit, Skardu & Fairy Meadows",
    destination: "Gilgit-Baltistan",
    destinationSlug: "skardu",
    location: "Gilgit, Hunza, Skardu & Fairy Meadows, Pakistan",
    description:
      "An all-inclusive 12-day journey covering Fairy Meadows, Hunza, Passu, Attabad Lake, Baltit Fort, Skardu, and the Karakoram Highway.",
    overview:
      "Embark on an unforgettable 12-day journey through Gilgit-Baltistan, a land of towering peaks, turquoise lakes, and ancient cultures. This all-inclusive tour takes you to Fairy Meadows & Nanga Parbat Base Camp, Attabad Lake, Baltit Fort, and the Deosai Plains region — blending trekking, culture, and scenic road travel along the Karakoram Highway.",
    duration: "12 Days",
    durationDays: 12,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "3,400 m",
    trekLocation: "Gilgit-Baltistan",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1800,
    currency: "USD",
    rating: 5,
    reviewCount: 0,
    image: "/tours/gilgit-skardu-fairymeadows.jpeg",
    images: [
      "/tours/gilgit-skardu-fairymeadows.jpeg",
      "/tours/gilgit-skardu-2.jpeg",
      "/tours/gilgit-skardu-3.jpeg",
      "/tours/fairy-meadows-2.jpeg",
    ],
    category: "Trekking",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Journey to Naran via Scenic Stops",
        description:
          "Tour starts around 8 am on the Karakoram Highway toward Batakundi (about 9 hours), with a stop in Naran in the Kaghan Valley.",
      },
      {
        day: 2,
        title: "Batakundi – Fairy Meadows",
        description:
          "Drive to Raikot Bridge (2 hours), 4x4 to Tatu Village (2 hours), then trek about 6 km / 3 hours (300 m gain) to Fairy Meadows at the base of Nanga Parbat. Camp overnight.",
      },
      {
        day: 3,
        title: "Fairy Meadows – Beyal Base Camp",
        description:
          "Hike Fairy Meadows to Beyal Camp (about 2 hours, 3 km). Explore villages, glacier views, and local life. Overnight camping at Beyal.",
      },
      {
        day: 4,
        title: "Beyal Camp – Fairy Meadows – Gilgit",
        description:
          "Descend to the park entrance (about 3 hours, 8 km), then travel 3–4 hours to Gilgit. Overnight homestay in Gilgit.",
      },
      {
        day: 5,
        title: "Gilgit – Karimabad (Hunza Valley)",
        description:
          "Visit the junction of the Karakoram, Himalaya, and Hindu Kush, explore Gilgit Bazaar, then drive about 3 hours to Hunza. Evening arrival in Karimabad.",
      },
      {
        day: 6,
        title: "Hunza Valley & Passu Mountains",
        description:
          "Visit Altit Fort (12th century) and Baltit Fort (14th century). Continue to Passu Cones, Attabad Lake, and Passu Suspension Bridge. Return to Karimabad.",
      },
      {
        day: 7,
        title: "Hunza Valley – Gilgit",
        description:
          "Return toward Gilgit via the KKH with stops at Ganish, Rakaposhi viewpoints, Danyore Suspension Bridge, and Kargah Buddha.",
      },
      {
        day: 8,
        title: "Gilgit – Skardu (Jaglot–Skardu Road)",
        description:
          "Drive the Jaglot–Skardu Road (about 4 hours). Visit Shangrila Resort and Upper Kachura Lake (optional zipline or boating). Evening in Skardu.",
      },
      {
        day: 9,
        title: "Skardu & Surroundings",
        description:
          "Visit Kharpocho Fort, Shigar Valley, Blind Lake, and an optional desert safari. Overnight in Skardu.",
      },
      {
        day: 10,
        title: "Return to Islamabad",
        description:
          "Fly Skardu–Islamabad (about 1 hour) or travel by road to Gilgit then fly, depending on weather and airline schedules. Optional short city time in Islamabad.",
      },
      {
        day: 11,
        title: "Free day in Islamabad",
        description:
          "A buffer day in Islamabad for rest, sightseeing, or delayed mountain flights before international departure.",
      },
      {
        day: 12,
        title: "Fly to Home Country",
        description:
          "After breakfast, airport transfer with your guide for international departure.",
      },
    ],
    included: [
      "Luxury Transport (Crolla, GLI, City etc)",
      "Quality Meals (6 breakfasts + 5 dinners)",
      "BBQ & Bonfire",
      "All tolls and taxes",
      "4x4 jeeps wherever required",
      "Basic First Aid",
    ],
    excluded: defaultExcluded,
  },
  {
    id: "4",
    slug: "shyok-winter-festival",
    title: "Shyok Winter Festival",
    destination: "Khaplu Valley",
    destinationSlug: "khaplu",
    location: "Khaplu Valley, Gilgit-Baltistan, Pakistan",
    description:
      "Experience the magic of Shyok Festival — winter sports, Balti culture, and Khaplu Palace every January 7–9.",
    overview:
      "The Shyok Winter Festival in Khaplu, Gilgit-Baltistan, is a festival of winter sports and local culture held every January 7–9. Set against snow-capped mountains, it includes Tiaku Polo, ice hockey, rock climbing, volleyball, and vivid Balti performances. This family tour to Skardu is designed for comfort, fun, and unforgettable moments.",
    duration: "8 Days",
    durationDays: 8,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "3,400 m",
    trekLocation: "Skardu Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1500,
    currency: "USD",
    rating: 5,
    reviewCount: 0,
    image: "/tours/shyok-winter-festival.jpg",
    images: [
      "/tours/shyok-winter-festival.jpg",
      "/destinations/skardu-blind-lake.jpg",
      "/gallery/22.jpeg",
    ],
    category: "Family",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Fly to Skardu",
        description:
          "Early morning flight from Islamabad to Skardu (about an hour). Transfer to the hotel, then explore Katpana Desert and Skardu Bazaar. Traditional Balti supper. Overnight in Skardu.",
      },
      {
        day: 2,
        title: "Drive to Khaplu",
        description:
          "Drive Skardu to Khaplu (4–5 hours) with stops at Shigar Valley and the Shyok River viewpoint. Visit historic Khaplu Palace. Overnight in Khaplu.",
      },
      {
        day: 3,
        title: "Shyok Festival Day 1",
        description:
          "Festival opening in Khaplu City Park. Tiaku Polo, Ice Hockey Championship, local food stalls, rock climbing, and volleyball. Evening bonfire and Ltanmo. Overnight in Khaplu.",
      },
      {
        day: 4,
        title: "Shyok Festival Day 2",
        description:
          "Balti cultural performances and Mayfang dances, including groups such as Khadim of Rondu and the Hushe Group. Celebrate the festival's close with the community. Drive back to Skardu (4–5 hours). Overnight in Skardu.",
      },
      {
        day: 5,
        title: "Khaplu to Skardu",
        description:
          "Return from Khaplu to Skardu, explore the surroundings, and overnight in Skardu city.",
      },
      {
        day: 6,
        title: "Fly to Islamabad",
        description: "Early flight back to Islamabad.",
      },
      {
        day: 7,
        title: "Fly to Home Country",
        description:
          "After breakfast, your guide sees you off at Islamabad International Airport.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "5",
    slug: "sut-das-darel-festival",
    title: "Sut Das Darel Festival",
    destination: "Darel Valley",
    destinationSlug: "darel",
    location: "Darel Valley, Gilgit-Baltistan, Pakistan",
    description:
      "An 8–10 day cultural tour of Darel Valley for polo, horse racing, football, traditional music, and Bazm Adab.",
    overview:
      "Sut Das Darel Festival is an annual event in Gilgit-Baltistan's Darel Valley. This dynamic festival celebrates the region's history, traditions, and sports — polo, horse racing, football, and traditional music — against breathtaking mountain scenery.",
    duration: "8–10 Days",
    durationDays: 9,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "2,438 m",
    trekLocation: "Darel Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1500,
    currency: "USD",
    rating: 5,
    reviewCount: 0,
    image: "/gallery/03.jpeg",
    images: [
      "/gallery/03.jpeg",
      "/destinations/kutwal-valley.jpg",
      "/gallery/01.jpeg",
    ],
    category: "Cultural",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gilgit",
        description:
          "Arrive in Gilgit by flight or road from Islamabad. Check in and unwind. Evening stroll through local markets and traditional Gilgiti food.",
      },
      {
        day: 2,
        title: "Travel to Diamer",
        description:
          "After breakfast, drive to Darel in Diamer District (about 4–5 hours) through valleys and rivers. Check in and enjoy the village before the festival begins.",
      },
      {
        day: 3,
        title: "Sut Das Darel Festival (Days 3–6)",
        description:
          "Opening ceremony then days of polo, football, volleyball, cricket, horse races, and tug-of-war. Evenings feature Bazm Adab with local poets and artists. Craft stalls, dance, music, historical sites, and nature walks.",
      },
      {
        day: 7,
        title: "Explore Sut Das",
        description:
          "Take a break from the festival for a nature walk or light trek, historical sites, and time with local families.",
      },
      {
        day: 8,
        title: "Return to Gilgit",
        description:
          "Morning return to Gilgit. Time for touring or shopping before overnight in Gilgit.",
      },
      {
        day: 9,
        title: "Return to Islamabad",
        description:
          "Flight from Gilgit to Islamabad, then rest at the hotel in Islamabad.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "6",
    slug: "hunza-winter-festival",
    title: "Hunza Winter Festival",
    destination: "Hunza Valley",
    destinationSlug: "hunza",
    location: "Hunza Valley, Gilgit-Baltistan, Pakistan",
    description:
      "A dazzling annual celebration of culture, ice sports, and hospitality on Attabad Lake, 28–31 December.",
    overview:
      "The Hunza Winter Festival is held in Hunza Valley every year from December 28 to December 31. This festival on Attabad Lake features ice hockey, skating, cultural performances, and traditional games such as Basra, Pindok, and Baalbut.",
    duration: "8–9 Days",
    durationDays: 9,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "2,438 m",
    trekLocation: "Hunza Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1800,
    currency: "USD",
    rating: 5,
    reviewCount: 0,
    image: "/tours/hunza-winter.jpeg",
    images: [
      "/tours/hunza-winter.jpeg",
      "/tours/hunza-valley.jpeg",
      "/destinations/passu-cones.jpg",
    ],
    category: "Cultural",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Islamabad",
        description:
          "Airport welcome and hotel transfer. Rest after your journey, with an optional evening walk or shopping in Islamabad.",
      },
      {
        day: 2,
        title: "Islamabad to Gilgit",
        description:
          "Arrive in Gilgit by air or road along the Karakoram Highway, then drive 2–3 hours to Hunza. Check in at Karimabad or Altit. If the flight is cancelled, overnight in Gilgit.",
      },
      {
        day: 3,
        title: "Festival Opening and Ice Sports",
        description:
          "Travel to Attabad Lake for the opening ceremony, ice hockey and skating (including women's teams), and traditional games. Evening cultural performances such as Risme Tao and Risme Shop.",
      },
      {
        day: 4,
        title: "Festival Day",
        description:
          "Morning at the festival for more winter sports. Ice walking and photography on Attabad Lake. Afternoon Hunza cuisine, then a grand cultural show with Mayfung rites, folk music, and dance.",
      },
      {
        day: 5,
        title: "Sightseeing in Hunza",
        description:
          "Visit Baltit Fort and Altit Fort, then Eagle's Nest for views of Ultar Sar, Ladyfinger Peak, and Rakaposhi. Time in the bazaar for handicrafts, Hunza caps, and dried apricots.",
      },
      {
        day: 6,
        title: "Festival and Gulmit Exploration",
        description:
          "Morning closing activities at Attabad Lake. Afternoon in Gulmit Village — Wakhi culture, Hussaini Suspension Bridge, and Gulmit Museum — then return to Karimabad.",
      },
      {
        day: 7,
        title: "Passu and Nagar Valley",
        description:
          "Day trip to Passu Cones and Passu Glacier. If weather and roads allow, continue to Khunjerab Pass (4,693 m). Evening farewell meal in Karimabad with folk music.",
      },
      {
        day: 8,
        title: "Fly to Islamabad",
        description:
          "Drive to Gilgit and fly to Islamabad, with optional time in Gilgit depending on the flight.",
      },
      {
        day: 9,
        title: "Fly to Home Country",
        description:
          "Breakfast included. Airport transfers on your departure timing. Partner hotel checkout is 12 pm.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "7",
    slug: "mayfung-fire-festival",
    title: "Mayfung Fire Festival",
    destination: "Skardu",
    destinationSlug: "skardu",
    location: "Skardu, Gilgit-Baltistan, Pakistan",
    description:
      "Celebrate the Balti winter solstice on December 21st with bonfires, music, dance, and local sports in Skardu.",
    overview:
      "The Mayfung Fire Festival in Skardu is a lively celebration of the winter solstice with bonfires, traditional music, dancing, and local sports. This centuries-old Balti celebration, held on December 21st, welcomes winter with warmth, community, and prayers for success.",
    duration: "7–8 Days",
    durationDays: 8,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "2,438 m",
    trekLocation: "Skardu Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1500,
    currency: "USD",
    rating: 5,
    reviewCount: 0,
    image: "/destinations/skardu-blind-lake.jpg",
    images: [
      "/destinations/skardu-blind-lake.jpg",
      "/gallery/22.jpeg",
      "/gallery/06.jpeg",
    ],
    category: "Family",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Journey to Gilgit",
        description:
          "Depart Islamabad around 5:00 am along the Karakoram Highway through Abbottabad, Mansehra, and Besham (10–12 hours) to Chilas. Alternatively fly to Skardu if weather permits.",
      },
      {
        day: 2,
        title: "Drive to Skardu",
        description:
          "Leave Chilas around 7:00 am. The 6–7 hour drive toward the Indus and Shigar confluence includes Shangrila Lake. Evening in Skardu Bazaar. Overnight in Skardu.",
      },
      {
        day: 3,
        title: "Mayfung Festival Celebrations",
        description:
          "Lighting of the Mayfung Fire, traditional music and dance, horse and yak racing, local food, and evening prayers around the bonfires. Overnight in Skardu.",
      },
      {
        day: 4,
        title: "Explore Skardu and Surroundings",
        description:
          "Satpara Lake, Shigar Fort, and optional Shangrila Resort lunch. Leisure time in the bazaar. Overnight in Skardu.",
      },
      {
        day: 5,
        title: "Drive / Fly to Chilas",
        description:
          "Depart Skardu around 7:00 am for the 6–7 hour return to Chilas, or fly if weather is favourable.",
      },
      {
        day: 6,
        title: "Drive to Islamabad",
        description:
          "Leave Chilas around 6:00 am, lunch in Besham or Mansehra, arrive Islamabad around 7:00 pm.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "8",
    slug: "shimshal-kuch-festival",
    title: "Shimshal Kuch Festival",
    destination: "Shimshal Valley",
    destinationSlug: "hunza",
    location: "Hunza Valley, Gilgit-Baltistan, Pakistan",
    description:
      "Celebrate Wakhi mountain culture with yak polo, traditional music, and high-altitude trekking in one of Pakistan's most remote valleys.",
    overview:
      "Shimshal Valley, in the Karakoram of Gilgit-Baltistan, is one of Pakistan's most remote regions and home to the Wakhi people. The Shimshal Kuch Festival, held annually in July or August, celebrates mountain life, yak herding, and Wakhi traditions with yak and horse polo, music, dance, trekking, and local cuisine including Shir Chai and Chapshuro.",
    duration: "7–8 Days",
    durationDays: 8,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "3,200 m",
    trekLocation: "Hunza Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1800,
    currency: "USD",
    rating: 5,
    reviewCount: 0,
    image: "/gallery/07.jpeg",
    images: [
      "/gallery/07.jpeg",
      "/tours/hunza-winter.jpeg",
      "/destinations/passu-cones.jpg",
    ],
    category: "Cultural",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Receive Guest from Airport",
        description:
          "Airport welcome and hotel transfer in Islamabad. Rest after your journey, with an optional evening walk or shopping.",
      },
      {
        day: 2,
        title: "Islamabad → Gilgit (Flight – 1 hr)",
        description:
          "Fly to Gilgit (PIA or Serene Air). Visit Kargah Buddha. Overnight in Gilgit.",
      },
      {
        day: 3,
        title: "Gilgit to Hunza",
        description:
          "Drive the Karakoram Highway through Attabad Lake and Passu Cones toward Shimshal. Evening Wakhi cultural performance.",
      },
      {
        day: 4,
        title: "Shimshal Kuch Festival (Full Day)",
        description:
          "Morning yak polo, optional trek toward Shimshal Pass, and evening bonfire with Wakhi folk songs.",
      },
      {
        day: 5,
        title: "Shimshal → Gilgit (Drive – 6 hrs)",
        description:
          "Return via the KKH with a stop at Gulmit Village. Overnight in Gilgit.",
      },
      {
        day: 6,
        title: "Gilgit → Islamabad (Flight or Drive)",
        description:
          "Fly out of the valley (views of Nanga Parbat when the routing allows) or drive 12–14 hours. Transfer to the group hotel; evening celebratory meal.",
      },
      {
        day: 7,
        title: "Fly to Home Country",
        description:
          "After breakfast, airport transfer for international departure.",
      },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
  },
  {
    id: "9",
    slug: "nauroz-festival",
    title: "Chilam Joshi Festival",
    destination: "Kalash Valley",
    destinationSlug: "kalash",
    location: "Kalash Valley, Chitral, KPK, Pakistan",
    description:
      "Witness the spring festival of the Kalash people — the Last Pagans of the Hindu Kush — in remote Chitral.",
    overview:
      "The Kalash Valley in Chitral District is home to the Kalash people, often called the Last Pagans of the Hindu Kush. Chilam Joshi, held every year in mid-May, marks spring with renewal, fertility, and matchmaking. Experience traditional attire, drum-and-flute dances, and the customs of this living culture in Bumburet, Rumbur, and Birir.",
    duration: "6–7 Days",
    durationDays: 7,
    difficulty: "Moderate",
    groupSize: "8–12 Guests",
    elevation: "3,100 m",
    trekLocation: "Chitral Valley",
    departurePoint: "Departure from Lahore / Islamabad",
    price: 1500,
    currency: "USD",
    rating: 5,
    reviewCount: 0,
    image: "/gallery/05.jpeg",
    images: [
      "/gallery/05.jpeg",
      "/gallery/19.jpg",
      "/tours/kalash.jpeg",
    ],
    category: "Cultural",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Receive Guest from Airport",
        description:
          "Airport welcome and hotel transfer in Islamabad. Rest after your journey, with an optional evening walk or shopping.",
      },
      {
        day: 2,
        title: "Islamabad to Chitral",
        description:
          "About 10–12 hours via Dir and Lowari Tunnel (Swat / Mingora en route). Evening arrival and hotel in Chitral.",
      },
      {
        day: 3,
        title: "Chitral to Bumburet",
        description:
          "About 2.5 hours via Ayun into Bumburet, the largest Kalash valley. Visit the Kalash Museum and enjoy an evening folk dance.",
      },
      {
        day: 4,
        title: "Chilam Joshi Festival (Full Day in Bumburet)",
        description:
          "Festival day: traditional dress and beadwork, ritual offerings, group dances with drum and flute, and mulberry wine tasting where offered.",
      },
      {
        day: 5,
        title: "Bumburet → Rumbur → Chitral",
        description:
          "Visit more remote Rumbur Valley and the Kalash graveyard, then return to Chitral by the river.",
      },
      {
        day: 6,
        title: "Chitral to Islamabad",
        description:
          "Return drive of about 10–12 hours, with time for a Chitrali cap or Kalash shawl. Tour ends in Islamabad.",
      },
      {
        day: 7,
        title: "Fly to Home Country",
        description:
          "After breakfast, airport transfer for international departure.",
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
  "fairy-meadows",
  "darel",
] as const;

export const difficulties: Difficulty[] = [
  "Easy",
  "Moderate",
  "Challenging",
  "Expert",
];
