/**
 * Single source of truth for business identity.
 *
 * Replace placeholder values with real data from the operator before going live.
 * See README.md "Before going live" checklist.
 */

export const business = {
  legalName: "Divyam Tours and Taxi Services",
  shortName: "Divyam Tours",
  // Founder/coordinator — named repeatedly in Google reviews.
  founder: "Mukesh",
  // Exact business name on the Google Business Profile — used as the schema
  // `name` so Google can match the entity to the profile (NAP consistency).
  gbpName: "Divyam tours & travels",
  tagline: "Private taxis and spiritual travel assistance in Varanasi",

  // Contact
  phone: {
    e164: "+916392777765",
    display: "+91 63927 77765",
  },
  whatsapp: {
    e164: "916392777765",
    display: "+91 63927 77765",
  },
  email: "hello@divyamtours.com",

  // Address
  address: {
    street: "Bhadani, Ravindrapuri Colony, Anandbagh, Bhelupur",
    locality: "Varanasi",
    region: "Uttar Pradesh",
    postalCode: "221001",
    country: "IN",
  },

  // Operating window — NOT yet confirmed with the operator. Until
  // hoursConfirmed is true, no opening-hours claim renders anywhere and
  // schema omits openingHoursSpecification entirely.
  hours: {
    display: "Open daily — timings confirmed when you book",
    hoursConfirmed: false,
    isOpen247: false,
    openingHours: [] as Array<{ days: string[]; opens: string; closes: string }>,
  },

  // Service area — used in LocalBusiness schema
  serviceArea: [
    "Varanasi",
    "Sarnath",
    "Prayagraj",
    "Ayodhya",
    "Bodhgaya",
    "Vindhyachal",
    "Chunar",
    "Gaya",
  ],

  // Geo coords for LocalBusiness (Divyam Tours actual location)
  geo: {
    latitude: 25.294955,
    longitude: 83.002709,
  },

  // Google Maps embed URL
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2752323167915!2d83.0027089!3d25.294955299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3105e9b636e9%3A0xb65f4315cb4defe3!2sDivyam%20tours%20%26%20travels!5e0!3m2!1sen!2sin!4v1779360841939!5m2!1sen!2sin",

  // Canonical URL — the domain the client intends to purchase for this site.
  // (GBP currently links divyamtours.in; update GBP to .com at launch.)
  url: "https://divyamtours.com",

  // Socials
  socials: {
    googleBusiness: "https://maps.app.goo.gl/JhDkK6k2rEgv7b1U8",
    facebook: "",
    instagram: "",
  },

  // Google Business Profile facts — shown on-page, linked to the profile.
  // Update the count periodically; do NOT copy into JSON-LD aggregateRating
  // (Google requires first-party reviews for that).
  googleRating: {
    value: 4.9,
    count: 257,
  },

  // Currency for prices
  currency: "INR",

  // Hero photography
  heroImage: "/images/hero-dawn-ghat.webp",
  heroImageAlt: "Boats moored beside the ghat steps at dawn, Varanasi",
  heroAsideImage: "/images/hero-aarti.webp",
  heroAsideImageAlt: "Priests holding torches at the evening Ganga aarti",
} as const;

/**
 * Trust badges — render in the hero only when `confirmed: true`.
 */
export const trustBadges: { label: string; confirmed: boolean }[] = [
  { label: "Local Varanasi operator", confirmed: true },
  { label: "Verified drivers", confirmed: true },
  { label: "Operating since 2015", confirmed: true },
];

/** True if the value is still an unreplaced placeholder. Used to render fallbacks. */
export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  return /^\{\{.*\}\}$/.test(value);
}
