import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Varanasi Taxi, Airport Transfer, Sightseeing",
  description:
    "Common questions about booking taxis in Varanasi: payment, airport pickup, sightseeing pace, outstation routes, packages, vehicle choice.",
  path: "/faq",
});

const sections = [
  { heading: "General booking", items: faqs.general },
  { heading: "Airport pickup", items: faqs.airport },
  { heading: "Local sightseeing", items: faqs.sightseeing },
  { heading: "Outstation routes", items: faqs.outstation },
  { heading: "Tour packages", items: faqs.packages },
];

const allFaqs = sections.flatMap((s) => s.items);

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title={
          <>
            Varanasi taxi questions,{" "}
            <em className="editorial">answered before you book.</em>
          </>
        }
        lede="Real answers, written in plain English, grouped by the kind of trip you're planning. If your question isn't here, WhatsApp is the fastest way to get a direct response."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />

      <section className="pb-20 sm:pb-28">
        <Container width="default">
          <div className="flex flex-col gap-16">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-display-sm text-ink mb-6">
                  {section.heading}
                </h2>
                <FAQAccordion items={section.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactConversion
        heading="Still have a question?"
        body="WhatsApp is the fastest way to get a direct answer, usually within minutes."
      />

      <JsonLd data={faqPageSchema(allFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
    </>
  );
}
