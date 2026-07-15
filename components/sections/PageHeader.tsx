import type { ReactNode } from "react";
import Image from "next/image";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/route/Breadcrumbs";
import {
  telHref,
  whatsappHref,
  phoneDisplay,
  type WhatsAppContext,
} from "@/lib/cta";
import { imagePresets } from "@/lib/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  crumbs?: Crumb[];
  ctaContext?: WhatsAppContext;
  /** Image to render on the right rail (3:4 portrait, lg+) */
  image?: { src: string; alt: string };
  /** Optional right-rail content rendered BELOW the image (or in its place) */
  aside?: ReactNode;
  compact?: boolean;
};

/**
 * Upgraded Editorial page header used across service / info / route pages.
 * Supports Playfair/DM Sans typography, 12-column grid, responsive viewports,
 * and high-conversion actions.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  ctaContext = "general",
  image,
  aside,
  compact = false,
}: Props) {
  const hasRightRail = !!image || !!aside;

  return (
    <section
      className={
        compact
          ? "pt-10 pb-12 bg-cream"
          : "pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-20 bg-cream"
      }
    >
      <Container width="wide">
        {crumbs && crumbs.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <Breadcrumbs crumbs={crumbs} />
          </div>
        )}

        <div className="grid-12 items-start">
          <div className={hasRightRail ? "lg:col-span-7" : "lg:col-span-12"}>
            <ScrollReveal>
              {eyebrow && <p className="label-caps mb-5">{eyebrow}</p>}
              <h1
                className={
                  compact
                    ? "text-display-md text-ink max-w-[24ch] font-bold leading-[1.1]"
                    : "text-display-lg text-ink max-w-[22ch] font-bold leading-[1.05]"
                }
              >
                {title}
              </h1>
              {lede && (
                <p className="mt-7 pull-quote text-[clamp(1.1rem,1.55vw,1.45rem)] text-ink-soft leading-[1.6] max-w-2xl">
                  {lede}
                </p>
              )}
            </ScrollReveal>

            {/* High-conversion tactile CTA blocks */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md sm:max-w-none">
                <a
                  href={whatsappHref(ctaContext)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-deep text-white font-semibold text-[14.5px] px-6 py-3.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow hover:shadow-whatsapp/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  <MessageCircle className="size-4.5" aria-hidden strokeWidth={2} />
                  Book on WhatsApp
                </a>
                
                <a
                  href={telHref()}
                  className="group inline-flex items-center justify-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream font-semibold text-[14.5px] px-6 py-3.5 rounded-lg transition-all duration-200"
                  aria-label={`Call ${phoneDisplay()}`}
                >
                  <Phone className="size-4.5" aria-hidden strokeWidth={2} />
                  Call {phoneDisplay()}
                </a>
              </div>
              
              <div className="mt-4 flex items-center gap-1.5 text-[12.5px] text-mist italic">
                <Sparkles className="size-3.5 text-marigold" aria-hidden />
                <span>Rated 4.9★ on Google · One coordinator, whole trip</span>
              </div>
            </ScrollReveal>
          </div>

          {hasRightRail && (
            <div className="lg:col-span-5 w-full">
              <ScrollReveal delay={0.25}>
                {image && (
                  <div className="img-wrap relative aspect-[3/4] w-full overflow-hidden mb-6 rounded-2xl border border-line shadow-md">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority
                      sizes={imagePresets.heroAside.sizes}
                      className="object-cover"
                    />
                  </div>
                )}
                {aside && <div className={image ? "" : "lg:pt-3"}>{aside}</div>}
              </ScrollReveal>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
