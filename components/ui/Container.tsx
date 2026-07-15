import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** width preset — narrow for editorial copy, default for sections, wide for full layouts */
  width?: "narrow" | "default" | "wide";
};

/**
 * 12-column grid container with proper gutters.
 *
 * Desktop gutters: 32px (px-8) at sm, 48px (px-12) at lg
 * Max-widths calibrated for 12-col grid: wide = 1280px, default = 1120px
 * Gutters ensure content never touches viewport edges and maintains
 * consistent horizontal rhythm across all sections.
 */
const widthMap = {
  narrow: "max-w-[720px]",
  default: "max-w-[1120px]",
  wide: "max-w-[1280px]",
};

export function Container({ children, className, width = "default" }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        widthMap[width],
        className
      )}
    >
      {children}
    </div>
  );
}
