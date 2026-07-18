import { Container } from "@/components/ui/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const reasons = [
  {
    label: "On arrival",
    body: "A driver waits at the terminal exit with your name on a board, tracks your flight on WhatsApp, and helps with luggage. Late-night and early-morning flights are routine. Please confirm timing when booking.",
  },
  {
    label: "The route",
    body: "Drivers know which parking points sit closest to the Kashi Vishwanath corridor lanes, where to stop near Manikarnika for the shortest walk, and which entry to Sarnath stays open through the day.",
  },
  {
    label: "Communication",
    body: "One coordinator from your first message through the end of your trip. Hindi and English on WhatsApp throughout, for time changes, route tweaks and last-minute add-ons.",
  },
  {
    label: "Pace",
    body: "Half-day, full-day, multi-day. Sedan for couples, SUV/MUV for families, tempo traveller for parties of twelve. We will tell you when an earlier start makes a calmer day.",
  },
  {
    label: "Group fit",
    body: "We adjust pace, drop points and stop order for the realistic group on the trip: elderly travellers, families with children, first-time foreign visitors. The vehicle is matched to that, not the other way around.",
  },
  {
    label: "Payment",
    body: "Cash or UPI to the driver are standard. The fare we share on WhatsApp before the trip is the fare you pay; tolls and parking, where applicable, are listed upfront.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-cream-deep">
      <Container width="default">
        <ScrollReveal>
          <div className="grid-12 mb-14 lg:mb-16">
            <div className="lg:col-span-12">
              <p className="label-caps">How the service actually works</p>
              <h2 className="mt-5 text-display-md text-ink">
                Practical things travellers tell us{" "}
                <em className="editorial">made the trip easy.</em>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="border-t border-line-strong" staggerDelay={0.06}>
          {reasons.map((r) => (
            <StaggerItem key={r.label}>
              <div
                className="grid grid-cols-12 gap-y-2 lg:gap-y-0 gap-x-6 lg:gap-x-12 py-8 lg:py-10 border-b border-line hover:bg-cream/20 transition-colors"
              >
                <div className="col-span-12 lg:col-span-3">
                  <p className="label-caps text-ink">{r.label}</p>
                </div>
                <p className="col-span-12 lg:col-span-8 lg:col-start-5 text-[16px] text-ink-soft leading-[1.7] max-w-[64ch]">
                  {r.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
