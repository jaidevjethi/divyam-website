import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 * - BASE_PATH / NEXT_PUBLIC_BASE_PATH are set by the deploy workflow
 *   (e.g. "/divyam-website" for project pages); empty locally and on a
 *   custom domain.
 * - The custom loader serves pre-compressed source images as-is and
 *   prefixes the base path (next/image skips basePath on its own).
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    // Match the rungs built by scripts/gen-image-variants.mjs so next/image
    // asks for widths that actually exist, instead of emitting a srcset full
    // of duplicate URLs that all resolve to the same file.
    deviceSizes: [400, 800, 1200, 1920],
    imageSizes: [96, 200, 384],
  },
};

export default nextConfig;
