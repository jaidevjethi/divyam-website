import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { routes } from "@/content/routes";

export const metadata: Metadata = buildMetadata({
  title: "Varanasi Taxi Routes | Sarnath, Prayagraj, Ayodhya, Airport",
  description:
    "Route-specific taxi pages from Varanasi: Sarnath, Prayagraj, Ayodhya, airport transfer. Distance, duration, vehicle fit, and direct booking.",
  path: "/routes",
});

export default function RoutesHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Route-led booking"
        title={
          <>
            Taxi routes from Varanasi:{" "}
            <em className="editorial">distance, duration, vehicle fit.</em>
          </>
        }
        lede="Each route page answers the practical questions before you call: how long the drive is, which vehicle suits your group, and what travellers typically combine the trip with."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Routes", path: "/routes" },
        ]}
      />

      <section className="pb-20 sm:pb-28">
        <Container width="wide">
          
          <div className="mb-12">
            <h3 className="font-serif text-2xl text-ink mb-2">Local & Airport Transfers</h3>
            <p className="text-ink-soft">Short trips within and around Varanasi city limits.</p>
          </div>
          
          <div className="border-t border-line-strong mb-16">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10" staggerDelay={0.06}>
              {routes.filter(r => ["varanasi-airport-to-city-taxi", "varanasi-local-temple-tour", "varanasi-full-day-sightseeing", "varanasi-to-sarnath-taxi"].includes(r.slug)).map((route) => {
                const destination = route.to.startsWith("Varanasi") ? route.from : route.to;
                const context = route.quickFacts.tripTypes[0];
                return (
                  <StaggerItem key={route.slug}>
                    <Link
                      href={`/routes/${route.slug}`}
                      className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-line hover:border-terracotta/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    >
                      <div className="relative aspect-[16/9] w-full bg-cream-deep overflow-hidden">
                        <Image
                          src={route.image}
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
                          <span className="text-ink font-medium">{route.quickFacts.distance.replace("~", "")}</span>
                          <span className="text-mist/40">·</span>
                          <span className="text-ink font-medium">{route.quickFacts.duration.replace("~", "")}</span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          <div className="mb-12 pt-8">
            <h3 className="font-serif text-2xl text-ink mb-2">Outstation & Pilgrimage Routes</h3>
            <p className="text-ink-soft">Long-distance highway travel requiring comfortable vehicles.</p>
          </div>

          <div className="border-t border-line-strong">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10" staggerDelay={0.06}>
              {routes.filter(r => !["varanasi-airport-to-city-taxi", "varanasi-local-temple-tour", "varanasi-full-day-sightseeing", "varanasi-to-sarnath-taxi"].includes(r.slug)).map((route) => {
                const destination = route.to.startsWith("Varanasi") ? route.from : route.to;
                const context = route.quickFacts.tripTypes[0];
                return (
                  <StaggerItem key={route.slug}>
                    <Link
                      href={`/routes/${route.slug}`}
                      className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-line hover:border-terracotta/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    >
                      <div className="relative aspect-[16/9] w-full bg-cream-deep overflow-hidden">
                        <Image
                          src={route.image}
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
                          <span className="text-ink font-medium">{route.quickFacts.distance.replace("~", "")}</span>
                          <span className="text-mist/40">·</span>
                          <span className="text-ink font-medium">{route.quickFacts.duration.replace("~", "")}</span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

        </Container>
      </section>

      <ContactConversion
        heading="Not sure which route fits your trip?"
        body="Tell us where you'd like to go and how many travellers. We share the right combination of vehicle, route and timing back on WhatsApp."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Routes", path: "/routes" },
        ])}
      />
    </>
  );
}
