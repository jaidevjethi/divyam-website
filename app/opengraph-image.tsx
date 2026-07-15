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
        <div
          style={{
            fontSize: 120,
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
