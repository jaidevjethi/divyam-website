import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { business } from "@/content/business";

/**
 * Font pairing:
 *
 * Fraunces: A warm display serif with optical sizing. Carries the heritage
 * and editorial character of a Varanasi travel operator — headlines stop
 * looking like every geometric-sans startup template.
 *
 * Inter: Neo-grotesque sans-serif known for its pristine legibility in UI.
 * Used for body copy, buttons, and data to ensure maximum clarity for users
 * booking on mobile devices.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.shortName} | Private Taxis & Spiritual Travel in Varanasi`,
    template: `%s | ${business.shortName}`,
  },
  description: business.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}

        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
