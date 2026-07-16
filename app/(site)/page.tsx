import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { FromTheOperator } from "@/components/sections/FromTheOperator";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { PopularRoutes } from "@/components/sections/PopularRoutes";
import { VehicleSelector } from "@/components/sections/VehicleSelector";
import { EditorialBand } from "@/components/sections/EditorialBand";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { VisualStory } from "@/components/sections/VisualStory";
import { PackageSpotlight } from "@/components/sections/PackageSpotlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQTeaser } from "@/components/sections/FAQTeaser";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { InternationalTravelers } from "@/components/sections/InternationalTravelers";
import { JourneyLine } from "@/components/art/JourneyLine";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { faqs, HOME_TEASER_COUNT } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Private Taxi & Tour Service in Varanasi",
  description:
    "Local taxi & cab service in Varanasi — airport pickup, temple darshan, sightseeing, outstation routes. Hindi & English support. Book direct on WhatsApp.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FromTheOperator />
      <ServiceOverview />
      <JourneyLine className="w-full h-10 sm:h-14 text-terracotta" />
      <PopularRoutes />
      {/* Soft seam: parchment -> ivory */}
      <div aria-hidden className="h-24 bg-gradient-to-b from-cream-deep to-cream" />
      <VehicleSelector />
      <EditorialBand
        src="/images/band-river.webp"
        alt="Rowing boats moored at the riverbank, early morning"
        caption="A familiar driver knows which ghat stays calm at sunrise."
      />
      <WhyChooseUs />
      <InternationalTravelers />
      {/* Soft seam: parchment -> espresso (into the dark story band) */}
      <div aria-hidden className="h-28 bg-gradient-to-b from-cream-deep to-walnut" />
      <VisualStory />
      {/* Soft seam: espresso -> ivory */}
      <div aria-hidden className="h-28 bg-gradient-to-b from-walnut to-cream" />
      <PackageSpotlight />
      <Testimonials />
      <FAQTeaser />
      <ContactConversion
        heading="Plan your Varanasi trip with a local you can call."
        accent="a local you can call"
        body="Phone or WhatsApp reaches the same coordinator. Most replies happen within minutes — not an auto-reply, not a chatbot."
        tone="dark"
      />

      {/* Schema mirrors exactly the questions the FAQ teaser renders on-page */}
      <JsonLd data={faqPageSchema(faqs.general.slice(0, HOME_TEASER_COUNT))} />
    </>
  );
}
