import { CallButton } from "./CallButton";
import { WhatsAppButton } from "./WhatsAppButton";
import type { WhatsAppContext } from "@/lib/cta";
import { cn } from "@/lib/utils";

type Props = {
  /** Context flows into the WhatsApp prefilled message */
  context?: WhatsAppContext;
  size?: "md" | "lg" | "xl";
  className?: string;
  /** Optional supporting line above the buttons */
  caption?: string;
};

export function EnquireCTA({ context, size = "md", className, caption }: Props) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {caption && (
        <p className="text-sm text-ink">{caption}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <CallButton size={size} />
        <WhatsAppButton context={context} size={size} />
      </div>
    </div>
  );
}
