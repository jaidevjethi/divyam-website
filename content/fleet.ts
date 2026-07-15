/**
 * Vehicle / fleet data — semantic-by-need, not by model name.
 *
 * Models listed are TYPICAL examples for the category in India — the operator
 * may run any combination. Replace `examples` with the actual fleet list before launch.
 */

export type Vehicle = {
  slug: string;
  category: string;
  bestFor: string;
  seating: string;
  luggage: string;
  idealTripTypes: string[];
  routeSuitability: string;
  examples: string[];
  image: string;
  tags?: string[];
  passengers: number;
  largeBags: number;
  cabinBags: number;
  idealFor: string;
};

export const fleet: Vehicle[] = [
  {
    slug: "sedan",
    category: "Sedan",
    bestFor: "Solo travellers and couples",
    seating: "Up to 3 passengers (4 with light luggage)",
    luggage: "2 medium suitcases",
    idealTripTypes: [
      "Airport pickup and drop",
      "City and temple visits",
      "Same-day Sarnath",
      "Short outstation trips up to ~150 km",
    ],
    routeSuitability:
      "Comfortable for shorter trips and city use. For long routes (Ayodhya, Bodhgaya), pick SUV/MUV.",
    examples: ["Maruti Dzire", "Honda Amaze"],
    image: "/images/vehicle-sedan-2.jpg",
    tags: ["City use", "Couples"],
    passengers: 3,
    largeBags: 2,
    cabinBags: 2,
    idealFor: "3 Adults + 2 Large Suitcases",
  },
  {
    slug: "suv-muv",
    category: "SUV / MUV",
    bestFor: "Families of 4–6 and longer routes",
    seating: "Up to 6 passengers including driver",
    luggage: "4–5 suitcases comfortably",
    idealTripTypes: [
      "Family airport transfer with luggage",
      "Full-day local sightseeing",
      "Outstation routes — Prayagraj, Ayodhya, Bodhgaya",
      "Multi-day spiritual circuits",
    ],
    routeSuitability:
      "The most versatile option. Recommended for elderly travellers, long routes and groups of 4+ with luggage.",
    examples: ["Toyota Innova Crysta", "Mahindra Scorpio"],
    image: "/images/vehicle-suv-2.jpg",
    tags: ["Family", "Senior comfort", "Outstation"],
    passengers: 5,
    largeBags: 4,
    cabinBags: 3,
    idealFor: "5 Adults + 4 Large Suitcases",
  },
  {
    slug: "tempo-traveller",
    category: "Tempo Traveller",
    bestFor: "Groups of 7–12 and pilgrim parties",
    seating: "Up to 12 passengers",
    luggage: "Roof carrier available for extended luggage",
    idealTripTypes: [
      "Group pilgrimage tours",
      "Multi-day spiritual circuits",
      "Large family travel",
      "Outstation routes with shared vehicle",
    ],
    routeSuitability:
      "Best for group routes — Varanasi + Sarnath + Prayagraj + Ayodhya in one comfortable vehicle.",
    examples: ["Force Tempo Traveller"],
    image: "/images/vehicle-tempo-2.jpg",
    tags: ["Groups", "Multi-day"],
    passengers: 12,
    largeBags: 8,
    cabinBags: 8,
    idealFor: "12 Adults + 8 Large Suitcases",
  },
  {
    slug: "luggage-friendly",
    category: "Luggage-friendly airport vehicle",
    bestFor: "Travellers with extra luggage on airport transfer",
    seating: "Up to 4 passengers",
    luggage: "3–4 large suitcases with no compromise on legroom",
    idealTripTypes: [
      "International arrivals with multiple checked bags",
      "Long-stay travellers shifting hotels",
      "Photographer / business travel kits",
    ],
    routeSuitability:
      "Specifically configured for airport transfer comfort with extra luggage.",
    examples: ["Innova / SUV with extra boot space"],
    image: "/images/vehicle-luggage-2.jpg",
    tags: ["Airport arrival", "Extra luggage"],
    passengers: 4,
    largeBags: 4,
    cabinBags: 2,
    idealFor: "4 Adults + 4 Large Suitcases",
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return fleet.find((v) => v.slug === slug);
}
