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
  },
};

export default nextConfig;
