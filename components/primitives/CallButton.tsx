import { Phone } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { telHref, phoneDisplay } from "@/lib/cta";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showNumber?: boolean;
  className?: string;
};

export function CallButton({
  label = "Call now",
  size = "md",
  showNumber = false,
  className,
}: Props) {
  return (
    <LinkButton
      href={telHref()}
      variant="primary"
      size={size}
      className={cn("min-w-[140px]", className)}
      aria-label={`Call ${phoneDisplay()}`}
    >
      <Phone className="size-4" aria-hidden />
      <span>{label}</span>
      {showNumber && (
        <span className="hidden sm:inline text-ivory/80 font-normal">
          · {phoneDisplay()}
        </span>
      )}
    </LinkButton>
  );
}
