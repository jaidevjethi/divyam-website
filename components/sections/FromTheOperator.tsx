import { Minus } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { imagePresets } from "@/lib/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FromTheOperator() {
  return (
    <section className="section bg-terracotta-soft/40">
      <Container width="default">
        <div className="grid-12">
          
          {/* Left rail — operator photo + label */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="img-wrap relative aspect-square w-full max-w-[220px] overflow-hidden rounded-xl border border-line/40 shadow-sm">
                <Image
                  src="/images/operator-chai.webp"
                  alt="Kulhad chai and marigolds on the dashboard, ghats at dawn through the windshield"
                  fill
                  sizes={imagePresets.operator.sizes}
                  className="object-cover"
                />
              </div>
              <p className="label-caps mt-6">A note from us</p>
              <div className="mt-3 w-10 h-px bg-line-strong" />
              <p className="mt-3 text-[14px] text-ink-soft font-serif italic font-medium">
                Divyam Tours · Varanasi
              </p>
            </ScrollReveal>
          </div>

          {/* Right — letter */}
          <div className="lg:col-span-9 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <p className="pull-quote text-[clamp(1.35rem,2vw,1.8rem)] text-ink leading-[1.35] drop-cap">
                We are a small taxi service that drives tourists around Varanasi.
                Most of our day is spent meeting people at Babatpur, helping
                with luggage, and getting them to a hotel near the ghats or
                the temple corridor without fuss.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-7 text-[17px] text-ink-soft leading-[1.7]">
                When you call, you reach Mukesh, the same person who plans
                your trip, confirms your vehicle, and answers on the WhatsApp
                thread you wrote on. He&rsquo;ll tell you when an earlier start
                makes for a calmer day, when Sarnath fits a half-day, and when
                an overnight in Ayodhya is far more comfortable than rushing
                back the same night.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 pt-10 border-t border-line">
                <p className="label-caps mb-6 text-terracotta font-bold">A short list of what we don&rsquo;t do</p>
                <ul className="space-y-4 text-[16px] text-ink-soft leading-[1.6]">
                  {[
                    "We don't run a 24/7 chatbot or a marketplace. One coordinator answers. That's the design.",
                    "We don't make certification claims for guides we don't have. If you need a specific guide, we'll say if we can deliver.",
                    "We don't write fake reviews to fill the page. Every quote on this site is word-for-word from our Google profile.",
                    "We don't quote prices we'll change at the vehicle. The fare we share on WhatsApp is the fare you pay.",
                  ].map((line) => (
                    <li key={line} className="flex gap-4">
                      <Minus className="mt-1 size-5 text-terracotta shrink-0" aria-hidden strokeWidth={2.5} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mt-12 font-serif italic text-[17.5px] font-bold text-ink">
                &mdash; Mukesh &amp; the team at Divyam Tours
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
