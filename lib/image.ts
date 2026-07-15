/**
 * Image size presets used across the site.
 * Passing through Next/Image with consistent `sizes` keeps the
 * picked source close to actual rendered size for performance.
 */

export const imagePresets = {
  hero: {
    width: 1920,
    height: 1080,
    sizes: "(max-width: 1024px) 100vw, 60vw",
  },
  heroAside: {
    width: 900,
    height: 1200,
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  band: {
    width: 1920,
    height: 820,
    sizes: "100vw",
  },
  thumbnail: {
    width: 192,
    height: 192,
    sizes: "96px",
  },
  thumbnailWide: {
    width: 240,
    height: 180,
    sizes: "(max-width: 1024px) 80px, 120px",
  },
  routeThumb: {
    width: 128,
    height: 128,
    sizes: "64px",
  },
  packagePortrait: {
    width: 800,
    height: 1000,
    sizes: "(max-width: 1024px) 100vw, 35vw",
  },
  vehicle: {
    width: 384,
    height: 288,
    sizes: "(max-width: 1024px) 80px, 192px",
  },
  story: {
    width: 800,
    height: 1000,
    sizes: "(max-width: 1024px) 100vw, 33vw",
  },
  operator: {
    width: 400,
    height: 400,
    sizes: "200px",
  },
} as const;

export type ImagePreset = keyof typeof imagePresets;
