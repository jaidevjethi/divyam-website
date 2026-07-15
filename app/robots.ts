import type { MetadataRoute } from "next";
import { business, isPlaceholder } from "@/content/business";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = isPlaceholder(business.url) ? "https://example.com" : business.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
