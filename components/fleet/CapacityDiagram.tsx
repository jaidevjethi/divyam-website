import { cn } from "@/lib/utils";

type Props = {
  passengers: number;
  largeBags: number;
  cabinBags: number;
  label?: string;
  className?: string;
};

/* =========================================================
   SVG Icons — simple silhouettes
   ========================================================= */
function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="currentColor"
      className={cn("w-5 h-7", className)}
      aria-hidden
    >
      <circle cx="12" cy="7" r="5" />
      <path d="M2 28c0-5.5 4.5-10 10-10s10 4.5 10 10v2H2v-2z" />
    </svg>
  );
}

function SuitcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 28"
      fill="currentColor"
      className={cn("w-5 h-6", className)}
      aria-hidden
    >
      <rect x="3" y="8" width="18" height="18" rx="2" />
      <rect x="8" y="4" width="8" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3" y1="14" x2="21" y2="14" stroke="white" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function CabinBagIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 26"
      fill="currentColor"
      className={cn("w-4 h-5", className)}
      aria-hidden
    >
      <rect x="3" y="6" width="14" height="18" rx="2" />
      <rect x="7" y="3" width="6" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* =========================================================
   Main Component
   ========================================================= */
export function CapacityDiagram({
  passengers,
  largeBags,
  cabinBags,
  label,
  className,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Visual icons row */}
      <div className="flex items-end gap-6 flex-wrap">
        {/* Passengers */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-end gap-1">
            {Array.from({ length: passengers }).map((_, i) => (
              <PersonIcon key={`p-${i}`} className="text-terracotta" />
            ))}
          </div>
          <span className="text-xs font-medium text-mist tracking-wide uppercase">
            {passengers} {passengers === 1 ? "Passenger" : "Passengers"}
          </span>
        </div>

        {/* Large bags */}
        {largeBags > 0 && (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-end gap-1">
              {Array.from({ length: largeBags }).map((_, i) => (
                <SuitcaseIcon key={`l-${i}`} className="text-walnut" />
              ))}
            </div>
            <span className="text-xs font-medium text-mist tracking-wide uppercase">
              {largeBags} {largeBags === 1 ? "Large Bag" : "Large Bags"}
            </span>
          </div>
        )}

        {/* Cabin bags */}
        {cabinBags > 0 && (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-end gap-1">
              {Array.from({ length: cabinBags }).map((_, i) => (
                <CabinBagIcon key={`c-${i}`} className="text-brass" />
              ))}
            </div>
            <span className="text-xs font-medium text-mist tracking-wide uppercase">
              {cabinBags} {cabinBags === 1 ? "Cabin Bag" : "Cabin Bags"}
            </span>
          </div>
        )}
      </div>

      {/* Summary text */}
      <p className="text-sm font-medium text-ink">
        {label ??
          `Ideal for ${passengers} Adult${passengers > 1 ? "s" : ""} + ${largeBags} Large Suitcase${largeBags > 1 ? "s" : ""}`}
      </p>
    </div>
  );
}
