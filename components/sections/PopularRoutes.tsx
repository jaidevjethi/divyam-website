import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { routes } from "@/content/routes";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const popularityBadge: Record<string, string> = {
  "varanasi-airport-to-city-taxi": "Most booked",
  "varanasi-to-ayodhya-taxi": "Pilgrim choice",
  "varanasi-to-sarnath-taxi": "Top sightseeing",
};

type Props = {
  /** Show only these route slugs (default: all routes) */
  slugs?: string[];
  eyebrow?: string;
  heading?: React.ReactNode;
  sub?: string;
};

export function PopularRoutes({ slugs, eyebrow, heading, sub }: Props) {
  const shown = slugs ? routes.filter((r) => slugs.includes(r.slug)) : routes;
  // Complete rows beat orphans: sets of 4 lay out 4-up on lg, others 3-up.
  const lgCols = shown.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section className="section bg-cream-deep">
      <Container width="wide">
        <ScrollReveal>
          <div className="grid-12 mb-14 lg:mb-16">
            <div className="lg:col-span-5">
              <p className="label-caps">{eyebrow ?? "Routes index"}</p>
              <h2 className="mt-5 text-display-md text-ink">
                {heading ?? (
                  <>
                    Where travellers go{" "}
                    <em className="editorial">from Varanasi.</em>
                  </>
                )}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="pull-quote text-[17px] text-ink-soft leading-[1.6] max-w-md">
                {sub ??
                  "Each route page covers what matters before you call: distance, comfortable duration, vehicle fit, and what travellers usually combine the trip with."}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className={`grid grid-cols-1 md:grid-cols-2 ${lgCols} gap-6 lg:gap-7 mt-10 lg:mt-12`} staggerDelay={0.06}>
          {shown.map((route) => {
            const destination = route.to.startsWith("Varanasi")
              ? route.from
              : route.to;
            const context = route.quickFacts.tripTypes[0];
            const badge = popularityBadge[route.slug];

            return (
              <StaggerItem key={route.slug}>
                <Link
                  href={`/routes/${route.slug}`}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-line hover:border-terracotta/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Thumbnail Header */}
                  <div className="relative aspect-[16/9] w-full bg-cream-deep overflow-hidden">
                    <Image
                      src={route.image}
                      alt={destination}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {badge && (
                      <span className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase text-white font-bold bg-terracotta px-2.5 py-1 rounded-full shadow-sm z-10">
                        {badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-7 flex flex-col flex-grow">
                    <h3 className="font-serif text-[clamp(1.25rem,2vw,1.4rem)] font-bold text-ink leading-[1.1] group-hover:text-terracotta transition-colors">
                      {destination.replace(" (Babatpur)", "")}
                      {destination.includes("Airport") && (
                        <span className="text-mist text-[0.72em]"> · Babatpur</span>
                      )}
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

        <div className="mt-10 flex justify-end">
          <Link
            href="/routes"
            className="inline-flex items-center gap-2 text-[14.5px] font-medium text-ink hover:text-terracotta transition-colors"
          >
            <span className="border-b border-current pb-0.5">
              All routes from Varanasi
            </span>
            <ArrowUpRight className="size-4" aria-hidden strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
