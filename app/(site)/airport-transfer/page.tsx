import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Varanasi Airport Taxi — Babatpur Pickup & Drop",
  description:
    "Private taxi from Varanasi Airport (Lal Bahadur Shastri / VNS) to your hotel, ghats or Kashi Vishwanath. Driver tracks flight, waits with name board.",
  path: "/airport-transfer",
});

const pickupSteps = [
  {
    n: "01",
    h: "Share flight details",
    b: "On WhatsApp, with your flight number and rough arrival time. The driver tracks the flight's actual status.",
  },
  {
    n: "02",
    h: "Driver waits at terminal exit",
    b: "With your name on a board, where the arriving crowd thins out. You see your name; no scanning faces.",
  },
  {
    n: "03",
    h: "Luggage to vehicle",
    b: "Driver helps with bags. The vehicle is parked close to the exit, not in distant overflow lots.",
  },
  {
    n: "04",
    h: "Hotel or ghat drop",
    b: "Direct drop to your accommodation. For narrow-lane hotels, the closest motorable point is coordinated in advance.",
  },
];

const drops = [
  {
    name: "Airport → hotel",
    body: "Hotels in Cantonment, Lanka, BHU area or the old-city lanes near the ghats — the driver coordinates the right drop point depending on lane access and the time of your arrival.",
  },
  {
    name: "Airport → Kashi Vishwanath area",
    body: "Drop near the temple corridor or your stay in the temple-area lanes. We confirm the nearest motorable point and the short walk to your accommodation.",
  },
  {
    name: "Airport → ghats",
    body: "Direct drop near Assi Ghat, Dashashwamedh, or another ghat depending on your hotel or arrival timing — useful when you're arriving for the evening aarti.",
  },
];

export default function AirportTransferPage() {
  return (
    <>
      <PageHeader
        eyebrow="Highest-demand service"
        title={
          <>
            Varanasi airport taxi — a{" "}
            <em className="editorial">calm arrival</em> after a long flight.
          </>
        }
        lede="Pre-arranged private taxi between Lal Bahadur Shastri Airport at Babatpur and your stay in Varanasi. Driver tracks your flight, waits at the terminal exit with a name board, helps with luggage."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Airport Transfer", path: "/airport-transfer" },
        ]}
        ctaContext="airport"
        image={{
          src: "/images/service-airport.jpg",
          alt: "Aircraft at the gate, Lal Bahadur Shastri Airport (Babatpur)",
        }}
        aside={
          <AnswerBlock
            answer="Direct private taxi between Varanasi Airport (VNS, Babatpur) and the city. Fixed arrangement, name-board pickup."
            items={[
              { label: "Airport", value: "VNS · Lal Bahadur Shastri" },
              { label: "Location", value: "Babatpur" },
              { label: "Distance to city", value: "~22 km" },
              { label: "Drive time", value: "~45–60 min" },
            ]}
          />
        }
      />

      {/* How the pickup works — editorial numbered list */}
      <section className="section border-t border-line">
        <Container width="wide">
          <div className="max-w-2xl mb-14">
            <p className="label-caps">How the pickup works</p>
            <h2 className="mt-5 text-display-md text-ink">
              From terminal exit to your hotel,{" "}
              <em className="editorial">without negotiation.</em>
            </h2>
          </div>
          <ol className="border-t border-line">
            {pickupSteps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-12 gap-x-6 lg:gap-x-12 items-baseline py-8 border-b border-line"
              >
                <span className="col-span-2 lg:col-span-1 editorial-number">
                  {s.n}
                </span>
                <h3 className="col-span-10 lg:col-span-4 font-serif text-[clamp(1.35rem,2vw,1.85rem)] text-ink leading-[1.1]">
                  {s.h}
                </h3>
                <p className="col-span-12 lg:col-span-6 lg:col-start-7 mt-3 lg:mt-0 text-[16.5px] text-ink leading-[1.65]">
                  {s.b}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Drop scenarios — two-column marginalia */}
      <section className="section bg-cream-deep">
        <Container width="wide">
          <div className="max-w-2xl mb-14">
            <p className="label-caps">Common drops</p>
            <h2 className="mt-5 text-display-md text-ink">
              Where Varanasi travellers{" "}
              <em className="editorial">actually go.</em>
            </h2>
          </div>
          <ul className="border-t border-line-strong">
            {drops.map((d) => (
              <li
                key={d.name}
                className="grid grid-cols-12 gap-x-6 lg:gap-x-12 py-9 lg:py-12 border-b border-line"
              >
                <div className="col-span-12 lg:col-span-4">
                  <h3 className="font-serif text-[clamp(1.4rem,2vw,1.85rem)] text-ink leading-[1.1]">
                    {d.name}
                  </h3>
                </div>
                <p className="col-span-12 lg:col-span-7 lg:col-start-6 mt-3 lg:mt-0 text-[16.5px] text-ink leading-[1.65]">
                  {d.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section">
        <Container width="wide">
          <div className="grid-12">
            <div className="lg:col-span-4">
              <p className="label-caps">Pickup FAQs</p>
              <h2 className="mt-5 text-display-md text-ink">
                What travellers ask{" "}
                <em className="editorial">before flying in.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={faqs.airport} defaultOpenFirst />
            </div>
          </div>
        </Container>
      </section>

      <ContactConversion
        heading="Landing in Varanasi soon?"
        accent="Varanasi"
        body="Share your flight details on WhatsApp. The driver tracks arrival and waits with a name board — late-night and early-morning pickups are routine."
        context="airport"
      />

      <JsonLd
        data={serviceSchema({
          name: "Varanasi airport taxi (Babatpur)",
          description:
            "Private airport transfer between Lal Bahadur Shastri Airport (Babatpur, VNS) and Varanasi city.",
          serviceType: "Airport transfer",
          url: "/airport-transfer",
        })}
      />
      <JsonLd data={faqPageSchema(faqs.airport)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Airport Transfer", path: "/airport-transfer" },
        ])}
      />
    </>
  );
}
