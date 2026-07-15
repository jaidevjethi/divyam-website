import Link from "next/link";
import { business } from "@/content/business";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "header" | "footer" | "mark";
};

/**
 * Refined brand mark — a single hand-drawn curve that suggests
 * the bend of the Ganga and the line of a route. No clip-art car,
 * no temple silhouette, no circle frame.
 */
export function Logo({ className, variant = "header" }: Props) {
  const mark = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M2 16 C 6 16, 6 6, 11 6 S 16 16, 20 16"
        stroke="var(--color-terracotta)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="11" cy="6" r="1.4" fill="var(--color-brass)" />
    </svg>
  );

  if (variant === "mark") {
    return <span className={cn("inline-flex", className)}>{mark}</span>;
  }

  if (variant === "footer") {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-baseline gap-3", className)}
        aria-label={`${business.shortName} — home`}
      >
        {mark}
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[28px] tracking-[-0.015em] text-charcoal">
            Divyam Tours
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-mist mt-1.5">
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
        "inline-flex items-baseline gap-2.5 text-charcoal hover:text-terracotta transition-colors",
        className
      )}
      aria-label={`${business.shortName} — home`}
    >
      {mark}
      <span className="font-serif text-[20px] tracking-[-0.015em] whitespace-nowrap">
        Divyam Tours
      </span>
    </Link>
  );
}
