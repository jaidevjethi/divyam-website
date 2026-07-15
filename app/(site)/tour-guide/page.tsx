import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { AnswerBlock } from "@/components/sections/AnswerBlock";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Tour Guide Service in Varanasi — Local Orientation & Guide+Cab",
  description:
    "Local tour guide assistance in Varanasi — temple-area orientation, ghat walks, cultural context. Optional alongside your private taxi or package.",
  path: "/tour-guide",
});

const focuses = [
  { title: "Temple-area orientation", body: "Help understanding the temple corridor layout, what to do before darshan, where to leave shoes and bags. Practical, not theatrical." },
  { title: "Ghat walks with context", body: "From Assi Ghat to Manikarnika — the story of the ghats, where to sit during evening aarti, where the sunrise photo points are." },
  { title: "Sarnath cultural support", body: "Brief explanation of Dhamek Stupa, Mulagandha Kuti Vihara and the museum's key exhibits — saves time, deepens the visit." },
  { title: "Language comfort", body: "Guides who speak English clearly for international tourists. Comfort levels in other languages confirmed per booking." },
  { title: "Guide + cab combination", body: "A guide for the day alongside your private taxi — most efficient for first-time visitors who want context but not a tour group." },
];

export default function TourGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Local guide assistance"
        title={
          <>
            A local guide who explains{" "}
            <em className="editorial">what you&rsquo;re actually looking at.</em>
          </>
        }
        lede="Tour guide service alongside your taxi — for temple-area orientation, ghat walks, and Sarnath context. Truthful about what the guide can do; no inflated certification claims."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Tour Guide", path: "/tour-guide" },
        ]}
        image={{
          src: "/images/route-sarnath.jpg",
          alt: "Dhamek Stupa, Sarnath",
        }}
        aside={
          <AnswerBlock
            answer="Local guide assistance booked alongside your private taxi — orientation, context, and language comfort."
            items={[
              { label: "Best with", value: "Local sightseeing day" },
              { label: "Language", value: "English (per guide)" },
              { label: "Booking", value: "Add to taxi or package" },
              { label: "Pace", value: "You set it — guide adapts" },
            ]}
          />
        }
      />

      <section className="section-tight border-t border-line bg-cream-deep">
        <Container width="wide">
          <p className="label-caps mb-10">What our guide service covers</p>
          <ul className="border-t border-line-strong">
            {focuses.map((f, i) => (
              <li key={f.title} className="grid grid-cols-12 gap-x-6 lg:gap-x-12 py-8 lg:py-10 border-b border-line items-baseline">
                <span className="col-span-2 lg:col-span-1 editorial-number">0{i + 1}</span>
                <h3 className="col-span-10 lg:col-span-4 font-serif text-[clamp(1.4rem,2vw,1.9rem)] text-ink leading-[1.1]">{f.title}</h3>
                <p className="col-span-12 lg:col-span-7 mt-3 lg:mt-0 text-[15.5px] text-ink-soft leading-[1.65]">{f.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-tight">
        <Container width="narrow">
          <p className="label-caps">Honesty rule</p>
          <h2 className="mt-4 text-display-md text-ink">
            What we don&rsquo;t claim.
          </h2>
          <div className="mt-7 flex flex-col gap-5 text-[16.5px] text-ink-soft leading-[1.7]">
            <p className="drop-cap">
              We do not invent certifications. We don&rsquo;t advertise a
              dozen languages we can&rsquo;t actually deliver. We confirm
              the specific guide&rsquo;s strengths — what they know best,
              and how clearly they speak English — before your trip.
            </p>
            <p>
              If we don&rsquo;t have the right guide for what you need, we
              say so on WhatsApp. Many travellers prefer that to a
              mismatched guide they didn&rsquo;t connect with.
            </p>
          </div>
        </Container>
      </section>

      <ContactConversion
        heading="Want a guide for your Varanasi day?"
        body="Tell us your interests — temples, ghats, Sarnath, photography — and the dates. We confirm guide availability on WhatsApp."
      />

      <JsonLd
        data={serviceSchema({
          name: "Tour guide service in Varanasi",
          description: "Local tour guide assistance for Varanasi temples, ghats and Sarnath — bookable alongside private taxi.",
          serviceType: "Tour guide",
          url: "/tour-guide",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tour Guide", path: "/tour-guide" },
        ])}
      />
    </>
  );
}
