import { MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { whatsappHref, type WhatsAppContext } from "@/lib/cta";
import { cn } from "@/lib/utils";

type Props = {
  context?: WhatsAppContext;
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "whatsapp" | "secondary";
  className?: string;
};

export function WhatsAppButton({
  context = "general",
  label = "WhatsApp now",
  size = "md",
  variant = "whatsapp",
  className,
}: Props) {
  return (
    <LinkButton
      href={whatsappHref(context)}
      variant={variant}
      size={size}
      className={cn("min-w-[140px]", className)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
    >
      <MessageCircle className="size-4" aria-hidden />
      <span>{label}</span>
    </LinkButton>
  );
}
