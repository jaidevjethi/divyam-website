/**
 * Route data — drives the route page template and routes hub.
 * Distances/durations are typical and reviewed; confirm with operator before launch.
 */

export type RouteFAQ = { q: string; a: string };

export type RouteData = {
  slug: string;                       // URL slug
  from: string;
  to: string;
  h1: string;                         // exact H1 used on the page
  title: string;                      // SEO title
  description: string;                // meta description (action-led, ≤155 chars)
  /** 1–2 sentence direct answer at top of page (AEO) */
  answer: string;
  /** Structured AEO block */
  quickFacts: {
    distance: string;                 // e.g. "~10 km"
    duration: string;                 // e.g. "~25–40 min"
    tripTypes: string[];              // one-way, round-trip, same-day return…
    suitableVehicles: string[];       // vehicle category names
    bestFor: string[];                // traveler scenarios
  };
  /** Long-form supporting copy paragraphs */
  intro: string[];
  /** Practical planning notes */
  planningNotes: string[];
  /** Nearby attractions / stop extensions */
  nearby: { name: string; note: string }[];
  faqs: RouteFAQ[];
  /** Hero/thumbnail image (path under /public) */
  image: string;
  /** Short trip-type chips (e.g. "Family-friendly", "International tourists") */
  tags: string[];
};

