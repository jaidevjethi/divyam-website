import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Quick-facts block — uses hairlines and editorial spacing, not card chrome.
 * Pairs naturally as the right rail of PageHeader for AEO-friendly facts.
 */
type Item = { label: string; value: ReactNode };

type Props = {
  /** Optional 1–2 sentence direct answer (omit if covered by page lede) */
  answer?: string;
  items: Item[];
  className?: string;
  /** 2 for narrow rails (default), 4 for full-width fact strips */
  columns?: 2 | 4;
};

export function AnswerBlock({ answer, items, className, columns = 2 }: Props) {
  return (
    <div className={cn("", className)}>
      {answer && (
        <p className="font-serif italic text-[17px] text-charcoal leading-[1.45] mb-7 pb-7 border-b border-line">
          {answer}
        </p>
      )}
      <dl
        className={
          columns === 4
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5"
            : "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
        }
      >
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <dt className="label-caps">{item.label}</dt>
            <dd className="text-[15.5px] text-charcoal leading-[1.45]">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
