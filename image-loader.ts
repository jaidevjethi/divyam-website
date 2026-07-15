/**
 * Custom next/image loader for static export.
 *
 * next/image does NOT apply `basePath` to image src when the optimizer is
 * bypassed, which breaks every image on GitHub Pages project sites
 * (served from /<repo>). This loader prefixes local image paths with the
 * build-time base path and performs no resizing (static hosting).
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
