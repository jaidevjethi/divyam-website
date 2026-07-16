import Link from "next/link";
import { business } from "@/content/business";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "header" | "footer" | "mark";
};

/**
 * The Divyam mark — "dawn on the Ganga inside the D":
 * a bold D monogram holding a brass rising sun and the river's wave.
 * Strokes use currentColor so the mark adapts to light/dark surfaces;
 * the sun stays brass everywhere.
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
      <path
        d="M10 5 H14.5 C23.5 5 27.5 9.8 27.5 16 C27.5 22.2 23.5 27 14.5 27 H10 Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M10 5 V27" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M12.8 20.7 C14.8 18.8 16.5 21.9 18.6 20.2 C20 19.1 21.2 19.6 22 20.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <circle cx="17.3" cy="12.6" r="2.7" fill="var(--color-brass)" />
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
