/**
 * JSON-LD schema builders.
 * Each builder returns a plain object — embed via <script type="application/ld+json">.
 */

import { business, isPlaceholder } from "@/content/business";
import type { FAQ } from "@/content/faqs";
import type { RouteData } from "@/content/routes";
import type { Package } from "@/content/packages";

function siteUrl(): string {
  if (isPlaceholder(business.url)) return "https://example.com";
  return business.url;
}

function safePhone(): string | undefined {
  return isPlaceholder(business.phone.e164) ? undefined : business.phone.e164;
}

/**
 * Varanasi as a schema City with its historical names and authoritative
 * entity links. Anchoring the alternate names (Banaras, Benares, Kashi)
 * here lets search and answer engines match variant queries to the same
 * place entity without keyword-stuffing the copy.
 */
function varanasiCity() {
  return {
    "@type": "City" as const,
    name: "Varanasi",
    alternateName: ["Banaras", "Benares", "Kashi"],
    sameAs: [
      "https://en.wikipedia.org/wiki/Varanasi",
      "https://www.wikidata.org/wiki/Q79980",
    ],
  };
}

function cityEntity(name: string) {
  return name === "Varanasi" ? varanasiCity() : { "@type": "City" as const, name };
}

export function localBusinessSchema() {
  const phone = safePhone();
  const address = {
    "@type": "PostalAddress" as const,
    streetAddress: isPlaceholder(business.address.street)
      ? undefined
      : business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: isPlaceholder(business.address.postalCode)
      ? undefined
      : business.address.postalCode,
    addressCountry: business.address.country,
  };

  const DAY_NAME: Record<string, string> = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };
  const allWeek = Object.values(DAY_NAME);

  const sameAs = [business.socials.googleBusiness, business.socials.facebook, business.socials.instagram].filter(
    (u) => u && !isPlaceholder(u),
  );

  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${siteUrl()}#business`,
    // Must match the Google Business Profile name exactly for entity matching.
    name: business.gbpName,
    alternateName: [business.shortName, business.legalName],
    description: business.tagline,
    url: siteUrl(),
    ...(phone && { telephone: phone }),
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    image: `${siteUrl()}/opengraph-image`,
    foundingDate: "2015",
    paymentAccepted: "Cash, UPI, Net Banking",
    currenciesAccepted: "INR",
    areaServed: business.serviceArea.map(cityEntity),
    ...(sameAs.length > 0 && { sameAs }),
    founder: {
      "@type": "Person",
      name: business.founder,
      jobTitle: "Founder & trip coordinator",
      knowsLanguage: ["en", "hi"],
    },
    knowsLanguage: ["en", "hi"],
    knowsAbout: [
      "Varanasi airport transfers",
      "Kashi Vishwanath temple visits",
      "Ganga aarti at Dashashwamedh Ghat",
      "Sarnath day trips",
      "Varanasi sightseeing routes",
      "Outstation taxi routes to Prayagraj, Ayodhya and Bodhgaya",
    ],
    // Opening hours are omitted until the operator confirms them.
    ...(business.hours.hoursConfirmed
      ? {
          openingHoursSpecification: business.hours.isOpen247
            ? {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: allWeek,
                opens: "00:00",
                closes: "23:59",
              }
            : business.hours.openingHours.map((h) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: h.days.map((d) => DAY_NAME[d] ?? d),
                opens: h.opens,
                closes: h.closes,
              })),
        }
      : {}),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.serviceType,
    provider: { "@id": `${siteUrl()}#business` },
    areaServed: (args.areaServed ?? business.serviceArea).map(cityEntity),
    url: args.url,
  };
}

export function touristTripSchemaFromRoute(route: RouteData) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: route.h1,
    description: route.answer,
    touristType: route.quickFacts.bestFor,
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "Place", name: route.from },
        { "@type": "Place", name: route.to },
      ],
    },
    provider: { "@id": `${siteUrl()}#business` },
    url: `${siteUrl()}/routes/${route.slug}`,
  };
}

export function touristTripSchemaFromPackage(pkg: Package) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.summary,
    touristType: pkg.idealFor,
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.mainStops.map((stop) => ({
        "@type": "Place",
        name: stop,
      })),
    },
    provider: { "@id": `${siteUrl()}#business` },
    url: `${siteUrl()}/tour-packages#${pkg.slug}`,
  };
}

/**
 * ItemList of TouristAttraction entities for the temple guide.
 * Gives answer engines a structured list of the famous sights the
 * sightseeing page describes in prose.
 */
export function templeAttractionsSchema(
  temples: readonly { name: string; detail: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Famous ancient temples in Varanasi",
    itemListElement: temples.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristAttraction",
        name: t.name,
        description: t.detail,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Varanasi",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
    })),
  };
}

export function faqPageSchema(faqs: readonly FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${siteUrl()}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.shortName,
    alternateName: [business.gbpName, "Divyam Tours Varanasi"],
    url: siteUrl(),
    inLanguage: "en-IN",
    publisher: { "@id": `${siteUrl()}#business` },
  };
}
