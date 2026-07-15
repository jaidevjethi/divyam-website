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

export const metadata: Metadata = buildMetadata({
  title: "Private Taxi & Tour Service in Varanasi",
  description:
    "Trusted local taxi service in Varanasi for airport pickup, temple visits, sightseeing and outstation spiritual routes. Book direct by call or WhatsApp.",
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
        src="/images/band-river.jpg"
        alt="Rowing boats moored at the riverbank, early morning"
        caption="A familiar driver knows which ghat stays calm at sunrise."
      />
      <WhyChooseUs />
      <InternationalTravelers />
      <VisualStory />
      <PackageSpotlight />
      <Testimonials />
      <FAQTeaser />
      <ContactConversion
        heading="Plan your Varanasi trip with a local you can call."
        accent="a local you can call"
        body="Phone or WhatsApp reaches the same coordinator. Most replies happen within minutes — not an auto-reply, not a chatbot."
        tone="dark"
      />
    </>
  );
}
