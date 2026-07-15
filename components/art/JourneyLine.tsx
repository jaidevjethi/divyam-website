"use client";

import { useEffect, useRef } from "react";

/**
 * JourneyLine — the site's signature motif.
 * A single thin curve that suggests a route / river bend / pilgrim path,
 * drawn on as it scrolls into view (stroke-dash technique + IO).
 *
 * Progressive enhancement mirrors ScrollReveal: the line renders fully
 * drawn in server HTML; only when JS runs (and motion is allowed) is it
 * wound back and animated in. Effects stay idempotent for StrictMode.
 */
type Props = {
  className?: string;
  /** "horizontal" curve for between-section dividers, "loop" for hero accents */
  variant?: "horizontal" | "loop";
};

function useDrawOnScroll() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const path = svg.querySelector("path");
    if (!path) return;

    // Reset any state from a previous mount
    path.style.transition = "";
    path.style.strokeDasharray = "";
    path.style.strokeDashoffset = "";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (svg.getBoundingClientRect().top < window.innerHeight * 0.95) return;

    path.setAttribute("pathLength", "1");
    path.style.strokeDasharray = "1";
    path.style.strokeDashoffset = "1";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition = "stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1)";
          path.style.strokeDashoffset = "0";
          io.disconnect();
        }
      },
      { rootMargin: "-15% 0px" },
    );
    io.observe(svg);
    return () => io.disconnect();
  }, []);

  return ref;
}

export function JourneyLine({ className, variant = "horizontal" }: Props) {
  const ref = useDrawOnScroll();

  if (variant === "loop") {
    return (
      <svg ref={ref} viewBox="0 0 200 80" className={className} aria-hidden fill="none">
        <path
          d="M4,40 C 30,40 30,12 60,12 S 90,68 120,68 S 150,12 180,12 L 196,12"
          stroke="var(--color-terracotta)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="4" cy="40" r="2.2" fill="var(--color-brass)" />
        <circle cx="196" cy="12" r="2.2" fill="var(--color-brass)" />
      </svg>
    );
  }

  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 60"
      className={className}
      aria-hidden
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M0,30 C 200,30 200,10 400,10 S 600,50 800,50 S 1000,10 1200,10 L 1440,10"
        stroke="var(--color-terracotta)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
