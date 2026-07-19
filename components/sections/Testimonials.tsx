import { Star, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/content/testimonials";
import { business } from "@/content/business";

/**
 * Testimonials — shows real reviews with star ratings and attribution.
 * If none exist, section is hidden entirely (no anti-conversion "we don't have reviews" copy).
 */
export function Testimonials() {
  if (testimonials.length === 0) {
    return null; // Don't draw attention to absence of reviews
  }

  return (
    <section className="section bg-terracotta-soft/40">
      <Container width="wide">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <p className="label-caps">From recent trips</p>
            <h2 className="mt-5 text-display-md text-ink">
              What travellers said after their{" "}
              <em className="editorial text-terracotta">Varanasi trip.</em>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-12 lg:grid-cols-3 lg:gap-x-12" staggerDelay={0.12}>
          {testimonials.slice(0, 3).map((t, i) => (
            <StaggerItem key={i}>
              <figure className="relative border-t border-terracotta/20 pt-10 px-2 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <span className="absolute -top-6 left-0 text-[100px] leading-none text-terracotta/15 font-serif font-bold z-0 pointer-events-none select-none">
                  &ldquo;
                </span>
                
                {/* Star rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="size-4.5 fill-marigold text-marigold"
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="relative z-10 font-serif italic text-[clamp(1.1rem,1.5vw,1.25rem)] text-ink leading-[1.5] flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 relative z-10 pt-6 border-t border-line/40">
                  <p className="text-[14px] font-medium text-ink">
                    {t.attribution}
                  </p>
                  <p className="label-caps mt-1">
                    {t.tripType.replace(/-/g, " ")}
                    {t.source === "google" && " · Google review"}
                    {t.source === "whatsapp" && " · WhatsApp feedback"}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="mt-14 flex justify-center">
            <a
              href={business.socials.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14.5px] font-medium text-ink hover:text-terracotta transition-colors"
            >
              <span className="border-b border-current pb-0.5">
                Read all {business.googleRating.count} reviews on Google ·{" "}
                {business.googleRating.value}★
              </span>
              <ExternalLink className="size-4" aria-hidden strokeWidth={1.5} />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
