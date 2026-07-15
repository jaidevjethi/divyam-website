/**
 * Standalone layout for /plan-your-trip — no Header, no Footer.
 * This route lives outside the (site) route group, so the shared chrome
 * never renders here; the page keeps a single focused conversion flow.
 */
export default function PlanYourTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main" className="flex-1">
      {children}
    </main>
  );
}
