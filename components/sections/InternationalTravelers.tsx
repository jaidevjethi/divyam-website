import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LinkButton } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/cta";
import { Plane, MessageCircle, UserCheck, BookOpen, ArrowUpRight } from "lucide-react";

/* =========================================================
   International-visitor reassurance. Warm palette, no duplicate
   FAQ (the full set lives on /faq). Server component: no hooks.
   ========================================================= */
const TRUST_POINTS = [
  {
    icon: Plane,
    title: "Name-board airport pickup",
    body: "A driver waits inside the arrivals hall at Babatpur (VNS) with your name on a board, and tracks your flight.",
  },
  {
    icon: MessageCircle,
    title: "English on WhatsApp",
    body: "Plan the whole trip in English over WhatsApp before you fly. No app to install, no call centre.",
  },
  {
    icon: UserCheck,
    title: "One coordinator throughout",
    body: "The same person handles your entire stay, from the first message to the last drop.",
  },
  {
    icon: BookOpen,
    title: "Local cultural guidance",
    body: "Drivers who know temple etiquette, dress norms, and the calmest times for darshan and the ghats.",
  },
] as const;

export function InternationalTravelers() {
  return (
    <section className="section-tight bg-cream-deep">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-2xl mb-14">
            <p className="label-caps">For international visitors</p>
            <h2 className="text-display-md text-ink">
              Taxi service in Varanasi for{" "}
              <em className="editorial">foreign tourists.</em>
            </h2>
            <p className="text-[17px] text-ink-soft leading-[1.65]">
              We host visitors from around the world every week. Here is how a
              Varanasi trip works when you book from abroad.
            </p>
          </div>
        </ScrollReveal>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {TRUST_POINTS.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="bg-paper rounded-2xl border border-line p-6 flex flex-col gap-4 h-full">
                <div className="size-10 rounded-lg bg-terracotta-soft flex items-center justify-center">
                  <point.icon className="size-5 text-terracotta" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                  {point.title}
                </h3>
                <p className="text-[14.5px] text-ink-soft leading-[1.6]">
                  {point.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Book + full FAQ, no duplicated mini-FAQ */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-4 border-t border-line pt-8">
            <LinkButton
              href={whatsappHref("general")}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" aria-hidden strokeWidth={2} />
              Plan your trip on WhatsApp
            </LinkButton>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[15px] text-ink hover:text-terracotta transition-colors"
            >
              <span className="border-b border-current pb-0.5">
                Common questions from first-time visitors
              </span>
              <ArrowUpRight className="size-4" aria-hidden strokeWidth={1.5} />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
