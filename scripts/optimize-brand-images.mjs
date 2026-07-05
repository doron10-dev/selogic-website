/**
 * Generates .webp siblings for PNG/JPEG assets in public/brand.
 * Usage: npm run brand:webp
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const BRAND_DIR = path.join(process.cwd(), "public", "brand");
const EXT = /\.(png|jpe?g)$/i;

async function optimizeDir(dir) {
  if (!fs.existsSync(dir)) {
    console.error("Missing directory:", dir);
    process.exit(1);
  }

  let count = 0;
  const entries = await fs.promises.readdir(dir);

  for (const name of entries) {
    if (!EXT.test(name)) continue;

    const input = path.join(dir, name);
    const output = path.join(dir, name.replace(EXT, ".webp"));
    const before = (await fs.promises.stat(input)).size;

    await sharp(input).webp({ quality: 82, effort: 4 }).toFile(output);

    const after = (await fs.promises.stat(output)).size;
    const saved = Math.round((1 - after / before) * 100);
    console.log(`${name} → ${path.basename(output)} (${saved}% smaller)`);
    count += 1;
  }

  if (count === 0) {
    console.log("No PNG/JPEG files found in public/brand");
  } else {
    console.log(`Wrote ${count} WebP file(s)`);
  }
}

await optimizeDir(BRAND_DIR);
