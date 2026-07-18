/**
 * Sightseeing depth content: famous temples and food spots in Varanasi.
 *
 * Every factual claim here is widely documented public knowledge about
 * famous institutions. Food spots are independent establishments named as
 * suggestions only; no affiliation is implied and none should be added
 * without the operator's confirmation.
 */

export type Temple = {
  name: string;
  epithet: string;      // short identifying phrase under the name
  detail: string;       // 2-3 sentences of substance, not brochure fluff
  practical: string;    // one practical planning note
};

export type FoodStop = {
  dish: string;
  where: string;        // famous spot(s) or area
  note: string;
};

export const temples: Temple[] = [
  {
    name: "Kashi Vishwanath",
    epithet: "Jyotirlinga of Shiva, heart of Kashi",
    detail:
      "One of the twelve Jyotirlingas and the temple around which the city's spiritual identity is built. The gold that plates the spire was donated by Maharaja Ranjit Singh in 1835, and the new corridor now connects the sanctum directly to Lalita Ghat on the Ganga.",
    practical:
      "Expect queues at darshan hours. Phones, bags and leather items go into lockers before entry, so plan a light visit.",
  },
  {
    name: "Kal Bhairav",
    epithet: "The kotwal of Kashi",
    detail:
      "Tradition holds Kal Bhairav to be the guardian and police chief of the city: pilgrims visit him for permission to stay in Kashi. It is one of the oldest and most atmospheric Shiva shrines in the old city, reached through narrow market lanes.",
    practical:
      "Combine with Kashi Vishwanath; the lanes between them are part of the experience. Mornings are calmer.",
  },
  {
    name: "Sankat Mochan Hanuman",
    epithet: "Founded by Tulsidas",
    detail:
      "Established by the poet-saint Tulsidas in the sixteenth century, this is one of the most loved Hanuman temples in India. The besan laddoo prasad is famous, and the temple's music tradition draws classical performers every April.",
    practical:
      "Tuesdays and Saturdays are the big darshan days and the busiest. Watch your glasses; the monkeys are bold.",
  },
  {
    name: "Durga Kund Mandir",
    epithet: "The red temple by the sacred pond",
    detail:
      "An eighteenth-century temple built by Rani Bhabani of Natore, painted deep ochre red, with a classic North Indian shikhara rising beside the rectangular Durga Kund pond it takes its name from.",
    practical:
      "Sits on the road between the ghats and BHU, so it slots naturally into a temple circuit without a detour.",
  },
  {
    name: "Tulsi Manas Mandir",
    epithet: "Where the Ramcharitmanas lives on the walls",
    detail:
      "A white-marble temple from 1964 built at the spot where tradition places Tulsidas composing the Ramcharitmanas. Verses of the epic are inscribed across its inner walls, making the building itself a readable text.",
    practical:
      "Two minutes from Durga Kund. A quick, calm stop that elderly travellers usually appreciate.",
  },
  {
    name: "New Vishwanath Temple, BHU",
    epithet: "The tallest spire in the region, open to all",
    detail:
      "Built by the Birla family inside the Banaras Hindu University campus and completed in 1966, its shikhara rises about 77 metres. The temple is explicitly open to visitors of every faith and caste, which made it distinctive from the day it opened.",
    practical:
      "The drive through the leafy BHU campus is part of the visit. Easy parking, unhurried darshan, good for families.",
  },
];

export const foodStops: FoodStop[] = [
  {
    dish: "Kachori and jalebi breakfast",
    where: "Ram Bhandar, Thatheri Bazar",
    note: "The classic Banarasi morning: crisp kachori with spiced sabzi, followed by hot jalebi. The old-city institutions have been frying since the nineteenth century.",
  },
  {
    dish: "Tamatar chaat",
    where: "Kashi Chat Bhandar, Godowlia",
    note: "A chaat found only in Banaras: tomatoes mashed on a hot tawa with spices and palak patta crisps, served in a leaf bowl. Go in the evening.",
  },
  {
    dish: "Malai lassi in kulhads",
    where: "Blue Lassi Shop and the old-city lassi houses",
    note: "Thick lassi under a cap of clotted cream, served in disposable clay cups. The famous shops in the lanes near the ghats have run for generations.",
  },
  {
    dish: "Malaiyo",
    where: "Old-city sweet sellers, winter mornings only",
    note: "A saffron milk foam that exists only in the cold months and melts before noon. If you visit November to February, ask the driver to find it at dawn.",
  },
  {
    dish: "Baati chokha",
    where: "Baati Chokha Restaurant, Teliyabagh",
    note: "The rustic eastern-UP plate: fire-roasted wheat baati with mashed spiced aubergine, potato and tomato. A proper sit-down lunch between sightseeing halves.",
  },
  {
    dish: "Banarasi paan",
    where: "Century-old paan shops across the old city",
    note: "The city's famous finish to a meal, folded from magahi betel leaf. Ask for meetha paan if you are new to it.",
  },
];
