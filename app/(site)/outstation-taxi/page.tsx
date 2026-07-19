import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { PopularRoutes } from "@/components/sections/PopularRoutes";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Outstation Taxi from Varanasi | Prayagraj, Ayodhya, Bodhgaya",
  description:
    "Private outstation cabs from Varanasi to Prayagraj, Ayodhya, Bodhgaya, Vindhyachal. One-way, round-trip and multi-day spiritual circuits.",
  path: "/outstation-taxi",
});

const tripFormats = [
  { title: "One-way drop", body: "Continuing onwards from a destination (Prayagraj to Lucknow, Bodhgaya to Patna)? A one-way drop avoids paying for return mileage." },
  { title: "Same-day round trip", body: "Possible for Sarnath, Prayagraj, Vindhyachal, Chunar. Best for shorter routes where you don't need an overnight." },
  { title: "Two-day with overnight", body: "Recommended for Ayodhya and Bodhgaya. Far less rushed and easier on elderly travellers." },
  { title: "Multi-day spiritual circuit", body: "Varanasi + Sarnath + Prayagraj + Ayodhya in 3–5 days with one vehicle and one familiar driver throughout." },
];

export default function OutstationTaxiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Outstation cab · Varanasi"
        title={
          <>
            Outstation taxi from Varanasi to{" "}
            <em className="editorial">nearby spiritual circuits.</em>
          </>
        }
        lede="Prayagraj, Ayodhya, Bodhgaya, Vindhyachal, Chunar and Gaya. One-way, round-trip and multi-day routes with vehicles and drivers familiar with the pilgrimage stops along the way."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Outstation Taxi", path: "/outstation-taxi" },
        ]}
        ctaContext="outstation"
        image={{
          src: "/images/service-outstation.webp",
          alt: "Sunset boat ride silhouette on the Ganga",
        }}
        aside={
          <AnswerBlock
            answer="Private outstation cabs from Varanasi for one-way, round-trip and multi-day spiritual travel."
            items={[
              { label: "Common routes", value: "Prayagraj · Ayodhya · Bodhgaya" },
              { label: "Trip types", value: "One-way · Round-trip · Multi-day" },
              { label: "Vehicles", value: "SUV/MUV · Tempo" },
              { label: "Booking", value: "Direct call or WhatsApp" },
            ]}
          />
        }
      />

      <section className="section-tight border-t border-line bg-cream-deep">
        <Container width="wide">
          <p className="label-caps mb-10">Trip formats we run</p>
          <ul className="border-t border-line-strong">
            {tripFormats.map((t, i) => (
              <li key={t.title} className="grid grid-cols-12 gap-x-6 lg:gap-x-12 py-8 lg:py-10 border-b border-line items-baseline">
                <span className="col-span-2 lg:col-span-1 editorial-number">0{i + 1}</span>
                <h3 className="col-span-10 lg:col-span-4 font-serif text-[clamp(1.4rem,2vw,2rem)] text-ink leading-[1.1]">{t.title}</h3>
                <p className="col-span-12 lg:col-span-7 mt-3 lg:mt-0 text-[15.5px] text-ink-soft leading-[1.65]">{t.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <PopularRoutes
        slugs={[
          "varanasi-to-prayagraj-taxi",
          "varanasi-to-ayodhya-taxi",
          "varanasi-to-bodhgaya-taxi",
          "varanasi-to-vindhyachal-taxi",
        ]}
        eyebrow="Outstation routes"
        heading={
          <>
            The outstation trips we run{" "}
            <em className="editorial">most often.</em>
          </>
        }
        sub="Each route page covers the drive time, the right vehicle, and how travellers combine the trip with an overnight or a second destination."
      />

      <section className="section-tight bg-cream-deep">
        <Container width="wide">
          <div className="grid-12">
            <div className="lg:col-span-4">
              <p className="label-caps">Outstation FAQs</p>
              <h2 className="mt-5 text-display-md text-ink">
                Questions before <em className="editorial">a long route.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={faqs.outstation} defaultOpenFirst />
            </div>
          </div>
        </Container>
      </section>

      <ContactConversion
        heading="Plan a multi-stop spiritual route from Varanasi."
        body="Tell us the destinations and rough dates. We share a comfortable order, vehicle fit and indicative timing, back to you on WhatsApp."
        context="outstation"
      />

      <JsonLd
        data={serviceSchema({
          name: "Outstation taxi from Varanasi",
          description: "Private outstation cabs and multi-day spiritual circuit taxis from Varanasi.",
          serviceType: "Outstation taxi",
          url: "/outstation-taxi",
        })}
      />
      <JsonLd data={faqPageSchema(faqs.outstation)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Outstation Taxi", path: "/outstation-taxi" },
        ])}
      />
    </>
  );
}
