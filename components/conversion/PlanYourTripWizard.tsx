"use client";

import { useState, useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { business } from "@/content/business";
import { Car, Map, ArrowLeft, ArrowRight, MessageCircle, Check } from "lucide-react";

/* =========================================================
   Types
   ========================================================= */
type TripType = "car" | "planning" | null;
type Party = { adults: number; children: number; elders: number };
type DateChoice = { date: string; flexible: boolean };
type Destination = string;

type WizardData = {
  tripType: TripType;
  party: Party;
  dateChoice: DateChoice;
  destinations: Destination[];
  name: string;
  whatsapp: string;
  notes: string;
};

const DESTINATIONS = [
  "Varanasi",
  "Ayodhya",
  "Prayagraj",
  "Bodh Gaya",
  "Sarnath",
] as const;

const TOTAL_STEPS = 5;

/* =========================================================
   Helpers
   ========================================================= */
function composeWhatsAppMessage(data: WizardData): string {
  const typeLabel = data.tripType === "car" ? "Just a car" : "Complete trip planning";
  const partyParts: string[] = [];
  if (data.party.adults > 0) partyParts.push(`${data.party.adults} adult${data.party.adults > 1 ? "s" : ""}`);
  if (data.party.children > 0) partyParts.push(`${data.party.children} child${data.party.children > 1 ? "ren" : ""}`);
  if (data.party.elders > 0) partyParts.push(`${data.party.elders} elder${data.party.elders > 1 ? "s" : ""}`);
  const dateStr = data.dateChoice.flexible ? "Flexible dates" : data.dateChoice.date;
  const dest = data.destinations.length > 0 ? data.destinations.join(", ") : "Not specified";

  return [
    `Hi Divyam Tours, I'd like to plan a trip.`,
    ``,
    `*Name:* ${data.name}`,
    `*WhatsApp:* ${data.whatsapp}`,
    `*Service:* ${typeLabel}`,
    `*Travelers:* ${partyParts.join(", ") || "Not specified"}`,
    `*When:* ${dateStr}`,
    `*Destinations:* ${dest}`,
    data.notes ? `*Notes:* ${data.notes}` : "",
    ``,
    `Looking forward to your custom quote!`,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildWhatsAppUrl(data: WizardData): string {
  const text = encodeURIComponent(composeWhatsAppMessage(data));
  return `https://wa.me/${business.whatsapp.e164}?text=${text}`;
}

/* =========================================================
   Sub-components
   ========================================================= */
function ProgressBar({ step }: { step: number }) {
  const pct = (step / TOTAL_STEPS) * 100;
  return (
    <div className="w-full" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={TOTAL_STEPS}>
      <div className="flex items-center justify-between mb-2">
        <span className="label-caps">Step {step} of {TOTAL_STEPS}</span>
      </div>
      <div className="h-1.5 rounded-full bg-line overflow-hidden">
        <div
          className="h-full rounded-full bg-terracotta transition-[width] duration-300 ease-in-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function SelectionCard({
  selected,
  onClick,
  icon,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer text-center min-h-[120px]",
        selected
          ? "border-terracotta bg-terracotta-soft/50 shadow-sm"
          : "border-line hover:border-terracotta/40 bg-paper hover:bg-cream-deep/40"
      )}
    >
      <div className={cn("size-10 flex items-center justify-center rounded-lg", selected ? "text-terracotta" : "text-mist")}>
        {icon}
      </div>
      <div>
        <p className="font-serif text-lg font-bold text-ink">{title}</p>
        <p className="text-sm text-ink-soft mt-1">{description}</p>
      </div>
    </button>
  );
}

function Counter({
  label,
  value,
  onChange,
  min = 0,
  max = 20,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-line last:border-b-0">
      <span className="text-[15px] text-ink font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="size-10 rounded-full border border-line text-ink flex items-center justify-center hover:bg-cream-deep disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-not-allowed"
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <span className="w-8 text-center font-semibold text-lg tabular-nums">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="size-10 rounded-full border border-line text-ink flex items-center justify-center hover:bg-cream-deep disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-not-allowed"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   Step components
   ========================================================= */
function Step1({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-serif text-display-sm text-ink">What do you need?</h2>
        <p className="text-ink-soft mt-2">Choose how we can help you.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectionCard
          selected={data.tripType === "car"}
          onClick={() => setData({ ...data, tripType: "car" })}
          icon={<Car className="size-7" strokeWidth={1.5} />}
          title="Just a car"
          description="I know where I'm going. I just need a ride."
        />
        <SelectionCard
          selected={data.tripType === "planning"}
          onClick={() => setData({ ...data, tripType: "planning" })}
          icon={<Map className="size-7" strokeWidth={1.5} />}
          title="Complete trip planning"
          description="Help me plan the routes, timing, and stops."
        />
      </div>
    </div>
  );
}

function Step2({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  const update = (key: keyof Party, value: number) => {
    setData({ ...data, party: { ...data.party, [key]: value } });
  };
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-serif text-display-sm text-ink">Who is traveling?</h2>
        <p className="text-ink-soft mt-2">This helps us recommend the right vehicle.</p>
      </div>
      <div className="bg-paper rounded-xl border border-line p-5">
        <Counter label="Adults" value={data.party.adults} onChange={(v) => update("adults", v)} min={1} />
        <Counter label="Children" value={data.party.children} onChange={(v) => update("children", v)} />
        <Counter label="Elders" value={data.party.elders} onChange={(v) => update("elders", v)} />
      </div>
    </div>
  );
}

function Step3({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-serif text-display-sm text-ink">When are you traveling?</h2>
        <p className="text-ink-soft mt-2">Pick a date or let us know you&apos;re flexible.</p>
      </div>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={data.dateChoice.flexible}
            onChange={(e) =>
              setData({
                ...data,
                dateChoice: { ...data.dateChoice, flexible: e.target.checked, date: e.target.checked ? "" : data.dateChoice.date },
              })
            }
            className="size-5 rounded border-line accent-terracotta cursor-pointer"
          />
          <span className="text-[15px] text-ink font-medium">I&apos;m flexible with dates</span>
        </label>
        {!data.dateChoice.flexible && (
          <input
            type="date"
            value={data.dateChoice.date}
            onChange={(e) =>
              setData({ ...data, dateChoice: { ...data.dateChoice, date: e.target.value } })
            }
            min={new Date().toISOString().split("T")[0]}
            className="w-full h-12 px-4 rounded-lg border border-line bg-paper text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors"
          />
        )}
      </div>
    </div>
  );
}

function Step4({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  const toggle = (dest: string) => {
    const current = data.destinations;
    const next = current.includes(dest) ? current.filter((d) => d !== dest) : [...current, dest];
    setData({ ...data, destinations: next });
  };
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-serif text-display-sm text-ink">Where to?</h2>
        <p className="text-ink-soft mt-2">Select all destinations you&apos;re interested in.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {DESTINATIONS.map((dest) => {
          const selected = data.destinations.includes(dest);
          return (
            <button
              key={dest}
              type="button"
              onClick={() => toggle(dest)}
              className={cn(
                "flex items-center gap-3 px-5 py-4 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left",
                selected
                  ? "border-terracotta bg-terracotta-soft/50"
                  : "border-line hover:border-terracotta/40 bg-paper"
              )}
            >
              <div
                className={cn(
                  "size-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors",
                  selected ? "border-terracotta bg-terracotta text-white" : "border-line"
                )}
              >
                {selected && <Check className="size-4" strokeWidth={2.5} />}
              </div>
              <span className="font-medium text-ink">{dest}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step5({ data, setData }: { data: WizardData; setData: (d: WizardData) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-serif text-display-sm text-ink">Almost there!</h2>
        <p className="text-ink-soft mt-2">Share your details so we can send you a custom quote on WhatsApp.</p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="wiz-name" className="block text-sm font-medium text-ink mb-1.5">
            Your name
          </label>
          <input
            id="wiz-name"
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="w-full h-12 px-4 rounded-lg border border-line bg-paper text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors placeholder:text-mist"
          />
        </div>
        <div>
          <label htmlFor="wiz-phone" className="block text-sm font-medium text-ink mb-1.5">
            WhatsApp number
          </label>
          <input
            id="wiz-phone"
            type="tel"
            value={data.whatsapp}
            onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full h-12 px-4 rounded-lg border border-line bg-paper text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors placeholder:text-mist"
          />
        </div>
        <div>
          <label htmlFor="wiz-notes" className="block text-sm font-medium text-ink mb-1.5">
            Anything else? <span className="text-mist">(optional)</span>
          </label>
          <textarea
            id="wiz-notes"
            rows={3}
            value={data.notes}
            onChange={(e) => setData({ ...data, notes: e.target.value })}
            placeholder="Special requests, hotel pickup address, etc."
            className="w-full px-4 py-3 rounded-lg border border-line bg-paper text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors placeholder:text-mist resize-none"
          />
        </div>
      </div>
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <div className="size-16 rounded-full bg-whatsapp/10 flex items-center justify-center">
        <MessageCircle className="size-8 text-whatsapp" strokeWidth={1.5} />
      </div>
      <div>
        <h2 className="font-serif text-display-sm text-ink">One tap left.</h2>
        <p className="text-ink-soft mt-3 max-w-md">
          WhatsApp is opening with your trip summary pre-filled. Press{" "}
          <strong>Send</strong> there and it reaches us directly. We usually
          reply within minutes.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   Main Wizard
   ========================================================= */
const INITIAL_DATA: WizardData = {
  tripType: null,
  party: { adults: 2, children: 0, elders: 0 },
  dateChoice: { date: "", flexible: false },
  destinations: [],
  name: "",
  whatsapp: "",
  notes: "",
};

export function PlanYourTripWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);

  const canAdvance = useCallback((): boolean => {
    switch (step) {
      case 1:
        return data.tripType !== null;
      case 2:
        return data.party.adults >= 1;
      case 3:
        return data.dateChoice.flexible || data.dateChoice.date !== "";
      case 4:
        return data.destinations.length > 0;
      case 5:
        return data.name.trim() !== "" && data.whatsapp.trim() !== "";
      default:
        return false;
    }
  }, [step, data]);

  const next = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
  };

  const submit = () => {
    const url = buildWhatsAppUrl(data);
    setSubmitted(true);
    // Give the success screen a brief moment to show, then redirect
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 800);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-xl mx-auto">
        <SuccessScreen />
      </div>
    );
  }

  const steps = [Step1, Step2, Step3, Step4, Step5];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-8">
      <ProgressBar step={step} />

      {/* Slide container */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
        >
          {steps.map((StepComponent, i) => (
            <div key={i} className="w-full shrink-0 px-1">
              <StepComponent data={data} setData={setData} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={prev}
          disabled={step === 1}
          className={cn(
            "inline-flex items-center gap-2 h-11 px-5 rounded-md font-medium text-[15px] transition-colors duration-200 cursor-pointer",
            step === 1
              ? "text-mist cursor-not-allowed"
              : "text-slate hover:text-slate-deep hover:bg-slate-soft"
          )}
        >
          <ArrowLeft className="size-4" strokeWidth={2} />
          Back
        </button>

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-md font-medium text-[15px] bg-terracotta text-ivory hover:bg-terracotta-deep transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer shadow-[0_1px_0_0_rgba(162,61,28,0.4)]"
          >
            Next
            <ArrowRight className="size-4" strokeWidth={2} />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-md font-medium text-[15px] bg-whatsapp text-walnut-deep hover:bg-whatsapp-deep transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer shadow-sm"
          >
            <MessageCircle className="size-4" strokeWidth={2} />
            Send via WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}
