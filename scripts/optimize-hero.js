import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const IMAGES_DIR = join(__dirname, '../public/images')
const HERO_QUALITY = 25 // Ultra compressed for LCP optimization

async function optimizeHeroImages() {
  console.log('🎯 Optimizing hero images for LCP performance...\n')

  try {
    const files = await readdir(IMAGES_DIR)
    const heroFiles = files.filter(file => file.startsWith('hero-conservation-') && file.endsWith('.webp'))

    console.log(`Found ${heroFiles.length} hero images to optimize\n`)

    for (const file of heroFiles) {
      const inputPath = join(IMAGES_DIR, file)
      const tempPath = join(IMAGES_DIR, `temp-${file}`)

      console.log(`📸 Optimizing: ${file}`)

      const originalStats = await sharp(inputPath).metadata()
      const originalSize = originalStats.size

      // Re-compress with lower quality
      const info = await sharp(inputPath)
        .webp({ quality: HERO_QUALITY })
        .toFile(tempPath)

      // Replace original with optimized
      await sharp(tempPath).toFile(inputPath)

      // Clean up temp file
      const fs = await import('fs/promises')
      await fs.unlink(tempPath)

      const savings = ((originalSize - info.size) / originalSize * 100).toFixed(1)
      console.log(`  ✓ ${(originalSize / 1024).toFixed(1)} KB → ${(info.size / 1024).toFixed(1)} KB (${savings}% reduction)\n`)
    }

    console.log('✨ Hero image optimization complete!')

  } catch (error) {
    console.error('❌ Error optimizing hero images:', error)
    process.exit(1)
  }
}

optimizeHeroImages()
