import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 * - BASE_PATH is set by the deploy workflow (e.g. "/divyam-website" for
 *   project pages); empty locally and on a custom domain.
 * - Images are unoptimized because the on-demand optimizer needs a server;
 *   source images are pre-compressed (~100–560 KB).
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
