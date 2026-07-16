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
    alt: "Priests raising fire lamps at the evening Ganga aarti",
    when: "Evening",
    caption:
      "Dashashwamedh Ghat fills for the 6:45 aarti. The drop is coordinated to land you in time for a seat.",
  },
];

export function VisualStory() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section bg-walnut text-cream relative">
      <Container width="wide">
        <ScrollReveal>
          <div className="mb-14 lg:mb-2 max-w-3xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-cream/55 font-medium">
              A day on the Ganga
            </p>
            <h2 className="mt-5 text-display-md text-cream">
              Three moments tourists{" "}
              <em className="editorial text-marigold">often miss</em> — and
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
                index={i} 
                onInView={(idx) => setActiveIndex(idx)} 
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
                  activeIndex === i ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
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

function StoryTextBlock({ s, index, onInView, isActive }: { s: (typeof story)[number], index: number, onInView: (i: number) => void, isActive: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [index, onInView]);

  return (
    <div ref={ref} className="h-[75vh] flex flex-col justify-center pr-12 transition-opacity duration-700">
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
