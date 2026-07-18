import { ImageResponse } from "next/og";
import { business } from "@/content/business";

export const dynamic = "force-static";
export const alt = "Divyam Tours Varanasi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #fbf8f3, #f4eee4)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "serif",
          padding: 80,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginBottom: 28 }}
        >
          <path d="M16 4.4 V7.6" stroke="#221c15" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M7.6 8.4 L9.9 10.7" stroke="#221c15" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M24.4 8.4 L22.1 10.7" stroke="#221c15" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M9.7 18 A 6.3 6.3 0 0 1 22.3 18 Z" fill="#c9952c" />
          <path d="M4.5 18 H27.5" stroke="#221c15" strokeWidth="2.4" strokeLinecap="round" />
          <path
            d="M6.5 23.4 C 9.8 21.6 13.2 25.2 16.5 23.4 C 19.4 21.8 22.8 24.9 25.5 23.2"
            stroke="#221c15"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <path
            d="M10 27.8 C 12.5 26.3 15 28.9 17.5 27.5 C 19.4 26.4 21 27.6 22 28"
            stroke="#221c15"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            fontSize: 110,
            fontWeight: 700,
            color: "#221c15",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          {business.shortName}
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: "#9a3412",
            marginTop: 32,
            fontFamily: "sans-serif",
            letterSpacing: "0.01em",
            textAlign: "center",
          }}
        >
          {business.tagline}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 64,
            gap: 24,
          }}
        >
          <div
            style={{
              padding: "16px 32px",
              background: "#1d1710",
              color: "#fbf8f3",
              fontSize: 28,
              borderRadius: 12,
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "center",
            }}
          >
            Direct booking via WhatsApp
          </div>
          <div
            style={{
              padding: "16px 32px",
              background: "#f7eed9",
              color: "#8f7020",
              fontSize: 28,
              borderRadius: 12,
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#8f7020">
              <path d="M12 2 L14.9 8.6 L22 9.3 L16.7 14.1 L18.2 21.1 L12 17.5 L5.8 21.1 L7.3 14.1 L2 9.3 L9.1 8.6 Z" />
            </svg>
            {business.googleRating.value} · {business.googleRating.count} Google reviews
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
