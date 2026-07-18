import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PlanYourTripWizard } from "@/components/conversion/PlanYourTripWizard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Plan Your Trip | Custom Varanasi Travel Quote",
  description:
    "Tell us about your trip and get a custom WhatsApp quote from Divyam Tours. Airport pickups, sightseeing, outstation routes.",
  path: "/plan-your-trip",
  // Conversion tool, not a landing page — keep out of the index.
  noindex: true,
});

export default function PlanYourTripPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Back link */}
      <div className="px-5 sm:px-8 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-mist hover:text-terracotta transition-colors font-medium"
        >
          <ArrowLeft className="size-4" strokeWidth={2} />
          Back to Divyam Tours
        </Link>
      </div>

      {/* Wizard */}
      <div className="flex-1 flex items-center justify-center px-5 sm:px-8 py-12">
        <PlanYourTripWizard />
      </div>
    </div>
  );
}
