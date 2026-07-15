import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { packages } from "@/content/packages";
import { whatsappHref } from "@/lib/cta";
import { imagePresets } from "@/lib/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function PackageSpotlight() {
  const featured = packages.slice(0, 3);

  return (
    <section className="section bg-cream">
      <Container width="wide">
        <ScrollReveal>
          <div className="grid-12 mb-16">
            <div className="lg:col-span-7">
              <p className="label-caps">Sample plans</p>
              <h2 className="mt-5 text-display-md text-ink">
                Starting points,{" "}
                <em className="editorial">not catalogue packages.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 self-end">
              <p className="pull-quote text-[17px] text-ink-soft leading-[1.6] max-w-md">
                We adjust pace, stops and vehicle to the realistic group on
                the trip. The plans below are how most travellers start.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="border-t border-line-strong" staggerDelay={0.12}>
          {featured.map((pkg, i) => (
            <StaggerItem key={pkg.slug}>
              <article className="group relative grid grid-cols-12 gap-y-6 lg:gap-y-0 gap-x-6 lg:gap-x-8 p-8 lg:p-12 border border-line hover:border-terracotta/25 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 mb-8 overflow-hidden bg-cream-deep/20">
                {/* Image — portrait */}
                <div className="col-span-12 lg:col-span-4">
                  <div className="img-wrap relative aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes={imagePresets.packagePortrait.sizes}
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Title + meta column */}
                <div className="col-span-12 lg:col-span-3 flex flex-col justify-start">
                  <p className="label-caps mb-2">
                    No. {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold text-ink leading-[1.1] tracking-[-0.015em]">
                    {pkg.name.split("—")[0].trim()}
                    {pkg.name.includes("—") && (
                      <>
                        <span className="mx-2 text-mist">—</span>
                        <em className="editorial text-terracotta text-[0.85em]">
                          {pkg.name.split("—")[1].trim()}
                        </em>
                      </>
                    )}
                  </h3>
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

                {/* Body + stops + CTA column */}
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <p className="text-[15.5px] text-ink-soft leading-[1.65]">
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
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappHref({ kind: "package", name: pkg.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-deep text-ivory font-medium text-[13.5px] px-5 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-px"
                    >
                      <MessageCircle className="size-4" aria-hidden strokeWidth={2} />
                      Request Custom Quote
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 flex justify-end">
          <Link
            href="/tour-packages"
            className="inline-flex items-center gap-2 text-[14.5px] font-medium text-ink hover:text-terracotta transition-colors"
          >
            <span className="border-b border-current pb-0.5">
              All sample plans
            </span>
            <ArrowUpRight className="size-4" aria-hidden strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
