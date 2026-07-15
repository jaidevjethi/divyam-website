import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

/**
 * Site chrome — header, footer and the mobile call/WhatsApp bar.
 * Pages outside this group (e.g. /plan-your-trip) render without chrome
 * for a focused conversion flow.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
