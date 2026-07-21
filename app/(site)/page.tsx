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
  title: "Divyam Tours Varanasi | Taxi, Airport Pickup, Day Tours",
  description:
    "Local taxi & cab service in Varanasi: airport pickup, temple darshan, sightseeing, outstation routes. Hindi & English support. Book direct on WhatsApp.",
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
      <VehicleSelector />
      <EditorialBand
        src="/images/band-river.webp"
        alt="Rowing boats moored at the riverbank, early morning"
        caption="A familiar driver knows which ghat stays calm at sunrise."
      />
      <WhyChooseUs />
      <InternationalTravelers />
      {/* The dark story band meets its neighbours on a clean edge. A fade
          between cream-deep and walnut is impossible to do well: both are
          low-chroma, so the midpoint is always a grey haze that fights the
          warm palette. The terracotta CTA band works the same way. */}
      <VisualStory />
      <PackageSpotlight />
      <Testimonials />
      <FAQTeaser />
      <ContactConversion
        heading="Plan your Varanasi trip with a local you can call."
        accent="a local you can call"
        body="Phone or WhatsApp reaches the same coordinator. Most replies happen within minutes, from a person and not a chatbot."
        tone="dark"
      />

      {/* Schema mirrors exactly the questions the FAQ teaser renders on-page */}
      <JsonLd data={faqPageSchema(faqs.general.slice(0, HOME_TEASER_COUNT))} />
    </>
  );
}
