import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { JsonLd } from "@/components/seo/JsonLd";
import { routes, type RouteData } from "@/content/routes";
import {
  breadcrumbSchema,
  faqPageSchema,
  touristTripSchemaFromRoute,
} from "@/lib/schema";

type Props = {
  route: RouteData;
};

export function RoutePageTemplate({ route }: Props) {
  const others = routes.filter((r) => r.slug !== route.slug);

  return (
    <>
      <PageHeader
        eyebrow={`${route.from} → ${route.to}`}
        title={
          <>
            {route.h1.split(" Taxi")[0]}{" "}
            <em className="editorial">taxi.</em>
          </>
        }
        lede={route.answer}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Routes", path: "/routes" },
          { name: route.h1, path: `/routes/${route.slug}` },
        ]}
        ctaContext={{ kind: "route", from: route.from, to: route.to }}
        image={{ src: route.image, alt: `${route.from} → ${route.to}` }}
      />

      {/* Quick facts row */}
      <section className="pb-12 sm:pb-16">
        <Container width="wide">
          <div className="border-t border-line-strong pt-8">
            <AnswerBlock
              items={[
                { label: "Distance", value: route.quickFacts.distance },
                { label: "Duration", value: route.quickFacts.duration },
                {
                  label: "Trip types",
                  value: route.quickFacts.tripTypes.join(" · "),
                },
                {
                  label: "Vehicles",
                  value: route.quickFacts.suitableVehicles.join(" · "),
                },
              ]}
            />
            {route.tags && route.tags.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {route.tags.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-[13.5px] text-mist italic">
              Fare confirmed on WhatsApp before the trip — no surprises at the
              vehicle.
            </p>
          </div>
        </Container>
      </section>

      {/* About + planning */}
      <section className="section-tight border-t border-line">
        <Container width="wide">
          <div className="grid-12">
            <div className="lg:col-span-7">
              <p className="label-caps">About this route</p>
              <div className="mt-6 flex flex-col gap-5 text-[17px] text-ink-soft leading-[1.75] max-w-2xl">
                {route.intro.map((p, i) => (
                  <p key={i} className={i === 0 ? "drop-cap" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-14">
                <p className="label-caps mb-6">Planning notes</p>
                <ul className="border-t border-line">
                  {route.planningNotes.map((note, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-12 gap-4 py-5 border-b border-line items-baseline"
                    >
                      <span className="col-span-1 font-serif text-mist text-[15px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="col-span-11 text-[16px] text-ink leading-[1.6]">
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <p className="label-caps mb-5">Nearby &amp; add-ons</p>
                <ul className="space-y-5 border-t border-line pt-6">
                  {route.nearby.map((n) => (
                    <li key={n.name} className="flex gap-4">
                      <MapPin
                        className="size-4 text-terracotta mt-1.5 shrink-0"
                        aria-hidden
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="font-serif text-[18px] text-ink">
                          {n.name}
                        </p>
                        <p className="text-[14.5px] text-ink-soft mt-1 leading-[1.55]">
                          {n.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-line">
                  <p className="label-caps mb-4">Best for</p>
                  <ul className="space-y-2.5">
                    {route.quickFacts.bestFor.map((b) => (
                      <li
                        key={b}
                        className="font-serif italic text-[15.5px] text-ink leading-[1.5]"
                      >
                        — {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="section-tight bg-cream-deep">
        <Container width="wide">
          <div className="grid-12">
            <div className="lg:col-span-4">
              <p className="label-caps">Practical answers</p>
              <h2 className="mt-5 text-display-md text-ink">
                Common questions{" "}
                <em className="editorial">for this route.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={route.faqs} defaultOpenFirst />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-tight bg-cream-deep">
        <Container width="wide">
          <p className="label-caps mb-8 text-center">Other routes from Varanasi</p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.06}>
            {others.slice(0, 3).map((r) => {
              const destination = r.to.startsWith("Varanasi") ? r.from : r.to;
              const context = r.quickFacts.tripTypes[0];
              return (
                <StaggerItem key={r.slug}>
                  <Link
                    href={`/routes/${r.slug}`}
                    className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-line hover:border-terracotta/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                  >
                    <div className="relative aspect-[16/9] w-full bg-cream-deep overflow-hidden">
                      <Image
                        src={r.image}
                        alt={destination}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 lg:p-7 flex flex-col flex-grow">
                      <h3 className="font-serif text-[clamp(1.25rem,2vw,1.4rem)] font-bold text-ink leading-[1.1] group-hover:text-terracotta transition-colors">
                        {destination.replace(" (Babatpur)", "")}
                      </h3>
                      <p className="font-serif italic text-[14.5px] text-ink-soft mt-2 line-clamp-2">
                        {context}
                      </p>
                      <div className="mt-auto pt-5 border-t border-line/50 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[13px] text-mist tracking-wide w-full">
                        <span className="text-ink font-medium">{r.quickFacts.distance.replace("~", "")}</span>
                        <span className="text-mist/40">·</span>
                        <span className="text-ink font-medium">{r.quickFacts.duration.replace("~", "")}</span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <ContactConversion
        heading={`Plan a private taxi to ${route.to.replace("Varanasi city", "Varanasi")}.`}
        accent={route.to.replace("Varanasi city", "Varanasi")}
        body="Call or WhatsApp with your travel date and pickup point. We confirm a vehicle and driver back within minutes."
        context={{ kind: "route", from: route.from, to: route.to }}
      />

      <JsonLd data={touristTripSchemaFromRoute(route)} />
      <JsonLd data={faqPageSchema(route.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Routes", path: "/routes" },
          { name: route.h1, path: `/routes/${route.slug}` },
        ])}
      />
    </>
  );
}
