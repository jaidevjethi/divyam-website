import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { VehicleSelector } from "@/components/sections/VehicleSelector";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Varanasi Local Sightseeing Taxi | Temple & Ghat Tours",
  description:
    "Half-day and full-day private taxi for Varanasi sightseeing: Kashi Vishwanath, ghats, Sarnath add-on. Driver waits at each stop. Call or WhatsApp.",
  path: "/local-sightseeing",
});

const plans = [
  { name: "Half-day local", duration: "~4–5 hours", coverage: "Kashi Vishwanath area, Dashashwamedh Ghat, drive-past of Manikarnika Ghat", fit: "Sedan or SUV", note: "Best for short-stay travellers, post-arrival evening visits." },
  { name: "Full-day local", duration: "~8–10 hours", coverage: "Kashi Vishwanath, ghats walk, BHU & New Vishwanath Temple, Sankat Mochan, evening aarti at Dashashwamedh", fit: "SUV/MUV for families, sedan for couples", note: "The complete first-visit plan: temples in the morning, ghat aarti to close." },
  { name: "Temple-focused circuit", duration: "~6–8 hours", coverage: "Kashi Vishwanath, Sankat Mochan, Durga Temple, Tulsi Manas, BHU New Vishwanath", fit: "SUV/MUV recommended", note: "For pilgrims focusing on darshan over photography." },
  { name: "Ghat-focused walk plan", duration: "~5–7 hours", coverage: "Assi Ghat sunrise, ghat walk to Dashashwamedh, optional boat ride, evening aarti", fit: "Sedan or SUV", note: "Driver coordinates drop and pickup at multiple ghats so you walk without rushing." },
  { name: "Sarnath add-on", duration: "+3 hours added to local plan", coverage: "Dhamek Stupa, Mulagandha Kuti Vihara, Sarnath Museum (Fri closed)", fit: "Sedan or SUV", note: "Combine with a half-day plan for a complete Varanasi + Sarnath day." },
  { name: "Sunrise / evening plan", duration: "~3–4 hours", coverage: "Sunrise on the Ganga or evening Ganga aarti at Dashashwamedh", fit: "Sedan", note: "Pickup before dawn or in the evening, for travellers who only need one signature experience." },
];

export default function LocalSightseeingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Local sightseeing taxi"
        title={
          <>
            Varanasi sightseeing taxi,{" "}
            <em className="editorial">planned at your pace.</em>
          </>
        }
        lede="Half-day or full-day plans across Varanasi's temples, ghats and BHU campus, with optional Sarnath add-ons. Driver coordinates drop-and-walk points and waits at each stop."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Local Sightseeing", path: "/local-sightseeing" },
        ]}
        ctaContext="sightseeing"
        image={{
          src: "/images/package-local.webp",
          alt: "Boats and ghat steps along the Ganga",
        }}
        aside={
          <AnswerBlock
            answer="Sightseeing planned as transport: drop points, a waiting driver, and realistic timings."
            items={[
              { label: "Half-day", value: "~4–5 hours" },
              { label: "Full-day", value: "~8–10 hours" },
              { label: "Add-on", value: "Sarnath (+3 hours)" },
              { label: "Vehicles", value: "Sedan · SUV/MUV" },
            ]}
          />
        }
      />

      <section className="section-tight border-t border-line bg-cream-deep">
        <Container width="wide">
          <p className="label-caps mb-10">Plans by trip shape</p>
          <ul className="border-t border-line-strong">
            {plans.map((p) => (
              <li key={p.name} className="grid grid-cols-12 gap-x-6 lg:gap-x-12 py-8 lg:py-10 border-b border-line">
                <div className="col-span-12 lg:col-span-4">
                  <h3 className="font-serif text-[clamp(1.4rem,2vw,2rem)] text-ink leading-[1.1]">{p.name}</h3>
                  <p className="mt-2 label-caps">{p.duration}</p>
                </div>
                <div className="col-span-12 lg:col-span-5 mt-3 lg:mt-0">
                  <p className="text-[15.5px] text-ink-soft leading-[1.65]">{p.coverage}</p>
                </div>
                <div className="col-span-12 lg:col-span-3 mt-3 lg:mt-0">
                  <p className="text-[13px] text-mist mb-1">Vehicle: <span className="text-ink">{p.fit}</span></p>
                  <p className="font-serif italic text-[14.5px] text-ink-soft leading-[1.5]">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <VehicleSelector />

      <section className="section-tight bg-cream-deep">
        <Container width="wide">
          <div className="grid-12">
            <div className="lg:col-span-4">
              <p className="label-caps">Sightseeing FAQs</p>
              <h2 className="mt-5 text-display-md text-ink">
                Pacing, vehicles, <em className="editorial">what to combine.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={faqs.sightseeing} defaultOpenFirst />
            </div>
          </div>
        </Container>
      </section>

      <ContactConversion
        heading="Want a sightseeing plan that fits your group?"
        body="Tell us how many travellers, ages, and how long you have in Varanasi. We'll suggest a comfortable order and the right vehicle."
        context="sightseeing"
      />

      <JsonLd
        data={serviceSchema({
          name: "Varanasi local sightseeing taxi",
          description: "Half-day and full-day private taxi for Varanasi temples, ghats and Sarnath add-on.",
          serviceType: "Local sightseeing taxi",
          url: "/local-sightseeing",
        })}
      />
      <JsonLd data={faqPageSchema(faqs.sightseeing)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Local Sightseeing", path: "/local-sightseeing" },
        ])}
      />
    </>
  );
}
