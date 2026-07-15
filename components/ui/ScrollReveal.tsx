"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-triggered reveal — CSS transitions + IntersectionObserver.
 * (Replaces the framer-motion version: same API, no client bundle cost.)
 *
 * Progressive enhancement: elements render VISIBLE in server HTML. On mount,
 * only elements still below the viewport are hidden and observed — so there
 * is no flash for above-the-fold content, no LCP penalty, and no invisible
 * page if JavaScript never runs. Respects prefers-reduced-motion.
 */

type Variant = "fade-up" | "fade-in" | "scale-in";

const HIDDEN_TRANSFORM: Record<Variant, string> = {
  "fade-up": "translateY(24px)",
  "fade-in": "none",
  "scale-in": "scale(0.97)",
};

const EASE = "cubic-bezier(0.25, 0.1, 0.25, 1)";

function reveal(el: HTMLElement, duration: number, delay: number) {
  el.style.transition = `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`;
  el.style.opacity = "1";
  el.style.transform = "none";
}

/** Clear inline reveal styles — effects must be idempotent because React
 *  StrictMode mounts twice and a stale hidden state would stick forever. */
function reset(el: HTMLElement) {
  el.style.transition = "";
  el.style.opacity = "";
  el.style.transform = "";
}

function hide(el: HTMLElement, variant: Variant) {
  el.style.opacity = "0";
  el.style.transform = HIDDEN_TRANSFORM[variant];
}

/** True if the element is already (nearly) within the viewport. */
function inViewport(el: HTMLElement): boolean {
  return el.getBoundingClientRect().top < window.innerHeight * 0.95;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Props = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  /** IntersectionObserver rootMargin, e.g. "-80px" */
  viewportMargin?: string;
  once?: boolean;
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  viewportMargin = "-80px",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    reset(el);
    if (prefersReducedMotion() || inViewport(el)) return;

    hide(el, variant);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal(el, duration, delay);
          io.disconnect();
        }
      },
      { rootMargin: `${viewportMargin} 0px` },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Stagger container — reveals direct children with incremental delays.
 * Children may be plain elements or StaggerItem wrappers.
 */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  viewportMargin = "-80px",
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  viewportMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children).filter(
      (c): c is HTMLElement => c instanceof HTMLElement,
    );
    items.forEach(reset);
    if (prefersReducedMotion() || inViewport(el)) return;

    items.forEach((item) => hide(item, "fade-up"));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => reveal(item, 0.5, i * staggerDelay));
          io.disconnect();
        }
      },
      { rootMargin: `${viewportMargin} 0px` },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Stagger-aware child — plain wrapper; StaggerContainer animates it. */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  return <div className={className}>{children}</div>;
}
