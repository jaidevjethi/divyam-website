import { business, isPlaceholder } from "@/content/business";

/**
 * CTA link builders.
 * Compose tel: and wa.me URLs with context-aware prefilled messages.
 */

export function telHref(): string {
  if (isPlaceholder(business.phone.e164)) {
    return "tel:";
  }
  return `tel:${business.phone.e164}`;
}

export function phoneDisplay(): string {
  if (isPlaceholder(business.phone.display)) {
    return "Add phone number";
  }
  return business.phone.display;
}

/**
 * WhatsApp link with optional contextual prefilled message.
 * Context keys map to short pre-typed messages that load in the WhatsApp UI.
 */
export type WhatsAppContext =
  | "general"
  | "airport"
  | "sightseeing"
  | "outstation"
  | "package"
  | "fleet"
  | { kind: "route"; from: string; to: string }
  | { kind: "package"; name: string };

const PRESET_MESSAGES: Record<Exclude<WhatsAppContext, object>, string> = {
  general:
    "Hi Divyam Tours — I need a taxi in Varanasi. Can you share vehicle options and pricing?",
  airport:
    "Hi Divyam Tours — I need an airport pickup/drop in Varanasi. Can you confirm a vehicle?",
  sightseeing:
    "Hi Divyam Tours — I'm planning local sightseeing in Varanasi. Could you suggest a route and pricing?",
  outstation:
    "Hi Divyam Tours — I need an outstation taxi from Varanasi. Can you share availability and rates?",
  package:
    "Hi Divyam Tours — I'm interested in a multi-day tour package. Can we discuss a custom itinerary?",
  fleet:
    "Hi Divyam Tours — I'm looking at your vehicles. Can you confirm availability and daily rates?",
};

function messageFor(context: WhatsAppContext): string {
  if (typeof context === "string") return PRESET_MESSAGES[context];
  if (context.kind === "route") {
    return `Hi Divyam Tours — I need a taxi from ${context.from} to ${context.to}. Can you share pricing and confirm a vehicle?`;
  }
  if (context.kind === "package") {
    return `Hi Divyam Tours — I'm interested in the "${context.name}" itinerary. Can we customize this and get a quote?`;
  }
  return PRESET_MESSAGES.general;
}

export function whatsappHref(context: WhatsAppContext = "general"): string {
  if (isPlaceholder(business.whatsapp.e164)) {
    return "https://wa.me/";
  }
  const text = encodeURIComponent(messageFor(context));
  return `https://wa.me/${business.whatsapp.e164}?text=${text}`;
}

export function whatsappDisplay(): string {
  if (isPlaceholder(business.whatsapp.display)) {
    return "Add WhatsApp number";
  }
  return business.whatsapp.display;
}
