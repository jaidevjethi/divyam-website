import type { MetadataRoute } from "next";
import { routes } from "@/content/routes";
import { business, isPlaceholder } from "@/content/business";

export const dynamic = "force-static";

function siteUrl(): string {
  if (isPlaceholder(business.url)) return "https://example.com";
  return business.url;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  const staticPages = [
    "/",
    "/taxi-services",
    "/airport-transfer",
    "/local-sightseeing",
    "/outstation-taxi",
    "/tour-packages",
    "/tour-guide",
    "/fleet",
    "/routes",
    "/about",
    "/contact",
    "/faq",
    "/reviews",
  ];

  const routePages = routes.map((r) => `/routes/${r.slug}`);

  return [...staticPages, ...routePages].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/routes/") ? 0.8 : 0.7,
  }));
}
