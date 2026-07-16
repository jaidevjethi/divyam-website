import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { WhatsAppButton } from "@/components/primitives/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { fleet } from "@/content/fleet";
import { isPlaceholder } from "@/content/business";
import { CapacityDiagram } from "@/components/fleet/CapacityDiagram";

export const metadata: Metadata = buildMetadata({
  title: "Vehicles — Sedan, SUV, Tempo Traveller in Varanasi",
  description:
    "Vehicle options for Varanasi tourism — sedan, SUV/MUV, tempo traveller and luggage-friendly airport vehicles. Pick by traveller count and luggage.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vehicles"
        title={
          <>
            Pick a vehicle by{" "}
            <em className="editorial">group size and luggage</em> — not model jargon.
          </>
        }
        lede="Our fleet covers every common Varanasi tourist scenario. The category descriptions below tell you what each vehicle suits; actual models in service can be confirmed on WhatsApp."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Vehicles", path: "/fleet" },
        ]}
        ctaContext="fleet"
        image={{
          src: "/images/vehicle-suv-2.webp",
          alt: "Clean SUV vehicle exterior",
        }}
      />

      <section className="pb-20 sm:pb-28">
        <Container width="wide">
          <div className="border-t border-line-strong">
            {fleet.map((v) => {
              const showExamples = v.examples.some((e) => !isPlaceholder(e));
              return (
                <article
                  key={v.slug}
                  id={v.slug}
                  className="grid grid-cols-12 gap-x-6 lg:gap-x-8 py-12 lg:py-14 border-b border-line"
                >
                  <div className="col-span-12 lg:col-span-4">
                    <div className="img-wrap relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={v.image}
                        alt={v.category}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-4 mt-6 lg:mt-0">
                    <p className="label-caps mb-3">{v.bestFor}</p>
                    <h2 className="font-serif text-[clamp(1.65rem,2.4vw,2.4rem)] text-ink leading-[1.05]">
                      {v.category}
                    </h2>
                    <p className="mt-3 text-[13.5px] text-mist italic">
                      Fare confirmed on WhatsApp before the trip
                    </p>

                    <div className="mt-6">
                      <CapacityDiagram
                        passengers={v.passengers}
                        largeBags={v.largeBags}
                        cabinBags={v.cabinBags}
                        label={v.idealFor}
                      />
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-4 mt-6 lg:mt-0">
                    <p className="label-caps mb-3">Ideal trip types</p>
                    <ul className="space-y-2 text-[15px] text-ink leading-[1.5]">
                      {v.idealTripTypes.map((t) => (
                        <li key={t} className="font-serif italic pl-4 border-l border-marigold">{t}</li>
                      ))}
                    </ul>

                    <p className="mt-5 text-[14.5px] text-ink-soft leading-[1.6]">
                      <span className="text-mist">Route fit · </span>{v.routeSuitability}
                    </p>

                    {showExamples && (
                      <p className="mt-3 text-[13px] text-ink-soft">
                        <span className="text-mist">Typical models · </span>
                        {v.examples.filter((e) => !isPlaceholder(e)).join(", ")}
                      </p>
                    )}

                    <div className="mt-6">
                      <WhatsAppButton
                        context="fleet"
                        size="sm"
                        variant="secondary"
                        label={`Ask about ${v.category}`}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactConversion
        heading="Not sure which vehicle fits your group?"
        body="Tell us how many travellers and how much luggage. We share the right category and confirm availability for your dates."
        context="fleet"
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: fleet.map((v, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Vehicle",
              name: v.category,
              description: v.bestFor,
              vehicleSeatingCapacity: v.seating,
            },
          })),
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Vehicles", path: "/fleet" },
        ])}
      />
    </>
  );
}
