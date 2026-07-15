import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { RoutePageTemplate } from "@/components/route/RoutePageTemplate";
import { getRoute } from "@/content/routes";

const SLUG = "varanasi-full-day-sightseeing";

export function generateMetadata(): Metadata {
  const route = getRoute(SLUG);
  if (!route) return {};
  return buildMetadata({
    title: route.title,
    description: route.description,
    path: `/routes/${SLUG}`,
  });
}

export default function Page() {
  const route = getRoute(SLUG);
  if (!route) notFound();
  return <RoutePageTemplate route={route} />;
}
