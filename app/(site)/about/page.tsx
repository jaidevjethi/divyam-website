import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { EditorialBand } from "@/components/sections/EditorialBand";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { business } from "@/content/business";

export const metadata: Metadata = buildMetadata({
  title: `About ${business.shortName} Varanasi`,
  description:
    "Divyam Tours is a local Varanasi taxi and travel service for pilgrims, tourists, families and international visitors. Direct booking, familiar drivers.",
  path: "/about",
});

const values = [
  { title: "Local-first, not corporate", body: "We answer the phone ourselves and remember your trip. No call-centre handoffs, no scripted responses." },
  { title: "Tourist-focused operations", body: "Most of what we do is help visitors who don't know the city: airport pickups, temple-area drops, route advice. The whole service is shaped by that." },
  { title: "Honest about what we don't do", body: "We're not a hotel booking site, we don't pretend to be certified guides we aren't, and we don't write fake reviews. What we offer, we offer clearly." },
  { title: "Direct WhatsApp coordination", body: "From your first message to the end of your trip, one channel and one familiar coordinator. No tickets or forms." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A local Varanasi operator built around how{" "}
            <em className="editorial">tourists actually travel.</em>
          </>
        }
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        image={{
          src: "/images/operator-chai.webp",
          alt: "Kulhad chai and marigolds on the dashboard, ghats at dawn through the windshield",
        }}
      />

      <section className="pb-14 sm:pb-20">
        <Container width="wide">
          <div className="grid-12">
            <div className="lg:col-span-8 flex flex-col gap-5 text-[17.5px] text-ink-soft leading-[1.75]">
            <p className="drop-cap">
              Varanasi is one of the oldest continuously lived-in cities in
              the world and a major pilgrimage destination for Hindus,
              Buddhists, families on multi-stop spiritual routes, and
              first-time international visitors. The city sees a constant
              flow of travellers who need a trusted local for transport and
              orientation.
            </p>
            <p>
              {business.legalName} runs as a local taxi and tourist transport
              service in and around Varanasi. We coordinate airport pickups
              from Lal Bahadur Shastri Airport at Babatpur, run half-day and
              full-day sightseeing across the temples and ghats, and operate
              outstation cabs to nearby pilgrimage destinations: Sarnath,
              Prayagraj, Ayodhya, Bodhgaya and Vindhyachal.
            </p>
            <p>
              The service is intentionally direct: a phone call or a
              WhatsApp message reaches us, not a call centre. We respond
              with vehicle availability, an indicative fare, and a driver
              we trust for the route. The drivers know the lanes near the
              ghats, the parking points close to Kashi Vishwanath, and the
              quieter morning windows at Sarnath.
            </p>
            </div>
          </div>
        </Container>
      </section>

      <EditorialBand
        src="/images/band-river.webp"
        alt="Boats moored on the Ganga in the early light"
      />

      <section className="section-tight bg-cream-deep">
        <Container width="wide">
          <h2 className="text-display-md text-ink max-w-2xl mb-14">
            What we believe matters in{" "}
            <em className="editorial">tourist transport.</em>
          </h2>
          <ul className="border-t border-line-strong">
            {values.map((v, i) => (
              <li key={v.title} className="grid grid-cols-12 gap-x-6 lg:gap-x-12 py-8 lg:py-10 border-b border-line items-baseline">
                <span className="col-span-2 lg:col-span-1 editorial-number">0{i + 1}</span>
                <h3 className="col-span-10 lg:col-span-4 font-serif text-[clamp(1.4rem,2vw,1.9rem)] text-ink leading-[1.1]">{v.title}</h3>
                <p className="col-span-12 lg:col-span-7 mt-3 lg:mt-0 text-[15.5px] text-ink-soft leading-[1.65]">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactConversion
        heading="Plan your visit with a local you can call directly."
        body="Phone or WhatsApp reaches the same coordinator. Tell us what you need and we'll suggest a pace, a vehicle, and an order that works."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
