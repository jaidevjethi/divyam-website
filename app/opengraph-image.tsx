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
          <path
            d="M10 5 H14.5 C23.5 5 27.5 9.8 27.5 16 C27.5 22.2 23.5 27 14.5 27 H10 Z"
            stroke="#221c15"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M10 5 V27" stroke="#221c15" strokeWidth="2.6" strokeLinecap="round" />
          <path
            d="M12.8 20.7 C14.8 18.8 16.5 21.9 18.6 20.2 C20 19.1 21.2 19.6 22 20.4"
            stroke="#221c15"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <circle cx="17.3" cy="12.6" r="2.7" fill="#c9952c" />
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
            }}
          >
            ★ {business.googleRating.value} · {business.googleRating.count} Google reviews
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
