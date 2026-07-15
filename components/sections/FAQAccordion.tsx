"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { FAQ } from "@/content/faqs";

type Props = {
  items: readonly FAQ[];
  defaultOpenFirst?: boolean;
};

export function FAQAccordion({ items, defaultOpenFirst = false }: Props) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue={defaultOpenFirst ? "item-0" : undefined}
      className="border-t border-line-strong"
    >
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="border-b border-line group-data-[state=open]:bg-cream-deep/10 transition-colors duration-300"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-start justify-between gap-8 py-6 text-left transition-all hover:text-terracotta cursor-pointer">
              <span className="font-serif text-[clamp(1.15rem,1.6vw,1.4rem)] font-bold text-ink leading-[1.3] group-hover:text-terracotta transition-colors">
                {item.q}
              </span>
              <Plus
                className="size-6 shrink-0 text-mist transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]:rotate-45 group-data-[state=open]:text-terracotta mt-0.5"
                aria-hidden
                strokeWidth={2}
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_400ms_cubic-bezier(0.87,0,0.13,1)] data-[state=closed]:animate-[accordion-up_400ms_cubic-bezier(0.87,0,0.13,1)] border-l-2 border-transparent data-[state=open]:border-terracotta transition-all pl-2 sm:pl-4">
            <p className="pb-7 pr-10 text-[15.5px] text-ink-soft leading-[1.7] max-w-3xl">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
