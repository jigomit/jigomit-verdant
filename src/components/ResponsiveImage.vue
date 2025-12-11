<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Base filename without extension (e.g., 'hero-conservation')
  src: {
    type: String,
    required: true
  },
  // Alt text for accessibility
  alt: {
    type: String,
    required: true
  },
  // Sizes attribute for responsive images
  sizes: {
    type: String,
    default: '100vw'
  },
  // Fetch priority for critical images
  fetchpriority: {
    type: String,
    default: 'auto',
    validator: (value) => ['high', 'low', 'auto'].includes(value)
  },
  // Loading strategy
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  },
  // Image class
  imgClass: {
    type: String,
    default: ''
  },
  // Available widths for srcset
  widths: {
    type: Array,
    default: () => [320, 480, 768, 1024, 1600]
  }
})

// Extract directory and filename from src
const imageInfo = computed(() => {
  const parts = props.src.split('/')
  const filename = parts[parts.length - 1]
  const dir = parts.slice(0, -1).join('/')
  const basePath = dir ? `${dir}/` : ''

  return {
    basePath,
    filename
  }
})

// Generate srcset for WebP
const webpSrcset = computed(() => {
  const { basePath, filename } = imageInfo.value
  return props.widths
    .map(w => `${basePath}${filename}-${w}w.webp ${w}w`)
    .join(', ')
})

// Fallback src (original JPEG - full size)
const fallbackSrc = computed(() => {
  return `${props.src}.jpg`
})
</script>

<template>
  <picture>
    <!-- WebP sources with responsive sizes -->
    <source
      type="image/webp"
      :srcset="webpSrcset"
      :sizes="sizes"
    />

    <!-- Fallback img element (original JPEG) -->
    <img
      :src="fallbackSrc"
      :alt="alt"
      :loading="loading"
      :fetchpriority="fetchpriority"
      :class="imgClass"
      decoding="async"
    />
  </picture>
</template>
