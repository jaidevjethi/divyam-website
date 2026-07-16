import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { WhatsAppButton } from "@/components/primitives/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { imagePresets } from "@/lib/image";
import {
  breadcrumbSchema,
  faqPageSchema,
  touristTripSchemaFromPackage,
} from "@/lib/schema";
import { packages } from "@/content/packages";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Varanasi Tour Packages — Spiritual Circuits & Sightseeing",
  description:
    "Customisable Varanasi tour packages — local one-day, Sarnath combo, spiritual circuits, international-tourist plans. With private vehicle and optional guide.",
  path: "/tour-packages",
});

export default function TourPackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curated plans · customisable"
        title={
          <>
            Tour packages — common plans,{" "}
            <em className="editorial">tuned to your group.</em>
          </>
        }
        lede="Use the packages below as a starting point. We adjust the order, pace, vehicle and guide to fit your actual group — pilgrim party, family with seniors, international tourists, or short-stay first-time visitors."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Tour Packages", path: "/tour-packages" },
        ]}
        ctaContext="package"
        image={{
          src: "/images/service-packages.webp",
          alt: "Group of boats on the Ganga, late morning",
        }}
        aside={
          <AnswerBlock
            answer="Packages are starting points — every plan is customised to your group, dates and pace."
            items={[
              { label: "Range", value: "1–5 day plans" },
              { label: "Includes", value: "Vehicle + driver, planning" },
              { label: "Optional", value: "Local guide, hotel coordination" },
              { label: "Booking", value: "WhatsApp confirms in minutes" },
            ]}
          />
        }
      />

      <section className="pb-20 sm:pb-28">
        <Container width="wide">
          <div className="border-t border-line-strong pt-12">
            {packages.map((pkg, i) => (
              <article
                key={pkg.slug}
                id={pkg.slug}
                className="group relative grid grid-cols-12 gap-y-6 lg:gap-y-0 gap-x-6 lg:gap-x-8 p-8 lg:p-12 border border-line hover:border-terracotta/25 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 mb-8 overflow-hidden bg-cream-deep/20"
              >
                <div className="col-span-12 lg:col-span-4">
                  <div className="img-wrap relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes={imagePresets.packagePortrait.sizes}
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-3 mt-6 lg:mt-0 flex flex-col justify-start">
                  <p className="label-caps mb-2">
                    No. {String(i + 1).padStart(2, "0")} · {pkg.idealFor}
                  </p>
                  <h2 className="font-serif text-[clamp(1.7rem,2.6vw,2.5rem)] font-bold text-ink leading-[1.05] tracking-[-0.015em]">
                    {pkg.name.split("—")[0].trim()}
                    {pkg.name.includes("—") && (
                      <>
                        <span className="mx-2 text-mist">—</span>
                        <em className="editorial text-terracotta text-[0.85em]">
                          {pkg.name.split("—")[1].trim()}
                        </em>
                      </>
                    )}
                  </h2>
                  <p className="mt-4 font-sans text-[12px] tracking-[0.16em] uppercase text-mist font-bold">
                    {pkg.duration}
                  </p>
                  <p className="mt-2 text-[13px] text-mist italic">
                    Custom quote on WhatsApp — priced to your group and dates
                  </p>
                  {pkg.tags && pkg.tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {pkg.tags.map((t) => (
                        <li key={t} className="chip">{t}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="col-span-12 lg:col-span-5 mt-6 lg:mt-0">
                  <p className="text-[16px] text-ink-soft leading-[1.65]">
                    {pkg.summary}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {pkg.mainStops.map((stop) => (
                      <li
                        key={stop}
                        className="font-serif italic text-[14.5px] text-ink leading-[1.5] pl-4 border-l border-marigold"
                      >
                        {stop}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[13.5px] text-mist italic">
                    Vehicle fit · {pkg.vehicleFit}
                  </p>
                  <p className="mt-2 text-[13.5px] text-mist italic">
                    {pkg.guideOption}
                  </p>
                  <div className="mt-7">
                    <WhatsAppButton
                      context={{ kind: "package", name: pkg.name }}
                      label="Ask about this package"
                      size="md"
                      variant="secondary"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-tight bg-cream-deep">
        <Container width="wide">
          <div className="grid-12">
            <div className="lg:col-span-4">
              <p className="label-caps">Package FAQs</p>
              <h2 className="mt-5 text-display-md text-ink">
                Customisation, hotels, <em className="editorial">foreign-tourist booking.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={faqs.packages} defaultOpenFirst />
            </div>
          </div>
        </Container>
      </section>

      <ContactConversion
        heading="Want a package tuned to your group?"
        body="Tell us group size, ages, dates, and any must-visit stops. We share an adjusted plan with vehicle and guide options."
        context="package"
      />

      {packages.map((pkg) => (
        <JsonLd key={pkg.slug} data={touristTripSchemaFromPackage(pkg)} />
      ))}
      <JsonLd data={faqPageSchema(faqs.packages)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tour Packages", path: "/tour-packages" },
        ])}
      />
    </>
  );
}
