/**
 * Image credits manifest.
 *
 * All imagery is currently "generated": AI-generated illustrative images
 * prepared for Divyam Tours. The "unsplash" source variant is kept in the
 * type in case stock returns, but no stock is in use.
 *
 * Replace with the operator's own photography where possible pre-launch —
 * and remove this file (and /credits page) if all images become originals.
 */

export type PhotoCredit = {
  file: string;            // filename in /public/images
  caption: string;         // descriptive caption for the credits page
  source: "unsplash" | "generated";
  photographer?: string;   // photographer name (unsplash only)
  unsplashSlug?: string;   // unsplash.com/photos/<slug> (unsplash only)
};

export const photoCredits: PhotoCredit[] = [
  { file: "hero-dawn-ghat.webp", caption: "Dawn over the Ganga: golden mist and boats (illustrative)", source: "generated" },
  { file: "hero-aarti.webp", caption: "A priest raising the tiered lamp at evening aarti (illustrative)", source: "generated" },
  { file: "operator-chai.webp", caption: "Kulhad chai and marigolds on the dashboard at dawn (illustrative)", source: "generated" },
  { file: "service-sightseeing.webp", caption: "Ghats panorama with moored boats, late morning (illustrative)", source: "generated" },
  { file: "service-outstation.webp", caption: "SUV on a tree-lined UP highway at dawn (illustrative)", source: "generated" },
  { file: "service-packages.webp", caption: "Colourful rowing boats moored on the Ganga (illustrative)", source: "generated" },
  { file: "route-airport-2.webp", caption: "Lal Bahadur Shastri Airport, Varanasi (illustrative)", source: "generated" },
  { file: "route-sarnath.webp", caption: "Dhamek Stupa at Sarnath, morning light (illustrative)", source: "generated" },
  { file: "route-prayagraj.webp", caption: "Pilgrim boats at the Triveni Sangam, Prayagraj (illustrative)", source: "generated" },
  { file: "route-ayodhya.webp", caption: "Carved sandstone temple with reflecting pool (illustrative)", source: "generated" },
  { file: "route-bodhgaya.webp", caption: "Mahabodhi Temple, Bodh Gaya (illustrative)", source: "generated" },
  { file: "route-vindhyachal.webp", caption: "Devi temple entrance with marigold sellers, Vindhyachal (illustrative)", source: "generated" },
  { file: "route-temple-tour.webp", caption: "Kashi Vishwanath spire over old-city rooftops (illustrative)", source: "generated" },
  { file: "route-sightseeing.webp", caption: "Assi Ghat on a warm morning (illustrative)", source: "generated" },
  { file: "vehicle-sedan-2.webp", caption: "Sedan taxi in central Varanasi (illustrative)", source: "generated" },
  { file: "vehicle-suv-2.webp", caption: "SUV / MUV tourist vehicle at the ghats (illustrative)", source: "generated" },
  { file: "vehicle-tempo-2.webp", caption: "Tempo traveller for group trips (illustrative)", source: "generated" },
  { file: "vehicle-luggage-2.webp", caption: "Luggage-ready airport transfer vehicle (illustrative)", source: "generated" },
  { file: "fleet-lineup.webp", caption: "Sedan, MUV and tempo traveller with drivers (illustrative)", source: "generated" },
  { file: "guide-ghats.webp", caption: "Guide with travellers on the ghat steps (illustrative)", source: "generated" },
  { file: "band-river.webp", caption: "Rowing boats moored in the dawn mist (illustrative)", source: "generated" },
  { file: "package-local.webp", caption: "Morning bustle at Dashashwamedh Ghat (illustrative)", source: "generated" },
  { file: "package-sarnath-2.webp", caption: "Sarnath day trip (illustrative)", source: "generated" },
  { file: "package-circuit-2.webp", caption: "Spiritual circuit (illustrative)", source: "generated" },
  { file: "story-1-2.webp", caption: "Dawn over the Varanasi ghats (illustrative)", source: "generated" },
  { file: "story-1.webp", caption: "The aarti lamp held over the river at night (illustrative)", source: "generated" },
  { file: "food-kachori.webp", caption: "Kachori, jalebi and kulhad chai in the old city (illustrative)", source: "generated" },
  { file: "food-lassi.webp", caption: "Malai lassi in a kulhad with saffron and pistachio (illustrative)", source: "generated" },
  { file: "story-2-2.webp", caption: "Lane approaching the Kashi Vishwanath corridor (illustrative)", source: "generated" },
  { file: "story-3-2.webp", caption: "Evening Ganga aarti at Dashashwamedh (illustrative)", source: "generated" },
];
