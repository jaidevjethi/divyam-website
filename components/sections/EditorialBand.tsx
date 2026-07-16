import Image from "next/image";
import { imagePresets } from "@/lib/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { business } from "@/content/business";

type Props = {
  src: string;
  alt: string;
  /** Optional italic caption rendered below or on the overlay */
  caption?: string;
  /** "tall" 21:9, "wide" 24:9 (default), or "medium" 16:9 */
  aspect?: "tall" | "wide" | "medium";
};

/**
 * Full-bleed editorial photo strip — upgraded with high-trust overlay & clean gradient
 * to separation sections with a visual "breath" the way a magazine feature places a panoramic
 * image between articles.
 */
export function EditorialBand({ src, alt, caption, aspect = "wide" }: Props) {
  const aspectClass =
    aspect === "tall"
      ? "aspect-[21/9] min-h-[300px]"
      : aspect === "medium"
        ? "aspect-[16/9] min-h-[250px]"
        : "aspect-[24/9] min-h-[200px]";

  return (
    <ScrollReveal variant="fade-in" duration={0.8}>
      <figure className="relative w-full overflow-hidden">
        <div className={`img-wrap parallax-band relative w-full ${aspectClass}`}>
          <div className="parallax-inner">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={imagePresets.band.sizes}
              className="object-cover brightness-[85%]"
            />
          </div>
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-walnut/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Faint stat overlay to make this a high-trust conversion micro-moment */}
          <div className="absolute bottom-6 left-6 right-6 lg:left-12 lg:right-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pointer-events-none">
            <span className="text-[12px] tracking-[0.2em] uppercase text-cream/90 font-medium bg-walnut-deep/85 px-3 py-1 rounded">
              Local Varanasi operator
            </span>
            <span className="text-[13px] sm:text-[14px] text-cream font-medium italic bg-walnut-deep/85 px-4 py-1.5 rounded">
              Rated {business.googleRating.value}★ by {business.googleRating.count} travellers on Google
            </span>
          </div>
        </div>
        {caption && (
          <figcaption className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 mt-4 font-serif italic text-[15.5px] text-ink-soft leading-[1.6]">
            &ldquo;{caption}&rdquo;
          </figcaption>
        )}
      </figure>
    </ScrollReveal>
  );
}
