import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, Plane, Map, Compass, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { business, isPlaceholder } from "@/content/business";
import { telHref, whatsappHref, phoneDisplay, whatsappDisplay } from "@/lib/cta";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact Divyam Tours | Varanasi Taxi & Tour Service",
  description:
    "Reach Divyam Tours by phone or WhatsApp for Varanasi taxi, airport pickup, sightseeing or outstation booking. Direct response, no forms required.",
  path: "/contact",
});

const altPrompts = [
  { icon: Plane, label: "Airport pickup", href: "/routes/varanasi-airport-to-city-taxi" },
  { icon: Map, label: "Local sightseeing", href: "/routes/varanasi-full-day-sightseeing" },
  { icon: Compass, label: "Explore all routes", href: "/routes" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Direct booking"
        title={
          <>
            Book a Varanasi taxi by{" "}
            <em className="editorial">phone or WhatsApp.</em>
          </>
        }
        lede="Phone and WhatsApp are the fastest way to confirm a vehicle. For longer enquiries like multi-day packages and group bookings, WhatsApp keeps the whole plan in one thread."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      {/* Main Grid: Form/Details & Interactive Map */}
      <section className="section-tight bg-cream">
        <Container width="wide">
          <div className="grid-12 items-start">
            
            {/* Left: Contact Options & Enquiry Details */}
            <div className="lg:col-span-7 space-y-10">
              <ScrollReveal>
                <div>
                  <h2 className="font-serif text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold text-ink mb-6">
                    Connect directly
                  </h2>
                  <ul className="grid gap-4 bg-line border-y border-line py-4">
                    <li className="bg-cream-deep/45 rounded-lg overflow-hidden border border-line/30">
                      <a
                        href={telHref()}
                        className="group flex items-center justify-between gap-6 px-6 py-6 hover:bg-cream-deep transition-colors"
                      >
                        <div className="flex items-center gap-5">
                          <div className="size-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                            <Phone className="size-5 text-terracotta" aria-hidden strokeWidth={2} />
                          </div>
                          <div>
                            <p className="label-caps mb-0.5">Phone</p>
                            <p className="font-serif text-[22px] font-bold text-ink group-hover:text-terracotta transition-colors">{phoneDisplay()}</p>
                          </div>
                        </div>
                        <p className="hidden sm:block text-[13px] text-mist italic">Direct call: you reach the coordinator, not a call centre</p>
                      </a>
                    </li>
                    
                    <li className="bg-cream-deep/45 rounded-lg overflow-hidden border border-line/30">
                      <a
                        href={whatsappHref("general")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-6 px-6 py-6 hover:bg-cream-deep transition-colors"
                      >
                        <div className="flex items-center gap-5">
                          <div className="size-12 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0">
                            <MessageCircle className="size-5 text-whatsapp" aria-hidden strokeWidth={2} />
                          </div>
                          <div>
                            <p className="label-caps mb-0.5">WhatsApp</p>
                            <p className="font-serif text-[22px] font-bold text-ink group-hover:text-whatsapp transition-colors">{whatsappDisplay()}</p>
                          </div>
                        </div>
                        <p className="hidden sm:block text-[13px] text-mist italic">For fast booking &amp; pricing</p>
                      </a>
                    </li>

                    {!isPlaceholder(business.email) && (
                      <li className="bg-cream-deep/45 rounded-lg overflow-hidden border border-line/30">
                        <a
                          href={`mailto:${business.email}`}
                          className="group flex items-center justify-between gap-6 px-6 py-6 hover:bg-cream-deep transition-colors"
                        >
                          <div className="flex items-center gap-5">
                            <div className="size-12 rounded-full bg-marigold/10 flex items-center justify-center shrink-0">
                              <Mail className="size-5 text-marigold" aria-hidden strokeWidth={2} />
                            </div>
                            <div>
                              <p className="label-caps mb-0.5">Email</p>
                              <p className="font-serif text-[18px] font-bold text-ink group-hover:text-marigold transition-colors">{business.email}</p>
                            </div>
                          </div>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="grid gap-6 sm:grid-cols-2 bg-cream-deep/30 p-6 rounded-lg border border-line/30">
                  <div className="flex gap-4">
                    <MapPin className="size-5 text-marigold mt-1 shrink-0" aria-hidden strokeWidth={2} />
                    <div>
                      <p className="label-caps mb-1">Our Location</p>
                      <p className="text-[15px] font-medium text-ink leading-relaxed">
                        {business.address.street}, {business.address.locality}, {business.address.region} {business.address.postalCode}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="size-5 text-marigold mt-1 shrink-0" aria-hidden strokeWidth={2} />
                    <div>
                      <p className="label-caps mb-1">Availability</p>
                      <p className="text-[15px] font-medium text-ink">{business.hours.display}</p>
                      <p className="mt-1 text-[13px] text-mist leading-relaxed">
                        Enquiries during off-hours are replied first thing in the morning.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Added Trust Points */}
              <ScrollReveal delay={0.15}>
                <div className="border-t border-line pt-6">
                  <h3 className="font-serif text-[18px] font-bold text-ink mb-4">Why book with us?</h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    <li className="flex items-center gap-2 text-[14.5px] text-ink-soft">
                      <CheckCircle className="size-4 text-whatsapp" strokeWidth={2.5} />
                      Zero hidden surcharges
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] text-ink-soft">
                      <CheckCircle className="size-4 text-whatsapp" strokeWidth={2.5} />
                      English &amp; Hindi speaking drivers
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] text-ink-soft">
                      <CheckCircle className="size-4 text-whatsapp" strokeWidth={2.5} />
                      Clean, air-conditioned vehicles
                    </li>
                    <li className="flex items-center gap-2 text-[14.5px] text-ink-soft">
                      <CheckCircle className="size-4 text-whatsapp" strokeWidth={2.5} />
                      Reliable ghat sunrise timings
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Map Embed with perfect viewport responsive containment */}
            <div className="lg:col-span-5 w-full h-full lg:sticky lg:top-24">
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col gap-4">
                  <h2 className="font-serif text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold text-ink">
                    Locate our base
                  </h2>
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-lg overflow-hidden border border-line shadow-md bg-cream-deep">
                    <iframe
                      src={business.mapEmbed}
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Divyam Tours Location Map"
                    />
                  </div>
                  <p className="text-[13px] text-mist italic text-center">
                    Situated in Bhelupur, close to Assi Ghat and the main temple corridor for fast pickups.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Container>
      </section>

      {/* Alternative links */}
      <section className="section-tight bg-cream-deep">
        <Container width="wide">
          <h2 className="text-display-md text-ink max-w-xl mb-10">
            Or go directly to the{" "}
            <em className="editorial">relevant service.</em>
          </h2>
          <ul className="grid gap-px bg-line border-y border-line">
            {altPrompts.map((p) => (
              <li key={p.href} className="bg-cream">
                <Link
                  href={p.href}
                  className="group flex items-center gap-5 px-6 py-6 hover:bg-cream-deep transition-colors"
                >
                  <p.icon className="size-5 text-terracotta" aria-hidden strokeWidth={1.5} />
                  <span className="font-serif text-[20px] font-bold text-ink group-hover:text-terracotta transition-colors">{p.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
