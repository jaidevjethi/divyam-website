import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "./FAQAccordion";
import { faqs, HOME_TEASER_COUNT } from "@/content/faqs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FAQTeaser() {
  const items = faqs.general.slice(0, HOME_TEASER_COUNT);

  return (
    <section className="section bg-cream">
      <Container width="wide">
        <div className="grid-12 items-start">
          
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="label-caps">Practical answers</p>
              <h2 className="mt-5 text-display-md text-charcoal">
                Booking, vehicles,{" "}
                <em className="editorial">pace.</em>
              </h2>
              <p className="mt-6 pull-quote text-[17px] text-ink leading-[1.6] max-w-md">
                The questions travellers actually ask before calling.
              </p>
              <Link
                href="/faq"
                className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-medium text-charcoal hover:text-terracotta transition-colors"
              >
                <span className="border-b border-current pb-0.5">
                  See full FAQ
                </span>
                <ArrowUpRight className="size-4" aria-hidden strokeWidth={1.5} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={0.15}>
              <FAQAccordion items={items} defaultOpenFirst />
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
