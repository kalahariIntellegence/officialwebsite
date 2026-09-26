/**
 * Turns the full-size transparent PNGs in `art-source/` into web-sized WebP
 * assets in `public/renders/`. Run with: node scripts/optimize-renders.mjs
 *
 * Each asset is trimmed of its empty alpha margin, resized to the width the
 * layout actually uses, and written at quality 82.
 */
import { readdir, mkdir } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const SRC = 'art-source'
const OUT = 'public/renders'

/** Target widths per asset — hero and landscape render larger than card art. */
const WIDTHS = {
  'acacia-intelligence-tree': 1280,
  'kalahari-landscape': 1600,
  'knowledge-lineage': 1280,
  'intelligence-stack': 900,
  'intelligence-sphere': 900,
  'africa-globe': 900,
  'language-rings': 860,
  'voice-waveform': 940,
  'energy-towers': 940,
  'automation-blocks': 860,
}

await mkdir(OUT, { recursive: true })

const files = (await readdir(SRC)).filter((f) => f.endsWith('.png'))
let total = 0

for (const file of files) {
  const { name } = parse(file)
  const width = WIDTHS[name] ?? 900

  const info = await sharp(join(SRC, file))
    .trim({ threshold: 1 })
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(join(OUT, `${name}.webp`))

  total += info.size
  console.log(
    `${name.padEnd(26)} ${String(info.width).padStart(5)}x${String(info.height).padEnd(5)} ${(info.size / 1024).toFixed(0)} KB`,
  )
}

console.log(`\n${files.length} assets · ${(total / 1024 / 1024).toFixed(2)} MB total`)
