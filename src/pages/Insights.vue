<script setup>
import { RouterLink } from 'vue-router'
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'

const blogPosts = [
  {
    slug: 'community-conservation-biodiversity-2025',
    title: 'How Community-Led Conservation Projects Are Saving Biodiversity in 2025',
    excerpt: 'Discover the science-backed strategies and real-world impact of community-driven conservation initiatives that are protecting wildlife, restoring ecosystems, and combating climate change across the globe.',
    author: 'Verdant Future Research Team',
    date: 'December 3, 2025',
    readTime: '12 min read',
    category: 'Conservation Science',
    image: mediaLibrary.blogCommunity,
    featured: true
  },
  {
    slug: 'indigenous-forest-guardians-traditional-knowledge',
    title: 'Indigenous Forest Guardians: How Traditional Knowledge Saves Our Forests',
    excerpt: 'Learn how indigenous communities are using centuries-old wisdom combined with modern technology to protect and restore forest ecosystems, achieving survival rates 40% higher than conventional methods.',
    author: 'Dr. Maria Santos',
    date: 'November 28, 2025',
    readTime: '10 min read',
    category: 'Conservation Practice',
    image: mediaLibrary.blogIndigenous,
    featured: false
  },
  {
    slug: 'ocean-plastic-crisis-circular-solutions',
    title: 'From Crisis to Circular: Innovative Solutions Tackling Ocean Plastic',
    excerpt: 'Explore groundbreaking coastal cleanup initiatives and circular economy models that are removing millions of tons of plastic from our oceans while creating sustainable livelihoods for coastal communities.',
    author: 'James Chen',
    date: 'November 22, 2025',
    readTime: '8 min read',
    category: 'Marine Conservation',
    image: mediaLibrary.blogOcean,
    featured: false
  },
  {
    slug: 'wildlife-corridors-habitat-connectivity',
    title: 'Wildlife Corridors: Reconnecting Fragmented Habitats for Species Survival',
    excerpt: 'Discover how wildlife corridors are proving essential for species migration, genetic diversity, and ecosystem resilience. Real data shows 67% increase in biodiversity in corridor-connected habitats.',
    author: 'Dr. Aisha Okafor',
    date: 'November 15, 2025',
    readTime: '9 min read',
    category: 'Wildlife Protection',
    image: mediaLibrary.blogWildlife,
    featured: false
  },
  {
    slug: 'mangrove-restoration-climate-resilience',
    title: 'Mangrove Restoration: Building Coastal Resilience Against Climate Change',
    excerpt: 'Mangroves sequester 4x more carbon than rainforests and protect coastlines from storms. See how restoration projects are safeguarding communities while fighting climate change.',
    author: 'Verdant Future Ocean Team',
    date: 'November 10, 2025',
    readTime: '11 min read',
    category: 'Ecosystem Restoration',
    image: mediaLibrary.blogMangrove,
    featured: false
  }
]

usePageMeta({
  title: 'Insights',
  description: 'Research-backed blog posts on conservation science, marine protection, wildlife corridors, and regenerative finance.',
  image: mediaLibrary.blogCommunity,
  keywords: [
    'conservation science blog',
    'marine plastic innovation stories',
    'wildlife corridor research',
    'regenerative finance insights'
  ]
})
</script>

<template>
  <div class="page-view">
    <section class="page-hero">
      <div class="hero-copy">
        <p class="eyebrow">Blog & Insights</p>
        <h1>Conservation Knowledge Hub</h1>
        <p class="lead">
          Evidence-based research, field reports, and actionable insights on environmental
          conservation, biodiversity protection, and climate action.
        </p>
      </div>
    </section>

    <section>
      <div class="section-heading">
        <h2>Featured Research</h2>
        <p>In-depth articles backed by science and real-world impact</p>
      </div>

      <div class="blog-grid">
        <article
          v-for="post in blogPosts"
          :key="post.slug"
          class="blog-card lift"
          :class="{ featured: post.featured }"
        >
          <RouterLink :to="`/blogs/${post.slug}`" class="blog-card-link">
            <img :src="post.image" :alt="post.title" class="blog-image" />
            <div class="blog-content">
              <p class="eyebrow">{{ post.category }}</p>
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <div class="blog-meta">
                <span>{{ post.author }}</span>
                <span>•</span>
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>
            </div>
          </RouterLink>
        </article>
      </div>
    </section>

    <section class="page-section cta-panel cta-panel--wide">
      <div class="cta-content">
        <h3>Want to contribute research or collaborate?</h3>
        <p>
          We welcome partnerships with researchers, scientists, and conservation practitioners
          worldwide.
        </p>
      </div>
      <a href="mailto:research@verdantfuture.org" class="accent-button">
        Get in Touch
      </a>
    </section>
  </div>
</template>
