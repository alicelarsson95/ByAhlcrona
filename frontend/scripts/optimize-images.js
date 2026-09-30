// Konverterar bilder till WebP, max 1600px bred.
// Användning: node scripts/optimize-images.js <bild> [bild ...]
// WebP-filen sparas bredvid originalet. Originalet lämnas orört.
import { statSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const MAX_WIDTH = 1600;
const QUALITY = 80;

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Ange minst en bild, t.ex. node scripts/optimize-images.js src/assets/portfolio/pizza-time.png");
  process.exit(1);
}

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2) + " MB";

for (const file of files) {
  const { dir, name } = path.parse(file);
  const out = path.join(dir, `${name}.webp`);

  const info = await sharp(file)
    .rotate() // följ kamerans orientering (EXIF)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);

  const before = statSync(file).size;
  console.log(`${path.basename(file)}: ${mb(before)} -> ${mb(info.size)} (${info.width}x${info.height})`);
}
