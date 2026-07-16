/**
 * Image credits manifest.
 *
 * Two sources today:
 *  - "unsplash": stock photography (free license, attribution appreciated)
 *  - "generated": AI-generated illustrative images prepared for Divyam Tours
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
  { file: "hero-dawn-ghat.webp", caption: "Dawn over the Ganga — golden mist and boats — illustrative", source: "generated" },
  { file: "hero-aarti.webp", caption: "Priests holding torches at evening aarti", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "Rn_GBQ7d5HE" },
  { file: "operator-chai.webp", caption: "Kulhad chai and marigolds on the dashboard at dawn — illustrative", source: "generated" },
  { file: "service-sightseeing.webp", caption: "Boats parked near ghat buildings", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "T5s48osIQTU" },
  { file: "service-outstation.webp", caption: "SUV on a tree-lined UP highway at dawn — illustrative", source: "generated" },
  { file: "service-packages.webp", caption: "Group of boats on the Ganges", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "wloNuC7qKf8" },
  { file: "route-airport-2.webp", caption: "Lal Bahadur Shastri Airport, Varanasi — illustrative", source: "generated" },
  { file: "route-sarnath.webp", caption: "Dhamek Stupa, Sarnath", source: "unsplash", photographer: "Braj Kishor", unsplashSlug: "99fJbRG7e4U" },
  { file: "route-prayagraj.webp", caption: "Crowds at the Triveni Sangam, Prayagraj", source: "unsplash", photographer: "Palak Pitroda", unsplashSlug: "BgXBhOE49sU" },
  { file: "route-ayodhya.webp", caption: "Temple complex with reflecting water", source: "unsplash", photographer: "Shivam Tiwari", unsplashSlug: "yRzcLVJTxUw" },
  { file: "route-bodhgaya.webp", caption: "Mahabodhi Temple, Bodh Gaya — illustrative", source: "generated" },
  { file: "route-vindhyachal.webp", caption: "Devi temple entrance with marigold sellers, Vindhyachal — illustrative", source: "generated" },
  { file: "route-temple-tour.webp", caption: "Kashi Vishwanath spire over old-city rooftops — illustrative", source: "generated" },
  { file: "route-sightseeing.webp", caption: "Assi Ghat on a warm morning — illustrative", source: "generated" },
  { file: "vehicle-sedan-2.webp", caption: "Sedan taxi in central Varanasi — illustrative", source: "generated" },
  { file: "vehicle-suv-2.webp", caption: "SUV / MUV tourist vehicle at the ghats — illustrative", source: "generated" },
  { file: "vehicle-tempo-2.webp", caption: "Tempo traveller for group trips — illustrative", source: "generated" },
  { file: "vehicle-luggage-2.webp", caption: "Luggage-ready airport transfer vehicle — illustrative", source: "generated" },
  { file: "fleet-lineup.webp", caption: "Sedan, MUV and tempo traveller with drivers — illustrative", source: "generated" },
  { file: "guide-ghats.webp", caption: "Guide with travellers on the ghat steps — illustrative", source: "generated" },
  { file: "band-river.webp", caption: "Rowing boats at the riverbank", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "OPWM488DfeQ" },
  { file: "package-local.webp", caption: "Boats near ghat buildings in daylight", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "Iu06T6z2vRE" },
  { file: "package-sarnath-2.webp", caption: "Sarnath day trip — illustrative", source: "generated" },
  { file: "package-circuit-2.webp", caption: "Spiritual circuit — illustrative", source: "generated" },
  { file: "story-1-2.webp", caption: "Dawn over the Varanasi ghats — illustrative", source: "generated" },
  { file: "story-1.webp", caption: "Priests at the fire ceremony", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "05DurkzaUsg" },
  { file: "story-2-2.webp", caption: "Lane approaching the Kashi Vishwanath corridor — illustrative", source: "generated" },
  { file: "story-3-2.webp", caption: "Evening Ganga aarti at Dashashwamedh — illustrative", source: "generated" },
];
