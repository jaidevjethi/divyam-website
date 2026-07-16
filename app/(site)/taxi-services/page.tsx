import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { VehicleSelector } from "@/components/sections/VehicleSelector";
import { PopularRoutes } from "@/components/sections/PopularRoutes";
import { EditorialBand } from "@/components/sections/EditorialBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { JourneyLine } from "@/components/art/JourneyLine";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Taxi Service in Varanasi — Tourist Cab & Car Rental with Driver",
  description:
    "Private taxi service in Varanasi for tourists — airport pickup, local sightseeing, outstation cabs and group vehicles. Direct call and WhatsApp booking.",
  path: "/taxi-services",
});

const offerings = [
  {
    n: "01",
    name: "Airport transfer",
    body: "Lal Bahadur Shastri Airport (Babatpur) to hotels, ghats, the Kashi Vishwanath corridor. Driver tracks flight, waits with name board, helps with luggage.",
    href: "/airport-transfer",
  },
  {
    n: "02",
    name: "Local taxi & full-day",
    body: "Half-day and full-day plans — temples, ghats, BHU, Sarnath add-ons. Driver waits at each stop while you visit at your pace.",
    href: "/local-sightseeing",
  },
  {
    n: "03",
    name: "Outstation cab",
    body: "Prayagraj, Ayodhya, Bodhgaya, Vindhyachal. One-way, round-trip, multi-day spiritual circuits with familiar drivers.",
    href: "/outstation-taxi",
  },
  {
    n: "04",
    name: "Route-specific bookings",
    body: "Same-day Sarnath, Sangam day-trip, Ram Mandir pilgrimage — see the route page for distance, duration and vehicle fit.",
    href: "/routes",
  },
  {
    n: "05",
    name: "Group vehicle booking",
    body: "Tempo traveller for 7–12 passengers, ideal for family pilgrim parties. Roof carrier for extended luggage.",
    href: "/fleet",
  },
];

const bookingSteps = [
  { n: "1", h: "Tell us the plan", b: "Call or WhatsApp with pickup point, drop, date and rough timing. A flight number helps for airport jobs." },
  { n: "2", h: "Confirm the vehicle", b: "We share vehicle category and an indicative fare. You confirm — done in minutes." },
  { n: "3", h: "Driver details by WhatsApp", b: "Before the trip, the driver's name and number reach you on WhatsApp. For airport pickups, the driver waits with a name board." },
  { n: "4", h: "Travel and pay", b: "Cash or UPI to the driver at the end of the trip. For multi-day or package bookings, we share payment terms upfront." },
];

export default function TaxiServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tourist taxi · Varanasi"
        title={
          <>
            Private taxi service{" "}
            <em className="editorial">built around tourist routes.</em>
          </>
        }
        lede="Airport pickups, temple-area drops, half-day and full-day local plans, outstation cabs to nearby spiritual destinations. One coordinator, familiar drivers, vehicles for every group size."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Taxi Services", path: "/taxi-services" },
        ]}
        image={{
          src: "/images/service-sightseeing.webp",
          alt: "Boats moored near the ghats, mid-morning",
        }}
        aside={
          <AnswerBlock
            items={[
              { label: "Pickup window", value: "Same-day bookings possible" },
              { label: "Coverage", value: "Varanasi · Sarnath · UP circuit" },
              { label: "Vehicles", value: "Sedan · SUV · Tempo" },
              { label: "Booking", value: "Direct call or WhatsApp" },
            ]}
          />
        }
      />

      {/* Editorial offerings list */}
      <section className="section-tight border-t border-line">
        <Container width="wide">
          <p className="label-caps mb-10">What we cover</p>
          <ul className="border-t border-line-strong">
            {offerings.map((o) => (
              <li key={o.n}>
                <Link
                  href={o.href}
                  className="group grid grid-cols-12 gap-x-6 lg:gap-x-8 items-baseline py-8 lg:py-10 border-b border-line hover:bg-cream-deep/50 transition-colors"
                >
                  <span className="col-span-2 lg:col-span-1 editorial-number">{o.n}</span>
                  <h3 className="col-span-10 lg:col-span-4 font-serif text-[clamp(1.4rem,2vw,2rem)] text-ink leading-[1.1] group-hover:text-terracotta transition-colors">
                    {o.name}
                  </h3>
                  <p className="col-span-12 lg:col-span-6 mt-3 lg:mt-0 text-[15.5px] text-ink-soft leading-[1.65]">
                    {o.body}
                  </p>
                  <div className="col-span-12 lg:col-span-1 mt-3 lg:mt-0 lg:justify-self-end">
                    <ArrowUpRight className="size-5 text-mist group-hover:text-terracotta transition-colors" aria-hidden strokeWidth={1.25} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <EditorialBand
        src="/images/band-river.webp"
        alt="Boats at the riverbank, dawn"
      />

      <JourneyLine className="w-full h-10 sm:h-14" />

      {/* Booking process */}
      <section className="section-tight">
        <Container width="wide">
          <div className="grid-12 mb-14">
            <div className="lg:col-span-5">
              <p className="label-caps">How booking works</p>
              <h2 className="mt-5 text-display-md text-ink">
                No forms, no accounts. <em className="editorial">Direct coordination.</em>
              </h2>
              <p className="mt-5 pull-quote text-[16px] text-ink-soft leading-[1.65] max-w-md">
                Most tourists in Varanasi don&rsquo;t want multi-step checkout — they want a clean vehicle and a driver who picks up on time. Booking is intentionally simple.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ol className="border-t border-line">
                {bookingSteps.map((s) => (
                  <li key={s.n} className="grid grid-cols-12 gap-x-6 py-7 border-b border-line items-baseline">
                    <span className="col-span-2 lg:col-span-1 editorial-number">0{s.n}</span>
                    <div className="col-span-10 lg:col-span-11">
                      <h3 className="text-[17px] font-medium text-ink font-sans">{s.h}</h3>
                      <p className="mt-2 text-[15px] text-ink-soft leading-[1.6]">{s.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <VehicleSelector />
      <PopularRoutes />

      <section className="section-tight bg-cream-deep">
        <Container width="wide">
          <div className="grid-12">
            <div className="lg:col-span-4">
              <p className="label-caps">Common questions</p>
              <h2 className="mt-5 text-display-md text-ink">
                Booking, vehicles, <em className="editorial">payment.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={faqs.general} defaultOpenFirst />
            </div>
          </div>
        </Container>
      </section>

      <ContactConversion context="general" />

      <JsonLd
        data={serviceSchema({
          name: "Taxi service in Varanasi",
          description: "Private taxi service for tourists — airport transfer, local sightseeing, outstation routes, group vehicles.",
          serviceType: "Taxi service",
          url: "/taxi-services",
        })}
      />
      <JsonLd data={faqPageSchema(faqs.general)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Taxi Services", path: "/taxi-services" },
        ])}
      />
    </>
  );
}
