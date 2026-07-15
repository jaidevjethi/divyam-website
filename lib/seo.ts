import type { Metadata } from "next";
import { business, isPlaceholder } from "@/content/business";

const SITE_NAME = business.shortName;

function siteUrl(): string {
  if (isPlaceholder(business.url)) {
    return "https://example.com";
  }
  return business.url;
}

type BuildMetadataArgs = {
  title: string;                  // page-specific title (without site suffix)
  description: string;            // ≤155 chars, action-led
  path: string;                   // "/" or "/airport-transfer" etc.
  noindex?: boolean;
  openGraphImage?: string;        // path under /og/ or absolute
};

export function buildMetadata(args: BuildMetadataArgs): Metadata {
  const { title, description, path, noindex, openGraphImage } = args;

  // Brand suffix only when it fits a ~60-char SERP title; long descriptive
  // titles (route pages) already carry place + intent and stand alone.
  const hasBrand =
    title.toLowerCase().includes(SITE_NAME.toLowerCase()) ||
    title.toLowerCase().includes("divyam");
  const withBrand = `${title} | ${SITE_NAME}`;
  const fullTitle = hasBrand ? title : withBrand.length <= 60 ? withBrand : title;

  const url = `${siteUrl()}${path === "/" ? "" : path}`;

  return {
    metadataBase: new URL(siteUrl()),
    // absolute: opt out of the root layout's "%s | Divyam Tours" template —
    // it would double-brand every title built here.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      ...(openGraphImage ? { images: [{ url: openGraphImage, width: 1200, height: 630, alt: fullTitle }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(openGraphImage ? { images: [openGraphImage] } : {}),
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
