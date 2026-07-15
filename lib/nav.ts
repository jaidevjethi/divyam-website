/**
 * Site navigation — single source of truth for header, footer and mobile sheet.
 */

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Taxi Services", href: "/taxi-services" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Vehicles", href: "/fleet" },
  { label: "Routes", href: "/routes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerSections = [
  {
    heading: "Services",
    links: [
      { label: "Taxi Services", href: "/taxi-services" },
      { label: "Airport Transfer", href: "/airport-transfer" },
      { label: "Local Sightseeing", href: "/local-sightseeing" },
      { label: "Outstation Taxi", href: "/outstation-taxi" },
      { label: "Tour Packages", href: "/tour-packages" },
      { label: "Tour Guide", href: "/tour-guide" },
    ],
  },
  {
    heading: "Popular Routes",
    links: [
      { label: "Airport to City Taxi", href: "/routes/varanasi-airport-to-city-taxi" },
      { label: "Varanasi to Sarnath", href: "/routes/varanasi-to-sarnath-taxi" },
      { label: "Varanasi to Prayagraj", href: "/routes/varanasi-to-prayagraj-taxi" },
      { label: "Varanasi to Ayodhya", href: "/routes/varanasi-to-ayodhya-taxi" },
      { label: "All routes", href: "/routes" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Vehicles", href: "/fleet" },
      { label: "FAQs", href: "/faq" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
