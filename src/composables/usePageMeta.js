import { watchEffect, isRef, unref } from 'vue'

const SITE_URL = 'https://verdantfuture.org'

const updateMetaTag = (selector, attributes) => {
  if (typeof document === 'undefined') return
  let tag = document.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    document.head.appendChild(tag)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      tag.setAttribute(key, value)
    }
  })
}

const updateLinkTag = (rel, href) => {
  if (typeof document === 'undefined' || !href) return
  let link = document.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

const applyMeta = (meta = {}) => {
  if (typeof document === 'undefined' || !meta) return
  const baseTitle = 'Verdant Future'
  const finalTitle = meta.title ? `${meta.title} | ${baseTitle}` : baseTitle
  document.title = finalTitle

  if (meta.title) {
    updateMetaTag('meta[property="og:title"]', { property: 'og:title', content: meta.title })
    updateMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
  }

  if (meta.description) {
    updateMetaTag('meta[name="description"]', { name: 'description', content: meta.description })
    updateMetaTag('meta[property="og:description"]', { property: 'og:description', content: meta.description })
    updateMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description })
  }

  if (meta.image) {
    const fullImageUrl = meta.image.startsWith('http') ? meta.image : `${SITE_URL}${meta.image}`
    updateMetaTag('meta[property="og:image"]', { property: 'og:image', content: fullImageUrl })
    updateMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: fullImageUrl })
    updateMetaTag('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    updateMetaTag('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
  }

  if (meta.keywords?.length) {
    updateMetaTag('meta[name="keywords"]', { name: 'keywords', content: meta.keywords.join(', ') })
  }

  // Set og:type - default to 'website', but can be overridden (e.g., 'article' for blog posts)
  const ogType = meta.type || 'website'
  updateMetaTag('meta[property="og:type"]', { property: 'og:type', content: ogType })

  // Always set og:site_name
  updateMetaTag('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Verdant Future' })
  updateMetaTag('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' })

  const canonical = meta.canonical === false ? null : meta.canonical || `${SITE_URL}${window.location.pathname}`
  if (canonical) {
    updateLinkTag('canonical', canonical)
    updateMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonical })
  }
}

export const usePageMeta = (source) => {
  if (typeof window === 'undefined') return

  const resolveMeta = () => {
    if (typeof source === 'function') return source()
    if (isRef(source)) return unref(source)
    return source
  }

  if (typeof source === 'function' || isRef(source)) {
    watchEffect(() => {
      applyMeta(resolveMeta())
    })
  } else {
    applyMeta(resolveMeta())
  }
}
