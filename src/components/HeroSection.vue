<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroMetrics = [
  { label: 'Hectares restored', value: '540+' },
  { label: 'Communities mobilized', value: '127' },
  { label: 'Volunteers activated', value: '400k' }
]

const LOOP_RESTART_THRESHOLD = 0.3
const videoRef = ref(null)
const isVideoLoaded = ref(false)
const isMobile = ref(false)
const shouldLoadVideo = ref(false)
const isPlaying = ref(true)
let observer = null

// Detect mobile devices to show image fallback (saves bandwidth)
onMounted(() => {
  isMobile.value = window.innerWidth < 768

  if (!isMobile.value && videoRef.value) {
    // Lazy load video using IntersectionObserver
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo.value) {
            shouldLoadVideo.value = true
            loadVideoSources()
          }
        })
      },
      { threshold: 0.1 } // Load when 10% visible
    )
    observer.observe(videoRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

const loadVideoSources = () => {
  if (!videoRef.value) return

  // Inject video sources from data-src attributes
  const sources = videoRef.value.querySelectorAll('source')
  sources.forEach(source => {
    if (source.dataset.src) {
      source.src = source.dataset.src
    }
  })

  // Load and play video
  videoRef.value.load()
  videoRef.value.play()
    .then(() => {
      isPlaying.value = true
    })
    .catch((err) => {
      console.warn('Hero video autoplay blocked:', err)
      isPlaying.value = false
    })
}

const handleVideoLoaded = () => {
  isVideoLoaded.value = true
}

const togglePlayPause = () => {
  const video = videoRef.value
  if (!video) return

  if (video.paused) {
    video.play()
      .then(() => {
        isPlaying.value = true
      })
      .catch((err) => {
        console.warn('Video play failed:', err)
      })
  } else {
    video.pause()
    isPlaying.value = false
  }
}

const handleTimeUpdate = () => {
  const video = videoRef.value
  if (!video || !Number.isFinite(video.duration)) return

  const timeRemaining = video.duration - video.currentTime

  // Seamless loop: restart video before it ends to avoid visual gap
  if (timeRemaining > 0 && timeRemaining < LOOP_RESTART_THRESHOLD) {
    video.currentTime = 0
    video.play().catch((err) => {
      console.warn('Hero video loop play failed:', err)
    })
  }
}

const handleVideoEnd = () => {
  const video = videoRef.value
  if (!video) return

  // Backup: restart if we somehow reach the end
  video.currentTime = 0
  video.play().catch((err) => {
    console.warn('Hero video end play failed:', err)
  })
}
</script>

<template>
  <section id="hero" class="hero-image">
    <!-- Show video on desktop, image on mobile -->
    <video
      v-if="!isMobile"
      ref="videoRef"
      class="hero-image__background"
      muted
      loop
      playsinline
      preload="none"
      poster="/images/hero-conservation.jpg"
      @canplay="handleVideoLoaded"
      @timeupdate="handleTimeUpdate"
      @ended="handleVideoEnd"
      :class="{ 'video-loaded': isVideoLoaded }"
    >
      <!-- WebM primary (better compression) -->
      <source data-src="/media/hero-optimized.webm" type="video/webm" />
      <!-- MP4 fallback for Safari -->
      <source data-src="/media/hero-optimized.mp4" type="video/mp4" />
      <!-- Fallback image if video fails -->
      <img
        src="/images/hero-conservation.jpg"
        alt="Environmental conservation - community planting trees"
      />
    </video>

    <!-- Mobile fallback image -->
    <img
      v-else
      src="/images/hero-conservation.jpg"
      alt="Environmental conservation - community planting trees"
      class="hero-image__background"
      loading="eager"
      fetchpriority="high"
      decoding="async"
    />

    <div class="hero-image__overlay" aria-hidden="true"></div>
    <div class="hero-image__content">
      <div class="hero-copy">
        <p class="eyebrow">Verdant Future · Field Dispatch</p>
        <h1>Root solutions for trees, climate, oceans, and wildlife.</h1>
        <p class="hero-subtitle">Together, we restore the Earth.</p>
        <p class="lead">
          We mobilize communities to plant resilient forests, accelerate climate literacy, end plastic leakage,
          and protect keystone species through data-backed stewardship.
        </p>
        <div class="hero-cta">
          <a class="accent-button large" href="#focus">Explore our mission</a>
          <a class="ghost-button large" href="mailto:connect@verdantfuture.org">Bring us to your region</a>
        </div>
        <div class="hero-metrics">
          <div v-for="metric in heroMetrics" :key="metric.label">
            <p class="value">{{ metric.value }}</p>
            <p class="detail">{{ metric.label }}</p>
          </div>
        </div>

        <!-- Video control button -->
        <button
          v-if="!isMobile && shouldLoadVideo"
          @click="togglePlayPause"
          class="video-control-btn"
          :aria-label="isPlaying ? 'Pause background video' : 'Play background video'"
          type="button"
        >
          {{ isPlaying ? 'Pause' : 'Play' }} background motion
        </button>
      </div>
    </div>
  </section>
</template>
