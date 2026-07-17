import Link from "next/link";
import { business } from "@/content/business";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "header" | "footer" | "mark";
};

/**
 * The Divyam mark — sunrise over the Ganga:
 * a gold sun lifting off the horizon with the river's waves below.
 * Open composition (no enclosing shape) so it never reads as a face
 * or a letter. Strokes use currentColor for light/dark surfaces;
 * the sun stays gold everywhere.
 */
function Mark({ size = 26, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path d="M16 4.4 V7.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7.6 8.4 L9.9 10.7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24.4 8.4 L22.1 10.7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9.7 18 A 6.3 6.3 0 0 1 22.3 18 Z" fill="var(--color-marigold)" />
      <path d="M4.5 18 H27.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M6.5 23.4 C 9.8 21.6 13.2 25.2 16.5 23.4 C 19.4 21.8 22.8 24.9 25.5 23.2"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M10 27.8 C 12.5 26.3 15 28.9 17.5 27.5 C 19.4 26.4 21 27.6 22 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, variant = "header" }: Props) {
  if (variant === "mark") {
    return (
      <span className={cn("inline-flex text-current", className)}>
        <Mark />
      </span>
    );
  }

  if (variant === "footer") {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center gap-3 text-cream", className)}
        aria-label={`${business.shortName} — home`}
      >
        <Mark size={34} />
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[28px] tracking-[-0.015em] text-cream whitespace-nowrap">
            Divyam Tours
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-cream/60 mt-1.5">
            Varanasi · Sarnath · Prayagraj · Ayodhya
          </span>
        </span>
      </Link>
    );
  }

  // header
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-charcoal hover:text-terracotta transition-colors",
        className
      )}
      aria-label={`${business.shortName} — home`}
    >
      <Mark />
      <span className="font-serif text-[20px] tracking-[-0.015em] whitespace-nowrap">
        Divyam Tours
      </span>
    </Link>
  );
}
