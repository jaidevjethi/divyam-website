import { Container } from "@/components/ui/Container";

type Item = { label: string; sub?: string };

const DEFAULT_ITEMS: Item[] = [
  { label: "Local route knowledge", sub: "Varanasi, Sarnath, Prayagraj, Ayodhya" },
  { label: "Tourist-friendly support", sub: "English on WhatsApp, calm coordination" },
  { label: "Multiple vehicle options", sub: "Sedan · SUV · Tempo traveller" },
  { label: "Direct call & WhatsApp", sub: "No forms, no account creation" },
];

type Props = {
  items?: Item[];
  className?: string;
};

export function TrustStrip({ items = DEFAULT_ITEMS, className }: Props) {
  return (
    <section className={`bg-paper border-y border-line ${className ?? ""}`}>
      <Container width="wide" className="py-7">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
          {items.map((item) => (
            <li key={item.label} className="flex flex-col gap-0.5">
              <p className="text-[14px] text-charcoal font-medium">{item.label}</p>
              {item.sub && (
                <p className="text-[12.5px] text-mist">{item.sub}</p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
