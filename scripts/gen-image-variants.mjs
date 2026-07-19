/**
 * Generate responsive WebP variants for /public/images.
 *
 * Why: the site is a static export, so there is no server-side image
 * optimisation. Without pre-built widths every device downloads the
 * full-resolution file (Lighthouse measured 215KB of waste on mobile).
 *
 * Strategy: the ORIGINAL file stays as the largest rung (no re-encode, so
 * no generation loss). We only add the smaller widths below it.
 *
 *   normal images -> 400, 800  (+ original)
 *   full-bleed bands -> 960    (+ original, which is 1920)
 *
 * Those cover the real cases: 375px phone at 1x and 2x, cards at 1x/2x,
 * page-header portraits, and full-width bands on desktop.
 *
 * Output: public/images/<name>-<width>.webp and content/image-manifest.json
 * Run: node scripts/gen-image-variants.mjs
 */
import sharp from "sharp";
import { readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const IMAGES_DIR = "public/images";
const MANIFEST = "content/image-manifest.json";
const QUALITY = 78; // matches how the originals were encoded

/** Full-bleed bands render edge-to-edge, so they need a taller ladder. */
const isBand = (name) => /^band-|^hero-dawn-ghat/.test(name);

/**
 * A generated variant, e.g. "route-sarnath@400w.webp". Never re-process these.
 * The "@<width>w" marker matters: several ORIGINALS legitimately end in a
 * number ("route-airport-2.webp", "vehicle-sedan-2.webp"), so a plain
 * "-<digits>" suffix would silently skip them as if they were variants.
 */
const isVariant = (file) => /@\d+w\.webp$/.test(file);

const ladderFor = (name) => (isBand(name) ? [960] : [400, 800]);

const sources = readdirSync(IMAGES_DIR)
  .filter((f) => f.endsWith(".webp") && !isVariant(f))
  .sort();

const manifest = {};
let addedFiles = 0;
let addedBytes = 0;

for (const file of sources) {
  const name = file.replace(/\.webp$/, "");
  const srcPath = join(IMAGES_DIR, file);
  const meta = await sharp(srcPath).metadata();
  const srcWidth = meta.width;

  const rungs = [];

  for (const width of ladderFor(name)) {
    // Never upscale: a rung at or above the source is pointless.
    if (width >= srcWidth) continue;

    const outFile = `${name}@${width}w.webp`;
    const outPath = join(IMAGES_DIR, outFile);

    if (!existsSync(outPath)) {
      await sharp(srcPath).resize(width).webp({ quality: QUALITY }).toFile(outPath);
      addedFiles++;
    }
    addedBytes += statSync(outPath).size;
    rungs.push({ w: width, src: `/images/${outFile}` });
  }

  // The untouched original is always the largest rung.
  rungs.push({ w: srcWidth, src: `/images/${file}` });

  manifest[`/images/${file}`] = rungs;
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

const originalBytes = sources.reduce(
  (sum, f) => sum + statSync(join(IMAGES_DIR, f)).size,
  0,
);
const kb = (b) => Math.round(b / 1024);
console.log(`sources:        ${sources.length}`);
console.log(`variants added: ${addedFiles} (${kb(addedBytes)}KB)`);
console.log(`originals:      ${kb(originalBytes)}KB`);
console.log(`total on disk:  ${kb(originalBytes + addedBytes)}KB`);
console.log(`manifest:       ${MANIFEST}`);
