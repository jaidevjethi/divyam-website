import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fleet } from "@/content/fleet";
import { whatsappHref } from "@/lib/cta";
import { imagePresets } from "@/lib/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CapacityDiagram } from "@/components/fleet/CapacityDiagram";

const subtitle: Record<string, string> = {
  sedan: "Solo or couple",
  "suv-muv": "Family of 4–6",
  "tempo-traveller": "Group of 7–12",
  "luggage-friendly": "Extra luggage",
};

const shortLabel: Record<string, string> = {
  sedan: "Sedan",
  "suv-muv": "SUV / MUV",
  "tempo-traveller": "Tempo traveller",
  "luggage-friendly": "Luggage+",
};

export function VehicleSelector() {
  return (
    <section className="section bg-cream">
      <Container width="wide">
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <p className="label-caps">Vehicles</p>
            <h2 className="mt-5 text-display-md text-ink">
              The right vehicle for your{" "}
              <em className="editorial">group size and luggage.</em>
            </h2>
            <p className="mt-6 pull-quote text-[17px] text-ink-soft leading-[1.6]">
              Pick by traveller count and luggage. We confirm the exact model
              in service when you call.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="border-t border-line-strong" staggerDelay={0.08}>
          {fleet.map((v) => (
            <StaggerItem key={v.slug} className="block">
              <div className="grid grid-cols-12 gap-y-6 lg:gap-y-0 gap-x-6 lg:gap-x-8 items-center py-8 lg:py-10 border-b border-line hover:bg-cream-deep/30 transition-colors">
                {/* Thumbnail */}
                <div className="col-span-4 lg:col-span-3">
                  <div className="img-wrap relative aspect-[4/3] w-full max-w-[200px] overflow-hidden">
                    <Image
                      src={v.image}
                      alt={v.category}
                      fill
                      sizes={imagePresets.vehicle.sizes}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="col-span-8 lg:col-span-3">
                  <p className="label-caps mb-1">{subtitle[v.slug]}</p>
                  <h3 className="font-serif text-[clamp(1.3rem,2.2vw,1.85rem)] font-bold text-ink leading-[1.1]">
                    {shortLabel[v.slug]}
                  </h3>
                  <p className="text-[12.5px] text-mist italic mt-1.5">
                    Fare confirmed on WhatsApp before the trip
                  </p>
                </div>

                {/* Specs + use */}
                <div className="col-span-12 lg:col-span-4 lg:col-start-7">
                  <div className="mb-4">
                    <CapacityDiagram 
                      passengers={v.passengers}
                      largeBags={v.largeBags}
                      cabinBags={v.cabinBags}
                      label={v.idealFor}
                    />
                  </div>
                  <p className="text-[14.5px] text-ink-soft leading-[1.6]">
                    {v.routeSuitability}
                  </p>
                  {v.tags && v.tags.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {v.tags.map((t) => (
                        <li key={t} className="chip chip-quiet">{t}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA - high conversion action */}
                <div className="col-span-12 lg:col-span-2 lg:justify-self-end">
                  <a
                    href={whatsappHref("fleet")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full lg:w-auto items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-deep text-walnut-deep font-medium text-[13.5px] px-5 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow hover:shadow-whatsapp/20"
                  >
                    <MessageCircle className="size-4" aria-hidden strokeWidth={2} />
                    Check availability
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
