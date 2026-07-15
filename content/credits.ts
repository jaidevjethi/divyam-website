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
  { file: "hero-dawn-ghat.jpg", caption: "Boats moored beside ghat steps", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "dz42hvd61BE" },
  { file: "hero-aarti.jpg", caption: "Priests holding torches at evening aarti", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "Rn_GBQ7d5HE" },
  { file: "service-airport.jpg", caption: "Airplane parked near passenger pathway", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "DDBDkz0p918" },
  { file: "service-sightseeing.jpg", caption: "Boats parked near ghat buildings", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "T5s48osIQTU" },
  { file: "service-outstation.jpg", caption: "Silhouette of people on a boat at sunset", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "nuCkCU1-IBE" },
  { file: "service-packages.jpg", caption: "Group of boats on the Ganges", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "wloNuC7qKf8" },
  { file: "route-airport-2.jpg", caption: "Lal Bahadur Shastri Airport, Varanasi — illustrative", source: "generated" },
  { file: "route-sarnath.jpg", caption: "Dhamek Stupa, Sarnath", source: "unsplash", photographer: "Braj Kishor", unsplashSlug: "99fJbRG7e4U" },
  { file: "route-prayagraj.jpg", caption: "Crowds at the Triveni Sangam, Prayagraj", source: "unsplash", photographer: "Palak Pitroda", unsplashSlug: "BgXBhOE49sU" },
  { file: "route-ayodhya.jpg", caption: "Temple complex with reflecting water", source: "unsplash", photographer: "Shivam Tiwari", unsplashSlug: "yRzcLVJTxUw" },
  { file: "vehicle-sedan-2.jpg", caption: "Sedan taxi in central Varanasi — illustrative", source: "generated" },
  { file: "vehicle-suv-2.jpg", caption: "SUV / MUV tourist vehicle at the ghats — illustrative", source: "generated" },
  { file: "vehicle-tempo-2.jpg", caption: "Tempo traveller for group trips — illustrative", source: "generated" },
  { file: "vehicle-luggage-2.jpg", caption: "Luggage-ready airport transfer vehicle — illustrative", source: "generated" },
  { file: "band-river.jpg", caption: "Rowing boats at the riverbank", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "OPWM488DfeQ" },
  { file: "package-local.jpg", caption: "Boats near ghat buildings in daylight", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "Iu06T6z2vRE" },
  { file: "package-sarnath-2.jpg", caption: "Sarnath day trip — illustrative", source: "generated" },
  { file: "package-circuit-2.jpg", caption: "Spiritual circuit — illustrative", source: "generated" },
  { file: "operator-detail.jpg", caption: "Brass filter coffee maker", source: "unsplash", photographer: "Ayyappan Mk", unsplashSlug: "g-zMHMFV79c" },
  { file: "story-1-2.jpg", caption: "Dawn over the Varanasi ghats — illustrative", source: "generated" },
  { file: "story-1.jpg", caption: "Priests at the fire ceremony", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "05DurkzaUsg" },
  { file: "story-2-2.jpg", caption: "Lane approaching the Kashi Vishwanath corridor — illustrative", source: "generated" },
  { file: "story-3-2.jpg", caption: "Evening Ganga aarti at Dashashwamedh — illustrative", source: "generated" },
  { file: "route-sightseeing.jpg", caption: "Boats moored beside ghat steps", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "dz42hvd61BE" },
  { file: "route-temple-tour.jpg", caption: "Priests holding torches at evening aarti", source: "unsplash", photographer: "Unsplash contributor", unsplashSlug: "Rn_GBQ7d5HE" },
];
