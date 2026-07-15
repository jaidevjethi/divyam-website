import { Phone, MessageCircle } from "lucide-react";
import { telHref, whatsappHref, phoneDisplay } from "@/lib/cta";

export function StickyMobileCTA() {
  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="md:hidden fixed inset-x-0 bottom-0 z-30 bg-cream border-t border-line-strong shadow-[0_-8px_24px_-12px_rgba(29,23,16,0.15)]"
    >
      <div className="grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={telHref()}
          className="inline-flex items-center justify-center gap-2 h-12 rounded-sm bg-ink text-cream text-[14.5px] font-medium tracking-wide transition-transform duration-150 active:bg-walnut active:scale-[0.97]"
          aria-label={`Call ${phoneDisplay()}`}
        >
          <Phone className="size-[16px]" aria-hidden strokeWidth={1.5} />
          <span>Call</span>
        </a>
        <a
          href={whatsappHref("general")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-12 rounded-sm bg-whatsapp text-white text-[14.5px] font-medium tracking-wide transition-transform duration-150 active:bg-whatsapp-deep active:scale-[0.97]"
        >
          <MessageCircle className="size-[16px]" aria-hidden strokeWidth={1.5} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
