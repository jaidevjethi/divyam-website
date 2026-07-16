import Image from "next/image";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  telHref,
  whatsappHref,
  phoneDisplay,
  whatsappDisplay,
  type WhatsAppContext,
} from "@/lib/cta";

type Props = {
  heading?: string;
  accent?: string;
  body?: string;
  context?: WhatsAppContext;
  tone?: "default" | "dark";
};

export function ContactConversion({
  heading = "Plan your Varanasi trip with a local you can call.",
  accent,
  body = "Phone or WhatsApp reaches the same coordinator. Most replies happen within minutes.",
  context = "general",
  tone = "default",
}: Props) {
  const isDark = tone === "dark";

  return (
    <section
      className={
        isDark
          ? "relative section bg-terracotta text-cream overflow-hidden"
          : "section bg-cream-deep"
      }
    >
      {/* Subtle aarti background image on dark variant */}
      {isDark && (
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
          <Image
            src="/images/story-1.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <Container width="wide" className="relative">
        <div className="grid-12 lg:gap-y-0 items-center">
          
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p
                className={`text-[11px] tracking-[0.22em] uppercase font-medium ${
                  isDark ? "text-cream/70" : "text-mist"
                }`}
              >
                Direct booking
              </p>
              <h2
                className={`mt-5 text-display-lg font-bold leading-[1.05] ${
                  isDark ? "text-cream" : "text-ink"
                }`}
              >
                {accent ? (
                  <>
                    {heading.split(accent)[0]}
                    <em
                      className={`editorial ${
                        isDark ? "text-marigold" : "text-terracotta"
                      }`}
                    >
                      {accent}
                    </em>
                    {heading.split(accent)[1] ?? ""}
                  </>
                ) : (
                  heading
                )}
              </h2>
              <p
                className={`mt-7 pull-quote text-[clamp(1.1rem,1.5vw,1.35rem)] leading-[1.6] max-w-2xl ${
                  isDark ? "text-cream/75" : "text-ink-soft"
                }`}
              >
                {body}
              </p>
            </ScrollReveal>
          </div>

          {/* Booking panel — solid card, espresso on the dark band */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal delay={0.2}>
              <div
                className={`p-6 sm:p-8 rounded-2xl border shadow-xl ${
                  isDark
                    ? "bg-walnut-deep border-white/10 text-cream"
                    : "bg-paper border-line text-ink"
                }`}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="size-4 text-marigold" aria-hidden />
                  <span className="text-[12px] tracking-[0.15em] uppercase font-bold text-marigold-deep">
                    Book instantly
                  </span>
                </div>
                
                <div className="flex flex-col gap-4">
                  {/* Primary WhatsApp Action */}
                  <a
                    href={whatsappHref(context)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-deep text-walnut-deep font-semibold text-[15px] py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-whatsapp/20 hover:-translate-y-0.5 w-full text-center"
                  >
                    <MessageCircle className="size-5 shrink-0" aria-hidden strokeWidth={2} />
                    WhatsApp: {whatsappDisplay()}
                  </a>

                  {/* Secondary Phone Action */}
                  <a
                    href={telHref()}
                    className={`flex items-center justify-center gap-3 font-semibold text-[15px] py-4 rounded-xl border-2 transition-all duration-200 w-full text-center ${
                      isDark
                        ? "border-cream/20 hover:border-cream text-cream hover:bg-cream/5"
                        : "border-ink/20 hover:border-ink text-ink hover:bg-ink/5"
                    }`}
                    aria-label={`Call ${phoneDisplay()}`}
                  >
                    <Phone className="size-5 shrink-0" aria-hidden strokeWidth={2} />
                    Call: {phoneDisplay()}
                  </a>
                </div>

                <div className="mt-5 text-center">
                  <p className="text-[12px] text-mist italic">
                    Coordinates directly with the local dispatch team in Varanasi.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
