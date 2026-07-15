"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { primaryNav } from "@/lib/nav";
import { telHref, whatsappHref, phoneDisplay, whatsappDisplay } from "@/lib/cta";
import { cn } from "@/lib/utils";

/**
 * Editorial header — solid ivory bar with a gilt top edge and hairline
 * bottom border. No glassmorphism: the bar is opaque, gains a soft
 * elevation shadow once the page scrolls, and marks the active page.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40">
      {/* Gilt edge — a thread of brass woven across the top */}
      <div
        className="h-[3px] bg-gradient-to-r from-brass via-marigold to-terracotta"
        aria-hidden
      />

      <div
        className={cn(
          "bg-cream border-b border-line transition-shadow duration-300",
          scrolled && "shadow-[0_12px_32px_-16px_rgba(29,23,16,0.18)]"
        )}
      >
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 flex h-[72px] items-center justify-between gap-4 xl:gap-6">
          <Logo />

          {/* Desktop nav — tighter tracking/gap at lg, full at xl, never wraps */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-8 ml-auto whitespace-nowrap"
            aria-label="Primary"
          >
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "text-[11.5px] tracking-[0.1em] xl:tracking-[0.18em] uppercase font-semibold transition-colors duration-200 border-b-2 pb-1",
                  isActive(link.href)
                    ? "text-terracotta border-terracotta"
                    : "text-ink-soft border-transparent hover:text-terracotta"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop phone & WhatsApp CTA pair — number text only at xl */}
          <div className="hidden md:flex items-center pl-4 xl:pl-6 border-l border-line gap-3 xl:gap-4 shrink-0">
            <a
              href={telHref()}
              className="group inline-flex items-center gap-2 text-[14px] text-ink hover:text-terracotta transition-colors"
              aria-label={`Call ${phoneDisplay()}`}
            >
              <Phone className="size-3.5 text-terracotta" aria-hidden strokeWidth={2} />
              <span className="font-semibold lg:hidden xl:inline">{phoneDisplay()}</span>
            </a>

            <a
              href={whatsappHref("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-whatsapp hover:bg-whatsapp-deep text-white text-[12.5px] font-semibold px-3.5 py-1.5 rounded-md transition-colors"
            >
              <MessageCircle className="size-3.5" aria-hidden strokeWidth={2} />
              Chat
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center size-10 -mr-2 text-ink"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="size-5" aria-hidden strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 transition-opacity lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[88%] max-w-sm bg-cream border-l border-line transition-transform lg:hidden flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile menu"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-line">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center size-10 -mr-2 text-ink"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile primary">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block py-4 font-serif text-[22px] font-bold text-ink border-b border-line hover:text-terracotta"
              >
                Home
              </Link>
            </li>
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block py-4 font-serif text-[22px] font-bold border-b border-line hover:text-terracotta",
                    isActive(link.href) ? "text-terracotta" : "text-ink"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu bottom action center */}
        <div className="px-6 py-6 border-t border-line bg-cream-deep/60 flex flex-col gap-4">
          <p className="label-caps">Direct Booking Channels</p>
          <a
            href={telHref()}
            className="flex items-center justify-center gap-3 bg-ink hover:bg-ink-soft text-cream font-medium text-[14.5px] py-3.5 rounded-lg transition-colors"
          >
            <Phone className="size-4 text-terracotta" aria-hidden strokeWidth={2} />
            Call {phoneDisplay()}
          </a>
          <a
            href={whatsappHref("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-deep text-white font-medium text-[14.5px] py-3.5 rounded-lg transition-colors shadow-sm"
          >
            <MessageCircle className="size-4" aria-hidden strokeWidth={2} />
            WhatsApp {whatsappDisplay()}
          </a>
        </div>
      </aside>
    </header>
  );
}
