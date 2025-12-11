import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { join, basename, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const INPUT_DIR = join(__dirname, '../public/images')
const OUTPUT_DIR = join(__dirname, '../public/images')

// Responsive image sizes to generate
const SIZES = [320, 480, 768, 1024, 1600]

// Quality settings
const WEBP_QUALITY = 82
const WEBP_QUALITY_HERO = 65 // Lower quality for hero image to save bandwidth
const JPEG_QUALITY = 80

async function generateResponsiveImages() {
  console.log('🖼️  Generating responsive WebP images...\n')

  try {
    // Ensure output directory exists
    await mkdir(OUTPUT_DIR, { recursive: true })

    // Read all JPEG files
    const files = await readdir(INPUT_DIR)
    const jpegFiles = files.filter(file => /\.(jpe?g)$/i.test(file))

    console.log(`Found ${jpegFiles.length} JPEG images to process\n`)

    let totalOriginalSize = 0
    let totalWebPSize = 0

    for (const file of jpegFiles) {
      const inputPath = join(INPUT_DIR, file)
      const baseName = basename(file, extname(file))

      console.log(`📸 Processing: ${file}`)

      // Get original image metadata
      const metadata = await sharp(inputPath).metadata()
      const originalWidth = metadata.width

      // Determine quality based on image name
      const quality = baseName.includes('hero-conservation') ? WEBP_QUALITY_HERO : WEBP_QUALITY

      // Generate WebP versions at different sizes
      for (const width of SIZES) {
        // Skip if target size is larger than original
        if (width > originalWidth) continue

        const outputFileName = `${baseName}-${width}w.webp`
        const outputPath = join(OUTPUT_DIR, outputFileName)

        try {
          const info = await sharp(inputPath)
            .resize(width, null, {
              withoutEnlargement: true,
              fit: 'inside'
            })
            .webp({ quality })
            .toFile(outputPath)

          console.log(`  ✓ ${width}w: ${(info.size / 1024).toFixed(1)} KB`)
          totalWebPSize += info.size
        } catch (err) {
          console.error(`  ✗ Error creating ${width}w:`, err.message)
        }
      }

      // Also create full-size WebP version
      const fullWebPPath = join(OUTPUT_DIR, `${baseName}.webp`)
      try {
        const info = await sharp(inputPath)
          .webp({ quality })
          .toFile(fullWebPPath)

        console.log(`  ✓ Full size WebP: ${(info.size / 1024).toFixed(1)} KB`)
        totalWebPSize += info.size
      } catch (err) {
        console.error(`  ✗ Error creating full WebP:`, err.message)
      }

      // Get original file size
      const originalStats = await sharp(inputPath).metadata()
      const originalSize = originalStats.size || 0
      totalOriginalSize += originalSize

      console.log(`  Original JPEG: ${(metadata.size / 1024).toFixed(1)} KB\n`)
    }

    console.log('\n✨ Generation complete!')
    console.log(`📊 Total original size: ${(totalOriginalSize / 1024).toFixed(1)} KB`)
    console.log(`📊 Total WebP size: ${(totalWebPSize / 1024).toFixed(1)} KB`)

    if (totalOriginalSize > 0) {
      const savings = ((totalOriginalSize - totalWebPSize) / totalOriginalSize * 100).toFixed(1)
      console.log(`💰 Estimated savings: ${savings}% when serving WebP`)
    }

  } catch (error) {
    console.error('❌ Error generating images:', error)
    process.exit(1)
  }
}

generateResponsiveImages()
