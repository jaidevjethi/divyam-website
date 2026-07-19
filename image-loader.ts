import manifest from "./content/image-manifest.json";

/**
 * Custom next/image loader for static export.
 *
 * Two jobs:
 *
 * 1. Base path. next/image does NOT apply `basePath` to image src when the
 *    optimizer is bypassed, which breaks every image on GitHub Pages project
 *    sites (served from /<repo>).
 *
 * 2. Responsive widths. There is no server to resize on a static export, so
 *    `scripts/gen-image-variants.mjs` pre-builds smaller widths and records
 *    them in content/image-manifest.json. This maps the width next/image asks
 *    for onto the smallest pre-built rung that still covers it, which is what
 *    lets next/image emit a real srcset. Without this every device downloaded
 *    the full-resolution file (Lighthouse measured 215KB of waste on mobile).
 */

type Rung = { w: number; src: string };

const rungsBySrc = manifest as Record<string, Rung[]>;

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const prefix = (path: string) => (path.startsWith("/") ? `${basePath}${path}` : path);

  const rungs = rungsBySrc[src];
  if (!rungs || rungs.length === 0) return prefix(src);

  // Smallest rung that still covers the requested width; otherwise the largest.
  const pick = rungs.find((r) => r.w >= width) ?? rungs[rungs.length - 1];
  return prefix(pick.src);
}
