import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { footerSections } from "@/lib/nav";
import { business, isPlaceholder } from "@/content/business";
import { telHref, whatsappHref, phoneDisplay, whatsappDisplay } from "@/lib/cta";
import { ShieldCheck, Star, CreditCard } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-walnut-deep text-cream pb-28 md:pb-14">
      <Container width="wide" className="pt-16 sm:pt-20">
        {/* Top — wordmark + tagline */}
        <div className="grid-12 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(1.85rem,3vw,3rem)] text-cream leading-[1.05] tracking-[-0.015em]">
              Private taxis &amp; spiritual travel{" "}
              <em className="editorial text-marigold">in Varanasi.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="font-serif italic text-[16px] text-cream/70 leading-[1.5]">
              From Babatpur arrival to the Sarnath morning and the Kashi
              Vishwanath corridor, one number for the whole trip.
            </p>
          </div>
        </div>

        {/* Middle — contact + link groups */}
        <div className="grid-12 border-t border-cream/15 pt-12">
          {/* Contact & Trust strip */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-cream/70 mb-4">
                Direct booking
              </p>
              <ul className="flex flex-col gap-3.5 text-[15px]">
                <li>
                  <a
                    href={telHref()}
                    className="group inline-flex items-baseline gap-3"
                  >
                    <span className="text-[10px] tracking-[0.18em] uppercase text-cream/65">
                      Phone
                    </span>
                    <span className="text-cream border-b border-cream/50 pb-0.5 group-hover:text-marigold group-hover:border-marigold transition-colors">
                      {phoneDisplay()}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref("general")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-3"
                  >
                    <span className="text-[10px] tracking-[0.18em] uppercase text-cream/65">
                      WhatsApp
                    </span>
                    <span className="text-cream border-b border-cream/50 pb-0.5 group-hover:text-marigold group-hover:border-marigold transition-colors">
                      {whatsappDisplay()}
                    </span>
                  </a>
                </li>
                {!isPlaceholder(business.email) && (
                  <li>
                    <a
                      href={`mailto:${business.email}`}
                      className="group inline-flex items-baseline gap-3"
                    >
                      <span className="text-[10px] tracking-[0.18em] uppercase text-cream/65">
                        Email
                      </span>
                      <span className="text-cream border-b border-cream/50 pb-0.5 group-hover:text-marigold group-hover:border-marigold transition-colors">
                        {business.email}
                      </span>
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Added Local Address & Avail details */}
            <div className="text-[14px] text-cream/70 space-y-1">
              <p className="font-semibold text-cream">Office location:</p>
              <p className="leading-relaxed">
                {business.address.street}, {business.address.locality}, {business.address.region} {business.address.postalCode}
              </p>
              {!isPlaceholder(business.hours.display) && (
                <p className="pt-2 text-[13px] text-cream/50">
                  {business.hours.display}
                </p>
              )}
            </div>

            {/* Trust facts — verifiable only */}
            <div className="pt-4 border-t border-cream/10 space-y-3">
              <a
                href={business.socials.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[13px] text-cream/80 hover:text-cream transition-colors"
              >
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-marigold text-marigold" />
                  ))}
                </div>
                <span className="border-b border-transparent group-hover:border-cream/50 pb-0.5">
                  {business.googleRating.value} · {business.googleRating.count} Google reviews
                </span>
              </a>
              <div className="flex items-center gap-2 text-[13px] text-cream/80">
                <ShieldCheck className="size-4 text-marigold" strokeWidth={2} />
                <span>Named coordinator on every trip</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-cream/80">
                <CreditCard className="size-4 text-marigold" strokeWidth={2} />
                <span>Payments: Cash · UPI · Net Banking</span>
              </div>
            </div>
          </div>

          {/* Link sections */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.heading}>
                <p className="text-[10px] tracking-[0.22em] uppercase text-cream/70 mb-5">
                  {section.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-cream/75 hover:text-cream transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Logo variant="mark" className="opacity-70" />
          <div className="flex items-center gap-5 text-[12px] text-cream/65 tracking-wide">
            <Link href="/credits" className="hover:text-cream/75 transition-colors">
              Photo credits
            </Link>
            <span className="text-cream/25">·</span>
            <p>
              &copy; {year} {business.legalName}.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
