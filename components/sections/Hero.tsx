import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { whatsappHref } from "@/lib/cta";
import { business, trustBadges } from "@/content/business";
import { imagePresets } from "@/lib/image";

/**
 * Editorial home Hero — type-led, with paired imagery.
 * Composition: 7/12 typographic column, 5/12 vertical photo (aarti).
 * Below the fold (mobile): photo stacks at 4:3 to avoid letterboxing.
 */
export function Hero() {
  const confirmedBadges = trustBadges.filter((b) => b.confirmed);

  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-0 overflow-hidden">
      <Container width="wide" className="relative z-10">
        <ScrollReveal variant="fade-in" duration={0.4}>
          <p className="label-caps">
            Varanasi · Sarnath · Prayagraj · Ayodhya · Bodhgaya
          </p>
        </ScrollReveal>

        <div className="mt-10 lg:mt-14 grid-12 items-stretch">
          {/* Type column */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(2.05rem,4.6vw,3.85rem)] leading-[1.05] tracking-[-0.02em] text-ink font-bold max-w-[20ch]">
                <em className="editorial text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-sindoor">
                  Varanasi taxi service
                </em>{" "}
                for airport pickups, sightseeing and outstation trips.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-7 lg:mt-9 max-w-2xl pull-quote text-[clamp(1.05rem,1.35vw,1.3rem)] text-ink-soft leading-[1.6]">
                A local cab service for pilgrims, families and foreign visitors to
                Varanasi, also known as Banaras and Kashi. Book direct on WhatsApp
                in English or Hindi. Rated {business.googleRating.value} stars
                across {business.googleRating.count} Google reviews.
              </p>
            </ScrollReveal>

            {/* Primary CTAs — proper buttons */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href={whatsappHref("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-br from-terracotta to-terracotta-deep text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_4px_10px_-2px_rgba(154,52,18,0.35)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_8px_20px_-3px_rgba(154,52,18,0.45)] font-semibold text-[15.5px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  Book a Taxi
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" aria-hidden strokeWidth={2} />
                </a>
                <a
                  href="/plan-your-trip"
                  className="group inline-flex items-center justify-center gap-2.5 bg-paper border border-line-strong text-ink-soft shadow-sm hover:shadow-md hover:border-terracotta/30 hover:text-ink font-semibold text-[15.5px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  Plan a Multi-Day Trip
                </a>
              </div>

              {/* Micro-trust strip below CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-[13px] text-ink-soft">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-soft/60 border border-terracotta-soft shadow-sm">
                  <CheckCircle2 className="size-4 text-terracotta" aria-hidden strokeWidth={2.5} />
                  Reply within minutes
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-soft/60 border border-terracotta-soft shadow-sm">
                  <CheckCircle2 className="size-4 text-terracotta" aria-hidden strokeWidth={2.5} />
                  No app download needed
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-soft/60 border border-terracotta-soft shadow-sm">
                  <CheckCircle2 className="size-4 text-terracotta" aria-hidden strokeWidth={2.5} />
                  Same person, whole trip
                </span>
              </div>
            </ScrollReveal>

            {/* Trust badges */}
            {confirmedBadges.length > 0 && (
              <ScrollReveal delay={0.4}>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {confirmedBadges.map((b) => (
                    <li key={b.label} className="chip chip-quiet">
                      {b.label}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            )}
          </div>

          {/* Photo aside: stretches to the exact height of the type column on
              lg+ so headline top and image top start together and the bottoms
              close together; stacks at 4:3 below lg. */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="scale-in" delay={0.2} className="lg:h-full">
              <div className="img-wrap relative aspect-[4/3] lg:aspect-auto lg:h-full w-full rounded-2xl shadow-[0_20px_60px_-15px_rgba(154,52,18,0.18)] border border-line/50">
                <Image
                  src={business.heroAsideImage}
                  alt={business.heroAsideImageAlt}
                  fill
                  priority
                  sizes={imagePresets.heroAside.sizes}
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>

      {/* Full-bleed cinematic photo band.
          Hidden below md: at phone width this letterboxes down to a ~200px
          sliver directly beneath the hero portrait, which reads as a second
          photo rather than a cinematic beat. Being lazy, it is not even
          downloaded there. Tablet and up keep the full-width moment. */}
      <div className="parallax-band relative mt-16 sm:mt-20 aspect-[21/9] sm:aspect-[24/9] w-full hidden md:block">
        <div className="parallax-inner">
          <Image
            src={business.heroImage}
            alt={business.heroImageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
