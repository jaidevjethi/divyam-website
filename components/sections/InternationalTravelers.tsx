"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LinkButton } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/cta";
import { Plane, MessageCircle, Clock, BookOpen, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* =========================================================
   Data
   ========================================================= */
const TRUST_POINTS = [
  {
    icon: Plane,
    title: "Airport name board pickup",
    body: "Driver waiting with your name board inside the airport arrival hall.",
  },
  {
    icon: MessageCircle,
    title: "English-speaking team",
    body: "English-speaking operations team available on WhatsApp.",
  },
  {
    icon: Clock,
    title: "WhatsApp support",
    body: "One WhatsApp thread with your coordinator throughout your stay.",
  },
  {
    icon: BookOpen,
    title: "Cultural guidance",
    body: "Cultural guidance and temple visit coordination by locals who know the rituals.",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "Is it safe to take a taxi in Varanasi?",
    a: "Yes. We assign verified, familiar drivers. You'll get the driver's name and phone number before pickup. Many of our international guests travel solo or as couples without issues.",
  },
  {
    q: "How do I pay?",
    a: "We accept cash (INR), UPI, and bank transfer. Your fare is agreed before the trip: no meters, no surprises. For multi-day packages, we can split payments.",
  },
  {
    q: "Can you help me plan my first visit to Varanasi?",
    a: "Absolutely. Send us your dates and interests on WhatsApp, and we'll suggest a day-by-day plan covering the ghats, temples, Sarnath, and local food stops.",
  },
] as const;

/* =========================================================
   FAQ Item with toggle
   ========================================================= */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-serif text-[clamp(1rem,1.4vw,1.2rem)] font-bold text-ink leading-snug group-hover:text-terracotta transition-colors">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-mist transition-transform duration-200",
            open && "rotate-180 text-terracotta"
          )}
          aria-hidden
          strokeWidth={2}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-[15px] text-ink-soft leading-[1.7]">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Main Section
   ========================================================= */
export function InternationalTravelers() {
  return (
    <section className="section-tight bg-cream-deep">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-2xl mb-14">
            <p className="label-caps">For International Visitors</p>
            <h2 className="text-display-md text-charcoal">
              Welcoming International Travelers
            </h2>
            <p className="text-[17px] text-ink-soft leading-[1.65]">
              We regularly host visitors from around the world. Here&apos;s how we make your Varanasi trip smooth from arrival.
            </p>
          </div>
        </ScrollReveal>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TRUST_POINTS.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="bg-paper rounded-2xl border border-line p-6 flex flex-col gap-4 h-full">
                <div className="size-10 rounded-lg bg-slate-soft flex items-center justify-center">
                  <point.icon className="size-5 text-slate" strokeWidth={1.5} />
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

        {/* Mini FAQ */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-display-sm text-ink mb-6">
              First Time in Varanasi?
            </h3>
            <div className="border-t border-line">
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <LinkButton
                href={whatsappHref("general")}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" aria-hidden strokeWidth={2} />
                Chat with us on WhatsApp
              </LinkButton>
              <p className="text-sm text-mist">
                We reply quickly on WhatsApp. A real person, not a bot.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
