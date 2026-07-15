import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { imagePresets } from "@/lib/image";

const services = [
  {
    n: "01",
    name: "Airport transfer",
    tag: "Highest demand",
    body: "Babatpur to your hotel, the ghats, or the Kashi Vishwanath corridor. Driver waits with a name board, tracks your flight, helps with luggage at the terminal and at the lane.",
    href: "/airport-transfer",
    image: "/images/service-airport.jpg",
    alt: "Aircraft at the gate, Lal Bahadur Shastri Airport",
  },
  {
    n: "02",
    name: "Local sightseeing",
    body: "Half-day and full-day plans across temples, ghats, BHU and Sankat Mochan, with optional Sarnath add-on. Driver coordinates the closest motorable drop-off for each stop.",
    href: "/local-sightseeing",
    image: "/images/service-sightseeing.jpg",
    alt: "Boats moored near the ghats at midday",
  },
  {
    n: "03",
    name: "Outstation routes",
    body: "Prayagraj for the Sangam, Ayodhya for Ram Mandir, Bodhgaya for the Buddhist circuit, Vindhyachal for Devi darshan. One-way, round-trip and multi-day plans.",
    href: "/outstation-taxi",
    image: "/images/service-outstation.jpg",
    alt: "Boat silhouette at sunset on the Ganges",
  },
  {
    n: "04",
    name: "Tour packages & guides",
    body: "Curated 1- to 5-day plans with optional local guides for temple-area orientation. Customisable to group size, pace and dates — not rigid catalogue packages.",
    href: "/tour-packages",
    image: "/images/service-packages.jpg",
    alt: "Group of boats on the Ganga, late morning",
  },
];

export function ServiceOverview() {
  return (
    <section className="section">
      <Container width="wide">
        <ScrollReveal>
          <div className="grid-12 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <p className="label-caps">What we run</p>
              <h2 className="mt-5 text-display-md text-ink">
                Services built around how tourists{" "}
                <em className="editorial">actually move</em> in Varanasi.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="pull-quote text-[17px] text-ink-soft leading-[1.6] max-w-md">
                Each service is one phone call and one WhatsApp thread away. No
                account creation, no multi-step checkout — the friction we
                remove is the reason tourists use us.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="border-t border-line-strong" staggerDelay={0.08}>
          {services.map((s) => (
            <StaggerItem key={s.n}>
              <Link
                href={s.href}
                className="group relative grid grid-cols-12 gap-x-6 lg:gap-x-8 items-center py-12 lg:py-16 border-b border-line hover:bg-orange-50/30 transition-colors overflow-hidden"
              >

                {/* Mobile: show image inline */}
                <div className="col-span-10 lg:hidden mb-6 relative">
                  <span className="absolute -top-10 -left-4 text-[120px] font-bold text-orange-50/60 leading-none z-0 pointer-events-none select-none">
                    {s.n}
                  </span>
                  <div className="img-wrap relative aspect-[16/9] w-full rounded-2xl shadow-sm overflow-hidden z-10">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 1024px) 85vw, 200px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="col-span-10 lg:col-span-4 relative z-10">
                  <span className="hidden lg:block absolute -top-12 -left-8 text-[140px] font-bold text-orange-50/60 leading-none z-0 pointer-events-none select-none">
                    {s.n}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-serif text-[clamp(1.5rem,2.2vw,2.25rem)] text-ink leading-[1.05]">
                      {s.name}
                    </h3>
                    {s.tag && (
                      <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase text-terracotta font-medium">
                        <span className="size-1 rounded-full bg-terracotta" />
                        {s.tag}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5 mt-4 lg:mt-0 flex flex-col justify-between gap-5 relative z-10">
                  <p className="text-[16px] text-ink-soft leading-[1.65]">
                    {s.body}
                  </p>
                  <p className="inline-flex items-center gap-2 text-[13.5px] text-ink font-semibold group-hover:text-terracotta transition-colors">
                    <span className="border-b-2 border-transparent group-hover:border-terracotta/30 pb-0.5 transition-colors">
                      See {s.name.toLowerCase()}
                    </span>
                    <ArrowUpRight className="size-4" aria-hidden strokeWidth={2} />
                  </p>
                </div>

                {/* Desktop: larger thumbnail */}
                <div className="hidden lg:block lg:col-span-3 justify-self-end w-full relative z-10">
                  <div className="img-wrap relative w-full aspect-[16/9] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes={imagePresets.thumbnail.sizes}
                      className="object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
