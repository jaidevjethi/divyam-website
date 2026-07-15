/**
 * Customer testimonials.
 *
 * REAL Google reviews quoted verbatim from the operator's Google Business
 * Profile (Divyam tours & travels, Varanasi — 4.9★, 257 reviews):
 * https://maps.app.goo.gl/JhDkK6k2rEgv7b1U8
 *
 * Keep quotes verbatim (including informal grammar) — light trimming with
 * an ellipsis is fine, rewording is not.
 */

export type Testimonial = {
  quote: string;
  attribution: string;       // reviewer name as shown on Google
  tripType:
    | "airport-transfer"
    | "local-sightseeing"
    | "outstation"
    | "spiritual-circuit"
    | "international-tourist"
    | "package";
  source?: "google" | "whatsapp" | "direct";
  /** Approximate date of the review */
  receivedAt?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mr Mukesh takes personal care of the guests. Vehicles are fairly clean and drivers are very courteous. My 80 yr old parents did 6 day tour of Kashi, Prayagraj and Ayodhya with them and Mr Mukesh and the driver Mr Inderjeet ensured that the complete journey was conducted very professionally. Highly recommended travel agency.",
    attribution: "DV Nautiyal",
    tripType: "spiritual-circuit",
    source: "google",
    receivedAt: "2025-11-15",
  },
  {
    quote:
      "I recently booked a drop to the airport with Divyam Tour and Travels, and the experience was flawless. Our driver, Mukesh, was exceptional. He arrived exactly on time (actually a few minutes early!) which took all the stress out of our trip…",
    attribution: "Kartikay Singh",
    tripType: "airport-transfer",
    source: "google",
    receivedAt: "2025-12-15",
  },
  {
    quote:
      "Amazing service at a low cost. The owner is very polite. He arranged the car for outstation travel in just one call and driver reached my location within 15 minutes. The car was also in excellent condition. He ensured we reached the destination in time, while keeping safety in mind.",
    attribution: "Arpitaa Tripathi",
    tripType: "outstation",
    source: "google",
    receivedAt: "2025-11-15",
  },
  {
    quote:
      "Absolutely amazing experience. Mukesh took care of us like a family member. I had travelled with my mother who is 80 years old and without Mukesh we wouldn't have managed it so well…",
    attribution: "Vijay Kadam",
    tripType: "local-sightseeing",
    source: "google",
    receivedAt: "2025-12-15",
  },
  {
    quote:
      "Mukesh was referred by my sister in law. He took me and my mom for a wonderful trip to Kashi, Prayagraj and Ayodhya. Very nice and genuine human being. Thank you Mukesh.",
    attribution: "Sreejith As",
    tripType: "spiritual-circuit",
    source: "google",
    receivedAt: "2025-10-15",
  },
  {
    quote:
      "One of the best travel agency in Varanasi, Mr. Mukesh is an amazing person and he ensures that you get the best experience. Must contact them before visiting Varanasi.",
    attribution: "Haroon Ziaee",
    tripType: "international-tourist",
    source: "google",
    receivedAt: "2024-07-01",
  },
];

export const hasTestimonials = testimonials.length > 0;
