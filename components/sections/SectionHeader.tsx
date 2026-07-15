import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight editorial section heading.
 * Used inside body sections that aren't full-bleed redesigned components.
 */
type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-2xl",
        align === "center" && "mx-auto text-center items-center",
        className
      )}
    >
      {eyebrow && <p className="label-caps">{eyebrow}</p>}
      <h2 className="text-display-md text-charcoal">{title}</h2>
      {description && (
        <p className="pull-quote text-[17px] text-ink leading-[1.6]">
          {description}
        </p>
      )}
    </div>
  );
}
