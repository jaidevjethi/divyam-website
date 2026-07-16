/**
 * Tour package data.
 *
 * Sample packages reflect common Varanasi tourist plans.
 * Confirm exact stops, inclusions and pricing with the operator before launch.
 */

export type Package = {
  slug: string;
  name: string;
  idealFor: string;
  duration: string;
  mainStops: string[];
  vehicleFit: string;
  guideOption: string;
  summary: string;
  image: string;
  tags?: string[];
  customizable: boolean;
  guideAvailable: boolean;
};

export const packages: Package[] = [
  {
    slug: "varanasi-local-one-day",
    name: "Varanasi Local — One-Day Tour",
    idealFor: "First-time visitors and short-stay tourists",
    duration: "1 day (≈8–10 hours)",
    mainStops: [
      "Kashi Vishwanath Corridor",
      "Dashashwamedh Ghat",
      "Manikarnika Ghat (drive-by view)",
      "Sankat Mochan Hanuman Temple",
      "BHU campus and New Vishwanath Temple",
      "Evening Ganga Aarti at Dashashwamedh",
    ],
    vehicleFit: "Sedan for 1–3 travellers, SUV/MUV for families of 4–6",
    guideOption: "Optional local guide for temple-area orientation and history.",
    summary:
      "A paced one-day plan covering the city's most important temple and ghat sites, ending with the evening Ganga aarti. Driver familiar with parking-and-walk points so you don't waste time in lanes.",
    image: "/images/package-local.webp",
    tags: ["First-time visitors", "Day plan"],
    customizable: true,
    guideAvailable: true,
  },
  {
    slug: "varanasi-sarnath-day",
    name: "Varanasi + Sarnath Day Trip",
    idealFor: "Buddhist pilgrimage visitors and first-time tourists",
    duration: "1 day (≈9–10 hours)",
    mainStops: [
      "Sarnath: Dhamek Stupa, Mulagandha Kuti Vihara",
      "Sarnath Museum (closed Fridays)",
      "Varanasi: Kashi Vishwanath area",
      "Dashashwamedh Ghat",
      "Evening Ganga Aarti",
    ],
    vehicleFit: "Sedan or SUV/MUV depending on group size",
    guideOption: "Optional guide at Sarnath and Kashi Vishwanath area.",
    summary:
      "Sarnath in the morning while it's quiet, Varanasi in the afternoon and evening. We pace the order so you arrive at the aarti without rushing.",
    image: "/images/package-sarnath-2.webp",
    tags: ["Buddhist circuit", "International tourists"],
    customizable: true,
    guideAvailable: true,
  },
  {
    slug: "spiritual-circuit-3-day",
    name: "Varanasi · Sarnath · Prayagraj — 3-Day Spiritual Circuit",
    idealFor: "Pilgrims and travellers wanting unhurried darshan",
    duration: "3 days / 2 nights",
    mainStops: [
      "Day 1: Varanasi arrival, Kashi Vishwanath, evening aarti",
      "Day 2: Sarnath morning, Varanasi ghats afternoon",
      "Day 3: Prayagraj day trip — Triveni Sangam, Anand Bhavan",
    ],
    vehicleFit: "SUV/MUV for 2–4 travellers, tempo traveller for groups",
    guideOption: "Guide can be arranged per day or for the full circuit.",
    summary:
      "A comfortable three-day plan that covers darshan, the Buddhist circuit at Sarnath, and the Triveni Sangam at Prayagraj without backtracking.",
    image: "/images/package-circuit-2.webp",
    tags: ["Pilgrim families", "Multi-day"],
    customizable: true,
    guideAvailable: true,
  },
  {
    slug: "airport-arrival-plus-day",
    name: "Airport Arrival + Same-Day Local Sightseeing",
    idealFor: "Short-stay travellers landing in the morning",
    duration: "Same-day (arrival flight to late evening)",
    mainStops: [
      "Airport pickup with driver assistance",
      "Hotel check-in (if booked) or luggage held at vehicle",
      "Kashi Vishwanath area",
      "Ghat walk",
      "Evening aarti at Dashashwamedh",
    ],
    vehicleFit: "SUV/MUV with extra luggage room",
    guideOption: "Optional guide for orientation in the temple area.",
    summary:
      "A practical plan for travellers arriving in the morning and leaving the next day — covers the essential Varanasi experience in one well-paced day from the airport.",
    image: "/images/package-local.webp",
    tags: ["Short-stay", "Airport arrival"],
    customizable: true,
    guideAvailable: true,
  },
];

export function getPackage(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}
