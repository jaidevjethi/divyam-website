/**
 * FAQ blocks, written in real tourist language, not keyword stuffing.
 * Grouped by page so FAQPage schema can be generated per page.
 */

export type FAQ = { q: string; a: string };

/** Number of general FAQs shown on the homepage (teaser + FAQPage schema). */
export const HOME_TEASER_COUNT = 5;

type FAQGroups = {
  general: FAQ[];
  airport: FAQ[];
  sightseeing: FAQ[];
  outstation: FAQ[];
  packages: FAQ[];
};

export const faqs: FAQGroups = {
  // The first HOME_TEASER_COUNT entries render on the homepage (FAQTeaser +
  // FAQPage schema); keep the highest-intent questions at the top.
  general: [
    {
      q: "How do I book a taxi with Divyam Tours?",
      a: "Call or message us on WhatsApp with your pickup point, drop, and approximate time. We confirm the vehicle and driver back to you on the same channel. No forms, no account creation.",
    },
    {
      q: "Is Uber or Ola available in Varanasi?",
      a: "App cabs operate in Varanasi but coverage is patchy: drivers often cancel airport pickups, late-night availability is unreliable, and the old-city lanes confuse app navigation. Most travellers use a local operator: the fare is agreed before the trip, the driver knows the ghat-area drop points, and the same person stays with you for the whole day.",
    },
    {
      q: "What is the best way to get around Varanasi?",
      a: "The old city and ghats are best on foot because the lanes are too narrow for cars. For everything else, including airport transfer, Sarnath, BHU, Ramnagar and outstation trips to Prayagraj or Ayodhya, a private car with a driver who knows the parking-and-walk points saves the most time.",
    },
    {
      q: "Do your drivers speak English?",
      a: "The coordinator speaks English and Hindi on WhatsApp and phone. Drivers speak Hindi and functional English, enough for timings, stops and directions. For detailed history and rituals, an English-speaking guide can be added.",
    },
    {
      q: "Can I book from outside India before I arrive?",
      a: "Yes. WhatsApp works internationally. Send your dates and flight details before you fly; the vehicle, driver and fare are confirmed in writing on the same thread, so your pickup is arranged before you land.",
    },
    {
      q: "Is Varanasi the same as Banaras and Kashi?",
      a: "Yes. Varanasi, Banaras (also spelled Benares) and Kashi are three names for the same city on the Ganga. Kashi is the ancient name used in scriptures and in Kashi Vishwanath, Banaras is the everyday local name, and Varanasi is the official one. We serve the whole city under all three names.",
    },
    {
      q: "Can I book a taxi for the same day?",
      a: "Yes. Same-day bookings are routine, especially for airport pickups and local sightseeing. Confirmation depends on driver availability, which we share within minutes on WhatsApp.",
    },
    {
      q: "Which vehicle is best for a family of four?",
      a: "An SUV/MUV. It seats 4–6 with luggage, is comfortable for elderly travellers, and works equally well for city visits and outstation routes.",
    },
    {
      q: "Can multiple places be covered in one day?",
      a: "Yes. Common combinations include Varanasi + Sarnath, or a full-day local plan with temples, ghats and the evening aarti. We share an order that fits one comfortable day.",
    },
    {
      q: "Are tour guides available?",
      a: "Yes. Local guides for temple-area orientation, Sarnath, and ghat walks can be arranged. Please ask when booking so we coordinate the right guide for your interests.",
    },
    {
      q: "How do I pay?",
      a: "Cash or UPI to the driver are standard. For multi-day or package bookings we confirm payment terms over WhatsApp before the trip.",
    },
  ],
  airport: [
    {
      q: "How far is Varanasi airport from the city?",
      a: "Lal Bahadur Shastri Airport at Babatpur is about 22 km from central Varanasi. The drive takes 45 to 60 minutes depending on time of day, slightly longer to the old-city ghats. We confirm your pickup point and timing on WhatsApp before you land.",
    },
    {
      q: "Will the driver wait if my flight is delayed?",
      a: "Yes. Share the flight number on WhatsApp and the driver tracks arrival status. Normal delays do not cost extra.",
    },
    {
      q: "Will the driver help with luggage?",
      a: "Yes. Luggage handling at the terminal exit and at the hotel is part of the airport transfer service.",
    },
    {
      q: "Can I be picked up late at night?",
      a: "Yes. Late-night and early-morning arrivals are routine. Please confirm the time when booking so a driver is on standby.",
    },
    {
      q: "Can the driver drop me near Kashi Vishwanath or the ghats?",
      a: "Yes. Drops near the temple corridor, Assi Ghat, Dashashwamedh and most hotels in the old city are routine. Final drop point depends on lane access; the driver will coordinate.",
    },
  ],
  sightseeing: [
    {
      q: "Can Varanasi and Sarnath be done together in one day?",
      a: "Yes. A typical plan is Sarnath in the morning while it's quiet, Varanasi temples and ghats afterwards, ending with the evening aarti.",
    },
    {
      q: "How many hours is a full-day local plan?",
      a: "About 8–10 hours, depending on how long you spend at each site and whether you do the evening aarti.",
    },
    {
      q: "Is sightseeing suitable for elderly travellers?",
      a: "Yes, with the right pacing and an SUV/MUV. The driver helps with shortest-walk drop points and waits at each stop.",
    },
    {
      q: "Do you arrange the Ganga boat ride?",
      a: "We do not run boats, but the driver helps you locate a fair-priced boatman at the ghat. Sunrise and evening boat rides are most popular.",
    },
  ],
  outstation: [
    {
      q: "Can I book a multi-day spiritual circuit?",
      a: "Yes. Varanasi, Sarnath, Prayagraj, Ayodhya and Bodhgaya can be combined into 2–5 day circuits with one comfortable vehicle and a familiar driver throughout.",
    },
    {
      q: "Is one-way drop available?",
      a: "Yes. If you are continuing onwards from a destination (e.g. Prayagraj to Lucknow), a one-way drop works for most major routes.",
    },
    {
      q: "Which vehicle is best for outstation routes?",
      a: "SUV/MUV for 2–4 travellers; tempo traveller for groups of 6+. Sedans are fine for short outstation routes only.",
    },
    {
      q: "Are tolls and parking included?",
      a: "We share the inclusions when confirming the trip. Typically the fare covers the vehicle and driver; tolls, parking and state taxes are extra and shared upfront.",
    },
  ],
  packages: [
    {
      q: "How many days are enough for Varanasi?",
      a: "Two to three days cover the essentials at a comfortable pace: Kashi Vishwanath and the old city, the ghats with the evening Ganga aarti, a sunrise boat ride, and a half-day at Sarnath. Add a day each for Prayagraj, Ayodhya or Bodhgaya trips.",
    },
    {
      q: "Are packages fixed or customisable?",
      a: "Customisable. The packages on the site are common plans, and we adjust stops, pace and vehicle to your group.",
    },
    {
      q: "Do you arrange hotels and meals?",
      a: "Our core service is private transport and trip planning. We share trusted hotel recommendations; bookings stay in your hands or we coordinate on request.",
    },
    {
      q: "Can foreign tourists book directly?",
      a: "Yes. WhatsApp works well for international tourists: you can confirm the plan and vehicle before arrival.",
    },
  ],
};