export const routes: RouteData[] = [
  {
    slug: "varanasi-airport-to-city-taxi",
    from: "Varanasi Airport (Babatpur)",
    to: "Varanasi city",
    h1: "Varanasi Airport to City Taxi",
    title: "Varanasi Airport to City Taxi | Divyam Tours",
    description:
      "Private taxi from Lal Bahadur Shastri Airport (Babatpur) to Varanasi city, ghats and hotels. Call or WhatsApp to confirm a clean vehicle and waiting driver.",
    answer:
      "Direct private taxi between Lal Bahadur Shastri Airport (Babatpur) and Varanasi city — hotels near the cantonment, the ghats, or the Kashi Vishwanath area. Driver waits with a name board and helps with luggage.",
    quickFacts: {
      distance: "~22 km from airport to city centre",
      duration: "~45–60 min depending on time of day",
      tripTypes: ["One-way pickup", "One-way drop", "Round-trip airport transfer"],
      suitableVehicles: ["Sedan", "SUV / MUV", "Tempo traveller (groups)"],
      bestFor: [
        "International tourists arriving in Varanasi",
        "Families with elderly travellers",
        "Pilgrims needing direct drop near temple-area hotels",
      ],
    },
    intro: [
      "Lal Bahadur Shastri Airport is at Babatpur, about 22 km from central Varanasi and roughly 30 km from Sarnath. After a long flight the last thing a visitor needs is bargaining with a stranger outside the terminal — this is a fixed-arrangement private taxi with a waiting driver.",
      "Common drops include hotels near the Cantonment, properties near Assi or Dashashwamedh Ghat, and stays in the Kashi Vishwanath corridor. If your hotel is in a narrow lane the driver will coordinate a sensible drop-off point and help with luggage.",
    ],
    planningNotes: [
      "Share your flight number on WhatsApp — the driver tracks arrival and adjusts pickup time for delays.",
      "Plan ~10–15 minutes of buffer after landing for baggage and walking out of the terminal.",
      "Late-night and early-morning arrivals are routine; please confirm the time when booking.",
      "Sedan is fine for two adults with two suitcases. Pick SUV/MUV if you have a family of four or extra luggage.",
    ],
    nearby: [
      { name: "Sarnath", note: "Easy add-on from the airport — ~30 km, ~45 min." },
      { name: "Kashi Vishwanath area", note: "Most hotels are 25–35 min from the airport." },
      { name: "Assi Ghat", note: "Common drop for travellers planning sunrise on the Ganga." },
    ],
    faqs: [
      {
        q: "Can you wait if my flight is delayed?",
        a: "Yes. Share the flight number on WhatsApp and the driver tracks the status. No extra cost for normal delays.",
      },
      {
        q: "Is the airport open for late-night arrivals?",
        a: "Most international and night flights are routine. Please confirm timing when booking so a driver is on standby.",
      },
      {
        q: "Will the driver help with luggage?",
        a: "Yes — luggage handling at the terminal exit and at the hotel is part of the service.",
      },
      {
        q: "Which vehicle should I pick?",
        a: "Sedan for 2 adults with light bags, SUV/MUV for families or extra luggage, tempo traveller for groups of 6+.",
      },
      {
        q: "How much does a taxi from Varanasi airport cost?",
        a: "The fare depends on your drop point and vehicle. Message us on WhatsApp with your hotel or area — we confirm the exact fare before the trip, and the amount agreed is the amount you pay. Tolls and parking, where applicable, are listed upfront.",
      },
    ],
    image: "/images/route-airport-2.webp",
    tags: ["International tourists", "Senior comfort", "Same-day"],
  },
  {
    slug: "varanasi-to-sarnath-taxi",
    from: "Varanasi",
    to: "Sarnath",
    h1: "Varanasi to Sarnath Taxi",
    title: "Varanasi to Sarnath Taxi | Same-day Buddhist Circuit",
    description:
      "Private taxi from Varanasi to Sarnath — Dhamek Stupa, Mulagandha Kuti Vihara, Sarnath Museum. Half-day or combined with local sightseeing. Call or WhatsApp.",
    answer:
      "Sarnath is ~10 km from central Varanasi — a short, same-day private taxi trip. Most visitors do it as a half-day plan, or combine it with a Varanasi local sightseeing day.",
    quickFacts: {
      distance: "~10 km from Varanasi city centre",
      duration: "~25–40 min one-way",
      tripTypes: ["Half-day", "Same-day return", "Add-on to local sightseeing"],
      suitableVehicles: ["Sedan", "SUV / MUV"],
      bestFor: [
        "Buddhist pilgrimage visitors",
        "First-time tourists doing a Varanasi + Sarnath day",
        "Families with elderly travellers wanting a comfortable round-trip",
      ],
    },
    intro: [
      "Sarnath is where the Buddha gave his first sermon — Dhamek Stupa, Mulagandha Kuti Vihara, the Sarnath Museum and the Ashoka Pillar relics. It's a short drive from Varanasi and works well as a half-day trip.",
      "Many travellers combine Sarnath with their airport arrival or evening Varanasi sightseeing. We help you plan the order so it fits one comfortable day rather than two rushed half-days.",
    ],
    planningNotes: [
      "Mornings are quieter at the stupa and museum. Plan to leave Varanasi by 8–9 am.",
      "Sarnath Museum is closed on Fridays — confirm the day if the museum matters to your visit.",
      "A half-day round-trip is enough for most visitors. Allow a full day if you also want Chaukhandi Stupa or a long museum visit.",
      "Comfortable footwear is sensible — there is some walking inside the deer park complex.",
    ],
    nearby: [
      { name: "Chaukhandi Stupa", note: "5 min from main Sarnath site — a brief stop." },
      { name: "Sarnath Museum", note: "Houses the original Lion Capital. Closed Fridays." },
      { name: "Varanasi local sightseeing", note: "Pairs well with ghats and Kashi Vishwanath in the same day." },
    ],
    faqs: [
      {
        q: "Can I do Varanasi and Sarnath in one day?",
        a: "Yes. A typical plan is Sarnath in the morning and Varanasi temples / evening ghats afterwards.",
      },
      {
        q: "Is Sarnath good for elderly travellers?",
        a: "Yes — distances are short and the deer park has paved walkways. Pick an SUV/MUV for easier seating.",
      },
      {
        q: "Will the driver wait at each stop?",
        a: "Yes. The driver stays with the vehicle while you visit each site at your own pace.",
      },
      {
        q: "How long should I plan at Sarnath?",
        a: "Two to three hours covers Dhamek Stupa, Mulagandha Kuti Vihara and the museum at a comfortable pace.",
      },
    ],
    image: "/images/route-sarnath.webp",
    tags: ["Buddhist circuit", "Half-day", "Family-friendly"],
  },
  {
    slug: "varanasi-to-prayagraj-taxi",
    from: "Varanasi",
    to: "Prayagraj",
    h1: "Varanasi to Prayagraj Taxi",
    title: "Varanasi to Prayagraj Taxi | Triveni Sangam Trip",
    description:
      "Private taxi from Varanasi to Prayagraj — Triveni Sangam, Akshayavat, Anand Bhavan. One-way or same-day round trip. Call or WhatsApp to confirm.",
    answer:
      "Prayagraj is ~125 km from Varanasi by road — a popular pilgrimage and heritage day trip covering Triveni Sangam (the confluence of the Ganga, Yamuna and the mythical Saraswati) and the city's Mughal and colonial landmarks.",
    quickFacts: {
      distance: "~125 km",
      duration: "~3–3.5 hours one-way",
      tripTypes: ["Same-day round trip", "One-way drop", "Two-day with overnight stay"],
      suitableVehicles: ["Sedan", "SUV / MUV", "Tempo traveller for groups"],
      bestFor: [
        "Pilgrims doing Sangam darshan",
        "Travellers extending Varanasi with a Triveni Sangam day",
        "Families wanting a comfortable same-day return",
      ],
    },
    intro: [
      "Prayagraj — historically Allahabad — is the seat of the Sangam, where the Ganga, Yamuna and the unseen Saraswati meet. Boat rides to the Sangam, Akshayavat at the Patalpuri temple, Anand Bhavan and the Khusrau Bagh are the typical stops.",
      "By road it's a comfortable 3 to 3.5 hour drive each way. Many visitors do this as a single long day; others prefer an overnight to slow down at the Sangam and visit Bharadwaj Ashram or the museum.",
    ],
    planningNotes: [
      "Leave early — around 6 am for a same-day round trip — so you have unhurried time at the Sangam.",
      "Boat rides at the Sangam are arranged on the riverbank. The driver helps you find a fair-priced boatman.",
      "Pick SUV/MUV if you have elderly travellers — the 3-hour stretch is more comfortable.",
      "During Magh Mela and Kumbh, traffic and timing change significantly — please ask when planning.",
    ],
    nearby: [
      { name: "Vindhyachal", note: "Possible to combine if extending an overnight." },
      { name: "Bharadwaj Ashram", note: "Quiet detour close to the Sangam." },
      { name: "Anand Bhavan", note: "Nehru family museum — half-hour stop." },
    ],
    faqs: [
      {
        q: "Can I do Varanasi to Prayagraj as a same-day trip?",
        a: "Yes. Most travellers leave by 6 am, spend 4–5 hours at Sangam and key sites, and return by evening.",
      },
      {
        q: "Is one-way drop available?",
        a: "Yes — if you are continuing onwards from Prayagraj (Lucknow, Delhi, Chitrakoot), a one-way drop works.",
      },
      {
        q: "Do you arrange the boat at Sangam?",
        a: "We don't run the boats, but the driver helps you locate a fair-priced boatman at the ghat.",
      },
      {
        q: "Is the road comfortable?",
        a: "Yes — it's a regular highway route. An SUV/MUV is more comfortable for elderly passengers or groups of four.",
      },
    ],
    image: "/images/route-prayagraj.webp",
    tags: ["Sangam darshan", "Day-trip", "Senior comfort"],
  },
  {
    slug: "varanasi-to-ayodhya-taxi",
    from: "Varanasi",
    to: "Ayodhya",
    h1: "Varanasi to Ayodhya Taxi",
    title: "Varanasi to Ayodhya Taxi | Ram Mandir Pilgrimage",
    description:
      "Private taxi from Varanasi to Ayodhya — Ram Janmabhoomi, Hanuman Garhi, Saryu Ghat. One-day or two-day plan with comfortable vehicles.",
    answer:
      "Ayodhya is ~200 km from Varanasi by road — a major pilgrimage destination centred on Ram Janmabhoomi, Hanuman Garhi and the Saryu river ghats. Most visitors do this as a long single day or a comfortable two-day plan.",
    quickFacts: {
      distance: "~200 km",
      duration: "~5–6 hours one-way",
      tripTypes: ["Long same-day round trip", "Two-day with overnight", "One-way drop"],
      suitableVehicles: ["SUV / MUV", "Tempo traveller for groups"],
      bestFor: [
        "Ram Mandir pilgrimage visitors",
        "Families on a multi-stop spiritual circuit",
        "Groups doing Varanasi + Ayodhya together",
      ],
    },
    intro: [
      "Ayodhya draws huge pilgrim traffic to the new Ram Mandir, Hanuman Garhi, Kanak Bhawan, and the Saryu Ghat for an evening aarti. From Varanasi by road it's around 200 km — long enough that an overnight is far more comfortable than a same-day rush.",
      "We arrange the trip around darshan timings and your hotel's location in Ayodhya so the day is paced rather than hurried.",
    ],
    planningNotes: [
      "If doing same-day, leave Varanasi by 5–6 am to comfortably fit darshan and return.",
      "A two-day plan is far more relaxed — overnight in Ayodhya, complete darshan in the morning, return next day.",
      "SUV/MUV is recommended for the 5–6 hour drive. For groups of 6+, a tempo traveller is better.",
      "Darshan timings at Ram Janmabhoomi shift periodically — we confirm before your trip.",
    ],
    nearby: [
      { name: "Saryu Ghat aarti", note: "Evening aarti is a key experience if staying overnight." },
      { name: "Kanak Bhawan", note: "Close to Ram Mandir — easy to combine." },
      { name: "Hanuman Garhi", note: "On the same darshan circuit." },
    ],
    faqs: [
      {
        q: "Is one day enough for Ayodhya from Varanasi?",
        a: "It's possible but long. A two-day plan with an overnight stay is far more comfortable for families.",
      },
      {
        q: "Which vehicle should I pick?",
        a: "SUV/MUV for 2–4 travellers; tempo traveller for 6+ or families with seniors and extra luggage.",
      },
      {
        q: "Can you arrange hotel and darshan?",
        a: "We arrange the transport. For darshan timing and hotel booking, we share local recommendations.",
      },
      {
        q: "Is the route comfortable?",
        a: "Mostly highway with some stretches that are slower. An SUV/MUV with a familiar driver makes the drive much easier.",
      },
    ],
    image: "/images/route-ayodhya.webp",
    tags: ["Ram Mandir", "Overnight suggested", "Pilgrim families"],
  },
  {
    slug: "varanasi-to-bodhgaya-taxi",
    from: "Varanasi",
    to: "Bodh Gaya",
    h1: "Varanasi to Bodh Gaya Private Taxi",
    title: "Varanasi to Bodh Gaya Taxi | Buddhist Pilgrimage Route",
    description:
      "Private taxi from Varanasi to Bodh Gaya — Mahabodhi Temple, ~280 km via NH2/NH19. Comfortable SUV or Innova. Call or WhatsApp for availability.",
    answer:
      "Bodh Gaya is ~280 km from Varanasi — a 6-hour highway drive via NH2/NH19 crossing into Bihar. Most visitors travel for Mahabodhi Temple darshan, and an overnight stay makes the trip far more comfortable than a rushed same-day return.",
    quickFacts: {
      distance: "~280 km",
      duration: "~6 hours one-way",
      tripTypes: ["Two-day with overnight", "One-way drop", "Long same-day return"],
      suitableVehicles: ["SUV / MUV", "Innova Crysta", "Tempo traveller for groups"],
      bestFor: [
        "Buddhist pilgrims visiting Mahabodhi Temple",
        "Spiritual circuit travellers covering Varanasi + Sarnath + Bodh Gaya",
        "Families wanting a comfortable highway journey with stops",
      ],
    },
    intro: [
      "Bodh Gaya — the place where Siddhartha Gautama attained enlightenment under the Bodhi Tree — is the most important Buddhist pilgrimage site in the world. The Mahabodhi Temple complex, the Great Buddha Statue and the monasteries built by Thailand, Japan, Tibet and other nations are the main draws.",
      "From Varanasi the route follows NH2/NH19 through Mughal Sarai and Sasaram, crossing the UP-Bihar border near Mohania. The road is mostly well-maintained national highway. A lunch stop near Sasaram (known for Sher Shah Suri's tomb) breaks the drive naturally into two comfortable halves.",
    ],
    planningNotes: [
      "Leave Varanasi early — by 5–6 am — if you want to reach Bodh Gaya by late morning for an afternoon temple visit.",
      "An overnight plan is strongly recommended. The temple is best experienced at dawn and dusk, and the monasteries need a separate half-day.",
      "Innova Crysta or a comfortable SUV is the right vehicle — 6 hours on the highway demands good suspension and AC.",
      "The UP-Bihar border crossing near Mohania sometimes has truck queues; the driver knows the timing and routing.",
      "Highway tolls are paid separately at the plazas — the driver lists them upfront so nothing is a surprise.",
    ],
    nearby: [
      { name: "Sarnath", note: "Combine with Sarnath before leaving Varanasi for a complete Buddhist circuit." },
      { name: "Sasaram", note: "Sher Shah Suri's tomb — a natural lunch-stop midway, ~3 hours from Varanasi." },
      { name: "Rajgir", note: "~80 km from Bodh Gaya — add a day for Nalanda and Rajgir if time permits." },
    ],
    faqs: [
      {
        q: "Can Varanasi and Bodh Gaya be done in one day?",
        a: "Technically possible but not recommended — it means 12+ hours of driving and rushed darshan. An overnight in Bodh Gaya is far better.",
      },
      {
        q: "What are the toll costs on this route?",
        a: "Tolls along the NH2/NH19 highway are paid at plazas during the drive and listed upfront when your fare is confirmed on WhatsApp.",
      },
      {
        q: "Is the UP-Bihar border crossing an issue?",
        a: "Not usually for passenger vehicles. Occasionally there are slow stretches with truck traffic near Mohania — the driver is familiar with the timing.",
      },
      {
        q: "Which vehicle is best for this distance?",
        a: "Innova Crysta or a well-maintained SUV. Six hours on the highway is tiring in a sedan, especially with elderly travellers or children.",
      },
    ],
    image: "/images/route-bodhgaya.webp",
    tags: ["Buddhist circuit", "Overnight suggested", "Highway route"],
  },
  {
    slug: "varanasi-to-vindhyachal-taxi",
    from: "Varanasi",
    to: "Vindhyachal",
    h1: "Varanasi to Vindhyachal Private Taxi",
    title: "Varanasi to Vindhyachal Taxi | Vindhyavasini Temple Trip",
    description:
      "Private taxi from Varanasi to Vindhyachal — Vindhyavasini Devi, Ashtabhuja Temple, ~80 km. Same-day return or combine with Prayagraj. Call or WhatsApp.",
    answer:
      "Vindhyachal is ~80 km from Varanasi — about 2 hours by road. It's one of the most important Shakti Peeths, centred on Vindhyavasini Devi Temple, and works well as a comfortable same-day pilgrimage trip.",
    quickFacts: {
      distance: "~80 km",
      duration: "~2 hours one-way",
      tripTypes: ["Same-day round trip", "One-way drop", "Combined with Prayagraj"],
      suitableVehicles: ["Sedan", "SUV / MUV"],
      bestFor: [
        "Hindu pilgrims visiting Vindhyavasini Devi",
        "Navratri visitors needing reliable transport during peak rush",
        "Families combining Vindhyachal with a Prayagraj Sangam trip",
      ],
    },
    intro: [
      "Vindhyachal is a Shakti Peeth on the banks of the Ganga, home to the Vindhyavasini Devi Temple — one of the most revered Devi temples in eastern UP. The three-temple circuit of Vindhyavasini, Ashtabhuja and Kali Khoh completes the traditional darshan.",
      "From Varanasi the drive is about 80 km via Mirzapur. The road passes through Chunar (known for its fort) and is a straightforward two-hour drive in normal traffic. During Navratri the town gets extremely crowded — advance vehicle booking is essential.",
    ],
    planningNotes: [
      "Leave by 6–7 am to reach before the mid-morning temple rush, especially during Navratri.",
      "The three-temple circuit (Vindhyavasini, Ashtabhuja, Kali Khoh) takes 3–4 hours at a comfortable pace.",
      "A sedan is perfectly fine for this distance. Pick an SUV if travelling with elderly family or a group of 4+.",
      "Combining Vindhyachal with Prayagraj is a popular two-day plan — Vindhyachal is roughly midway between Varanasi and Prayagraj.",
    ],
    nearby: [
      { name: "Chunar Fort", note: "Historic fort along the route — a 30-minute detour if interested." },
      { name: "Prayagraj (Sangam)", note: "~70 km further from Vindhyachal. Combine for a two-day spiritual circuit." },
      { name: "Kali Khoh Temple", note: "Part of the Vindhyachal three-temple darshan circuit." },
    ],
    faqs: [
      {
        q: "When is the best time to visit Vindhyachal?",
        a: "Year-round, but Chaitra and Sharad Navratri draw the largest crowds. If visiting during Navratri, book transport early — roads and parking fill up fast.",
      },
      {
        q: "Can I combine Vindhyachal with Prayagraj?",
        a: "Yes — Vindhyachal is roughly midway. A common plan is Vindhyachal on day one, continue to Prayagraj for Sangam on day two, and return to Varanasi.",
      },
      {
        q: "What are the temple darshan timings?",
        a: "Vindhyavasini Temple opens around 5 am and closes by 10 pm. Peak aarti is at morning and evening. Arrive early to avoid long queues.",
      },
      {
        q: "Is the road safe for night travel?",
        a: "We recommend daytime travel on this route. The highway is fine but rural stretches between Mirzapur and Vindhyachal are better driven in daylight.",
      },
    ],
    image: "/images/route-vindhyachal.webp",
    tags: ["Shakti Peeth", "Same-day", "Navratri pilgrimage"],
  },
  {
    slug: "varanasi-local-temple-tour",
    from: "Varanasi",
    to: "Varanasi Temples",
    h1: "Varanasi Temple Tour by Private Taxi",
    title: "Varanasi Temple Tour by Private Taxi | Full-Day Darshan",
    description:
      "Private taxi for Varanasi temple darshan — Kashi Vishwanath, Sankat Mochan, Durga Temple, Tulsi Manas, BHU. Elder-friendly route with parking coordination.",
    answer:
      "A full-day private taxi covering Varanasi's major temples — Kashi Vishwanath, Sankat Mochan, Durga Temple, Tulsi Manas Mandir and the New Vishwanath Temple at BHU. The driver knows where to park and which sequence avoids backtracking.",
    quickFacts: {
      distance: "~25–40 km within Varanasi",
      duration: "~8–10 hours (full day)",
      tripTypes: ["Full-day temple circuit", "Half-day focused darshan", "Elder-paced schedule"],
      suitableVehicles: ["Sedan", "SUV / MUV"],
      bestFor: [
        "Pilgrims doing a complete temple darshan of Varanasi",
        "First-time visitors wanting a structured temple itinerary",
        "Elderly travellers needing vehicle-to-gate coordination",
      ],
    },
    intro: [
      "Varanasi has hundreds of temples, but a practical one-day darshan covers the five most important ones: Kashi Vishwanath (the jyotirlinga), Sankat Mochan Hanuman Temple, Durga Temple (Durga Kund), Tulsi Manas Mandir, and the New Vishwanath Temple inside BHU campus.",
      "The challenge isn't distance — it's parking, lane access and sequence. Old city temples like Kashi Vishwanath sit in narrow lanes where vehicles can't enter. The driver drops you at the closest motorable point, waits, and picks you up after darshan. We plan the route so you move south-to-north (or reverse) without doubling back through traffic.",
    ],
    planningNotes: [
      "Start early — 6 am if possible — to reach Kashi Vishwanath before the main queue builds. Morning darshan is quieter.",
      "Kashi Vishwanath requires walking through the corridor from the nearest vehicle drop point (~10–15 min walk). Leave heavy bags in the vehicle.",
      "Durga Temple and Tulsi Manas Mandir are next to each other near Durga Kund — combine them in one stop.",
      "BHU's New Vishwanath Temple is campus-entry controlled. The driver drops you at the gate; campus is walkable and shaded.",
      "For elderly travellers: we pace the schedule with breaks for chai and rest. The driver stays close to minimise walking distances.",
    ],
    nearby: [
      { name: "Dashashwamedh Ghat", note: "Evening Ganga aarti — a natural end to a temple day." },
      { name: "BHU campus", note: "Bharat Kala Bhavan museum is inside BHU, near the New Vishwanath Temple." },
      { name: "Assi Ghat", note: "Quiet morning ghat — good starting or ending point." },
    ],
    faqs: [
      {
        q: "What's the best temple visit sequence?",
        a: "We typically recommend: Kashi Vishwanath early morning → Sankat Mochan → Durga Temple + Tulsi Manas (combined stop) → BHU New Vishwanath → evening aarti at Dashashwamedh. This avoids criss-crossing the city.",
      },
      {
        q: "Is parking available near old city temples?",
        a: "Not right at the temples. The driver drops you at the nearest motorable point (Godowlia or the corridor entry) and waits nearby. Expect 10–15 minutes of walking for Kashi Vishwanath.",
      },
      {
        q: "Is this route suitable for elderly travellers?",
        a: "Yes — that's a key reason to have a private taxi. We pace the schedule, keep walking distances short, and the driver assists at each stop. SUV/MUV recommended for easier seating.",
      },
      {
        q: "Can I add Sarnath to a temple day?",
        a: "Possible but very long. A better plan is temple darshan on one day and Sarnath on a separate morning.",
      },
    ],
    image: "/images/route-temple-tour.webp",
    tags: ["Temple darshan", "Full-day", "Elder-friendly"],
  },
  {
    slug: "varanasi-full-day-sightseeing",
    from: "Varanasi",
    to: "Varanasi Sightseeing",
    h1: "Full Day Varanasi Sightseeing by Private Taxi",
    title: "Full Day Varanasi Sightseeing Taxi | Ghats, Sarnath, Ramnagar Fort",
    description:
      "Full-day Varanasi sightseeing by private taxi — ghats, Sarnath, BHU, Ramnagar Fort. Sunrise boat coordination, evening aarti. Call or WhatsApp.",
    answer:
      "A full-day sightseeing taxi covering Varanasi's major landmarks — the ghats, Sarnath's Buddhist sites, BHU campus, Ramnagar Fort, and coordination with a sunrise boat ride and evening Ganga aarti.",
    quickFacts: {
      distance: "~40–60 km across Varanasi and Sarnath",
      duration: "~8–12 hours (full day)",
      tripTypes: ["Full-day sightseeing", "Half-day flexible plan", "Multi-day city exploration"],
      suitableVehicles: ["Sedan", "SUV / MUV", "Innova for families"],
      bestFor: [
        "Tourists covering Varanasi's major attractions in one day",
        "Families wanting a paced sightseeing plan with vehicle comfort",
        "International visitors on a structured itinerary",
      ],
    },
    intro: [
      "A full day of Varanasi sightseeing typically covers the ghat waterfront, Sarnath (10 km north), BHU campus, and Ramnagar Fort across the river. Most travellers also want a sunrise boat ride on the Ganga and the evening aarti at Dashashwamedh Ghat — the taxi plan works around both.",
      "The driver knows the city's timing rhythms: when traffic is light near the ghats, when Sarnath's museum opens, and how long to allow for Ramnagar Fort before heading back for the evening aarti. This isn't a fixed-route bus — stops are adjusted to your group's pace and interests.",
    ],
    planningNotes: [
      "Best start time is 5:30–6 am — the driver takes you to the boat ghat for sunrise, then picks you up afterwards for the rest of the day.",
      "Sarnath is best visited before noon when it's less crowded. Museum closes on Fridays.",
      "Ramnagar Fort is across the river via the Malviya Bridge — allow 45 minutes for the fort and the Saras Bahar museum inside.",
      "Innova is ideal for families of 4–5 with luggage or shopping bags. Sedan works for couples or solo travellers.",
      "For evening aarti, the driver drops you within walking distance of Dashashwamedh by 6 pm (winter) or 6:30 pm (summer).",
    ],
    nearby: [
      { name: "Sarnath", note: "Included in the standard plan — Dhamek Stupa, museum, deer park." },
      { name: "Ramnagar Fort", note: "Across the Ganga — historical fort and museum. ~30 min from central Varanasi." },
      { name: "Dashashwamedh Ghat", note: "Evening Ganga aarti is the traditional end to a full sightseeing day." },
    ],
    faqs: [
      {
        q: "What's the best time to start the sightseeing day?",
        a: "5:30–6 am for the sunrise boat ride. The driver drops you at the boat ghat, waits, and picks you up afterwards. The rest of the day flows from there.",
      },
      {
        q: "Is Sarnath included in the full-day plan?",
        a: "Yes — Sarnath is about 10 km from central Varanasi and fits naturally into the morning half of the itinerary.",
      },
      {
        q: "How do you coordinate the evening aarti?",
        a: "The driver times the last stop so you reach Dashashwamedh Ghat area by 6–6:30 pm. You walk to the ghat for the aarti; the driver waits at the nearest vehicle point.",
      },
      {
        q: "Can I customise the stops?",
        a: "Absolutely. This is a private taxi — skip Ramnagar Fort, add more ghats, spend longer at Sarnath. Tell the driver your priorities and the plan adjusts.",
      },
    ],
    image: "/images/route-sightseeing.webp",
    tags: ["Full-day", "Tourist circuit", "International visitors"],
  },
];

export function getRoute(slug: string): RouteData | undefined {
  return routes.find((r) => r.slug === slug);
}
