"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

/**
 * "A day on the Ganga" — sticky scroll interactive narrative.
 */

const story = [
  {
    src: "/images/story-1-2.webp",
    alt: "Dawn over the Varanasi ghats, boats on the misty Ganga",
    when: "Dawn",
    caption:
      "Before the city is awake, the first lamps appear at Assi Ghat. We start sunrise pickups at 5 am.",
  },
  {
    src: "/images/story-2-2.webp",
    alt: "Pilgrims in the lane approaching the Kashi Vishwanath temple gate",
    when: "Mid-day",
    caption:
      "The temple corridor at Kashi Vishwanath sees its calmest hour just before the afternoon offerings.",
  },
  {
    src: "/images/story-3-2.webp",
    alt: "Crowds filling the steps at Dashashwamedh Ghat for the evening Ganga aarti, seen from a boat on the river",
    when: "Evening",
    caption:
      "Dashashwamedh Ghat fills for the 6:45 aarti. The drop is coordinated to land you in time for a seat.",
  },
];

export function VisualStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * Which slide is showing is decided by ONE rule: whichever text block's
   * centre sits nearest the centre of the viewport. Exactly one block can win,
   * so there is no ambiguity when a boundary between two blocks is on screen.
   *
   * This deliberately does not use a per-block IntersectionObserver. That
   * approach kept re-creating its observers whenever the active index changed,
   * and a re-created observer immediately re-fires, so the active slide ended
   * up decided by callback ordering rather than by what was actually centred.
   *
   * The measuring listener is attached only while the section is on screen,
   * and the whole thing is skipped below `lg`, where the layout is a plain
   * stack with no sticky frame.
   */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const onMotionChange = () => setReducedMotion(motionQuery.matches);
    motionQuery.addEventListener("change", onMotionChange);

    const desktop = window.matchMedia("(min-width: 1024px)");

    let frame = 0;
    let listening = false;

    const measure = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let nearest = 0;
      let smallest = Infinity;
      blockRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs((rect.top + rect.bottom) / 2 - middle);
        if (distance < smallest) {
          smallest = distance;
          nearest = i;
        }
      });
      setActiveIndex(nearest);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    const startListening = () => {
      if (listening || !desktop.matches) return;
      listening = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      measure();
    };

    const stopListening = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    // Only pay the scroll cost while this section is actually on screen.
    const gate = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? startListening() : stopListening()),
      { rootMargin: "10% 0px 10% 0px" },
    );
    gate.observe(section);

    return () => {
      gate.disconnect();
      stopListening();
      motionQuery.removeEventListener("change", onMotionChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section bg-walnut text-cream relative">
      <Container width="wide">
        <ScrollReveal>
          <div className="mb-14 lg:mb-2 max-w-3xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-cream/70 font-medium">
              A day on the Ganga
            </p>
            <h2 className="mt-5 text-display-md text-cream">
              Three moments tourists{" "}
              <em className="editorial text-marigold">often miss</em>, and
              how we time the day around them.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative mt-8 lg:mt-0 grid-12 items-start">
          
          {/* Mobile Layout (Standard stack) */}
          <div className="lg:hidden space-y-12">
            {story.map((s, i) => (
              <figure key={i}>
                <div className="img-wrap relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
                  <Image src={s.src} alt={s.alt} fill sizes="100vw" className="object-cover" />
                </div>
                <figcaption className="mt-6">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-marigold font-bold mb-2">{s.when}</p>
                  <p className="font-serif italic text-[18px] text-cream/90 leading-[1.5] max-w-md">{s.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Desktop Layout (Sticky Scroll) */}
          <div className="hidden lg:block lg:col-span-5 lg:col-start-7 lg:pb-[20vh]">
            {story.map((s, i) => (
              <StoryTextBlock
                key={i}
                s={s}
                blockRef={(el) => {
                  blockRefs.current[i] = el;
                }}
                isActive={activeIndex === i}
              />
            ))}
          </div>

          {/* Sticky Image Frame */}
          <div className="hidden lg:block lg:col-span-5 lg:col-start-1 lg:row-start-1 sticky top-[15vh] h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl">
            {story.map((s, i) => (
              <div
                key={i}
                className={cn(
                  "absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]",
                  activeIndex === i ? "opacity-100 z-10" : "opacity-0 z-0",
                  // The cross-fade is content (it shows which moment); the
                  // scale is decoration, so only the scale is dropped.
                  reducedMotion ? "scale-100" : activeIndex === i ? "scale-100" : "scale-105"
                )}
              >
                <Image src={s.src} alt={s.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

/** Presentational only. The parent measures these blocks and owns the state. */
function StoryTextBlock({
  s,
  blockRef,
  isActive,
}: {
  s: (typeof story)[number];
  blockRef: (el: HTMLDivElement | null) => void;
  isActive: boolean;
}) {
  return (
    <div ref={blockRef} className="h-[75vh] flex flex-col justify-center pr-12 transition-opacity duration-700">
      <p className={cn(
        "text-[13px] tracking-[0.25em] uppercase font-bold mb-5 transition-colors duration-500",
        isActive ? "text-marigold" : "text-marigold/30"
      )}>
        {s.when}
      </p>
      <p className={cn(
        "font-serif text-[clamp(1.8rem,2.3vw,2.2rem)] leading-[1.3] max-w-md drop-shadow-md transition-colors duration-500",
        isActive ? "text-cream" : "text-cream/30"
      )}>
        {s.caption}
      </p>
    </div>
  );
}
