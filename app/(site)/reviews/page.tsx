import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactConversion } from "@/components/sections/ContactConversion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { testimonials } from "@/content/testimonials";
import { business, isPlaceholder } from "@/content/business";

export const metadata: Metadata = buildMetadata({
  title: "Reviews | Divyam Tours Varanasi",
  description:
    "What travellers say about Divyam Tours Varanasi. Real testimonials from airport pickups, sightseeing days and outstation routes.",
  path: "/reviews",
  noindex: testimonials.length === 0,
});

export default function ReviewsPage() {
  const hasGoogleProfile = !isPlaceholder(business.socials.googleBusiness);

  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title={
          <>
            What travellers say{" "}
            <em className="editorial">about their trips.</em>
          </>
        }
        lede={`Quoted word-for-word from our Google Business Profile, rated ${business.googleRating.value}★ across ${business.googleRating.count} reviews.`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
      />

      <section className="pb-20 sm:pb-28">
        <Container width="default">
          {testimonials.length === 0 ? (
            <div className="border-t border-line-strong pt-10">
              <p className="font-serif italic text-[clamp(1.3rem,2vw,1.7rem)] text-ink leading-[1.45] max-w-2xl">
                We collect reviews directly on Google Business Profile, where
                they stay verifiable and visible across search. Real
                testimonials from recent trips will appear here as the
                operator publishes them. We don&rsquo;t fabricate quotes
                to fill a page.
              </p>
              {hasGoogleProfile && (
                <a
                  href={business.socials.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[15px] text-ink hover:text-terracotta transition-colors"
                >
                  <span className="border-b border-current pb-0.5">
                    See current Google reviews
                  </span>
                  <ExternalLink className="size-4" aria-hidden strokeWidth={1.5} />
                </a>
              )}
            </div>
          ) : (
            <>
              <ul className="grid gap-12 sm:grid-cols-2 border-t border-line-strong pt-10">
                {testimonials.map((t, i) => (
                  <li key={i}>
                    <p className="font-serif text-[19px] text-ink leading-[1.5]">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="mt-6 label-caps">
                      {t.attribution} · {t.tripType.replace(/-/g, " ")}
                      {t.source === "google" && " · Google review"}
                    </p>
                  </li>
                ))}
              </ul>
              {hasGoogleProfile && (
                <a
                  href={business.socials.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-14 inline-flex items-center gap-2 text-[15px] text-ink hover:text-terracotta transition-colors"
                >
                  <span className="border-b border-current pb-0.5">
                    Read all {business.googleRating.count} reviews on Google
                  </span>
                  <ExternalLink className="size-4" aria-hidden strokeWidth={1.5} />
                </a>
              )}
            </>
          )}
        </Container>
      </section>

      <ContactConversion
        heading="Plan your own Varanasi trip."
        body="Phone or WhatsApp reaches us directly. Most replies happen within minutes."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
    </>
  );
}
