/**
 * FAQ blocks — written in real tourist language, not keyword stuffing.
 * Grouped by page so FAQPage schema can be generated per page.
 */

export type FAQ = { q: string; a: string };

type FAQGroups = {
  general: FAQ[];
  airport: FAQ[];
  sightseeing: FAQ[];
  outstation: FAQ[];
  packages: FAQ[];
};

export const faqs: FAQGroups = {
  general: [
    {
      q: "How do I book a taxi with Divyam Tours?",
      a: "Call or message us on WhatsApp with your pickup point, drop, and approximate time. We confirm the vehicle and driver back to you on the same channel — no forms, no account creation.",
    },
    {
      q: "Can I book a taxi for the same day?",
      a: "Yes — same-day bookings are routine, especially for airport pickups and local sightseeing. Confirmation depends on driver availability, which we share within minutes on WhatsApp.",
    },
    {
      q: "Which vehicle is best for a family of four?",
      a: "An SUV/MUV. It seats 4–6 with luggage, is comfortable for elderly travellers, and works equally well for city visits and outstation routes.",
    },
    {
      q: "Can multiple places be covered in one day?",
      a: "Yes — common combinations include Varanasi + Sarnath, or a full-day local plan with temples, ghats and the evening aarti. We share an order that fits one comfortable day.",
    },
    {
      q: "Are tour guides available?",
      a: "Yes — local guides for temple-area orientation, Sarnath, and ghat walks can be arranged. Please ask when booking so we coordinate the right guide for your interests.",
    },
    {
      q: "How do I pay?",
      a: "Cash or UPI to the driver are standard. For multi-day or package bookings we confirm payment terms over WhatsApp before the trip.",
    },
  ],
  airport: [
    {
      q: "Will the driver wait if my flight is delayed?",
      a: "Yes. Share the flight number on WhatsApp and the driver tracks arrival status. Normal delays do not cost extra.",
    },
    {
      q: "Will the driver help with luggage?",
      a: "Yes — luggage handling at the terminal exit and at the hotel is part of the airport transfer service.",
    },
    {
      q: "Can I be picked up late at night?",
      a: "Yes — late-night and early-morning arrivals are routine. Please confirm the time when booking so a driver is on standby.",
    },
    {
      q: "Can the driver drop me near Kashi Vishwanath or the ghats?",
      a: "Yes — drops near the temple corridor, Assi Ghat, Dashashwamedh and most hotels in the old city are routine. Final drop point depends on lane access; the driver will coordinate.",
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
      a: "Yes — Varanasi, Sarnath, Prayagraj, Ayodhya and Bodhgaya can be combined into 2–5 day circuits with one comfortable vehicle and a familiar driver throughout.",
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
      a: "We share the inclusions when confirming the trip — typically the fare covers the vehicle and driver; tolls, parking and state taxes are extra and shared upfront.",
    },
  ],
  packages: [
    {
      q: "Are packages fixed or customisable?",
      a: "Customisable. The packages on the site are common plans — we adjust stops, pace and vehicle to your group.",
    },
    {
      q: "Do you arrange hotels and meals?",
      a: "Our core service is private transport and trip planning. We share trusted hotel recommendations; bookings stay in your hands or we coordinate on request.",
    },
    {
      q: "Can foreign tourists book directly?",
      a: "Yes. WhatsApp works well for international tourists — you can confirm the plan and vehicle before arrival.",
    },
  ],
};
