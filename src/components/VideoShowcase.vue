<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  videos: {
    type: Array,
    required: true
  }
})

const LOOP_RESTART_THRESHOLD = 0.3
const videoRefs = ref([])
const loadedVideos = ref([])
const pausedVideos = ref([])
const observedVideos = ref([])
let observer = null

const setVideoRef = (index) => (el) => {
  if (el) {
    videoRefs.value[index] = el
  }
}

const playVideo = (index) => {
  const video = videoRefs.value[index]
  if (!video) return

  // Load video source if not loaded yet
  if (!observedVideos.value.includes(index)) {
    const source = video.getAttribute('data-src')
    if (source) {
      video.src = source
      video.load()
    }
    observedVideos.value.push(index)
  }

  video.play()
    .then(() => {
      pausedVideos.value = pausedVideos.value.filter(i => i !== index)
    })
    .catch((err) => {
      console.warn(`Video ${index} autoplay blocked:`, err)
      pausedVideos.value.push(index)
    })
}

const pauseVideo = (index) => {
  const video = videoRefs.value[index]
  if (!video) return

  video.pause()
  if (!pausedVideos.value.includes(index)) {
    pausedVideos.value.push(index)
  }
}

const togglePlayback = (index) => {
  if (isPaused(index)) {
    playVideo(index)
  } else {
    pauseVideo(index)
  }
}

const handleCanPlay = (index) => {
  if (!loadedVideos.value.includes(index)) {
    loadedVideos.value.push(index)
  }
  playVideo(index)
}

const handleTimeUpdate = (index) => {
  const video = videoRefs.value[index]
  if (!video || !Number.isFinite(video.duration)) return

  const timeRemaining = video.duration - video.currentTime

  // Seamless loop: restart video before it ends to avoid visual gap
  if (timeRemaining > 0 && timeRemaining < LOOP_RESTART_THRESHOLD) {
    video.currentTime = 0
    playVideo(index)
  }
}

const handleVideoEnd = (index) => {
  const video = videoRefs.value[index]
  if (!video) return

  video.currentTime = 0
  playVideo(index)
}

const handleError = (index, event) => {
  console.error(`Video ${index} error:`, event)
}

const isPaused = (index) => {
  return pausedVideos.value.includes(index)
}

const isLoaded = (index) => {
  return loadedVideos.value.includes(index)
}

onMounted(() => {
  // Setup IntersectionObserver for lazy loading videos
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target
          const index = parseInt(video.getAttribute('data-index'))

          // Load video source when it enters viewport
          if (!observedVideos.value.includes(index)) {
            const source = video.getAttribute('data-src')
            if (source) {
              video.src = source
              video.load()
            }
            observedVideos.value.push(index)
          }

          // Unobserve after loading
          observer.unobserve(video)
        }
      })
    },
    {
      rootMargin: '50px', // Load slightly before entering viewport
      threshold: 0.1
    }
  )

  // Observe all videos
  videoRefs.value.forEach((video) => {
    if (video) {
      observer.observe(video)
    }
  })
})

onUnmounted(() => {
  // Cleanup IntersectionObserver
  if (observer) {
    observer.disconnect()
  }

  // Cleanup video resources
  videoRefs.value.forEach((video) => {
    if (video) {
      video.pause()
      video.removeAttribute('src')
    }
  })
})
</script>

<template>
  <section id="see-us-in-action" class="video-showcase surface">
    <div class="section-heading">
      <h2>See Us In Action</h2>
      <p>Watch our teams make a real difference across four vital conservation areas.</p>
    </div>

    <div class="video-grid">
      <article
        v-for="(video, index) in videos"
        :key="video.title"
        class="video-card lift"
      >
        <div class="video-wrapper">
          <!-- Video element with lazy loading -->
          <video
            :ref="setVideoRef(index)"
            :id="`video-${index}`"
            :poster="video.poster"
            :data-src="video.src"
            :data-index="index"
            muted
            loop
            playsinline
            preload="none"
            loading="lazy"
            decoding="async"
            @canplay="handleCanPlay(index)"
            @timeupdate="handleTimeUpdate(index)"
            @ended="handleVideoEnd(index)"
            @error="handleError(index, $event)"
            :class="{ 'video-loaded': isLoaded(index) }"
          >
            Your browser does not support video playback.
          </video>

          <!-- Loading Overlay (shown while video loads) -->
          <div v-if="!isLoaded(index)" class="video-loading-overlay">
            <div class="video-spinner">
              <div class="spinner-leaf"></div>
              <div class="spinner-leaf"></div>
              <div class="spinner-leaf"></div>
            </div>
            <p class="loading-hint">Loading video...</p>
          </div>

          <!-- Play/Pause control button (always visible at bottom-right) -->
          <button
            type="button"
            class="video-control-button"
            @click="togglePlayback(index)"
            :aria-label="isPaused(index) ? 'Play video' : 'Pause video'"
            :aria-pressed="!isPaused(index)"
          >
            <!-- Play Icon (shown when paused) -->
            <svg v-if="isPaused(index)" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.95)" stroke="var(--mint-700)" stroke-width="1.5"/>
              <path d="M10 8L16 12L10 16V8Z" fill="var(--mint-700)"/>
            </svg>
            <!-- Pause Icon (shown when playing) -->
            <svg v-else width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.95)" stroke="var(--mint-700)" stroke-width="1.5"/>
              <rect x="9" y="7" width="2" height="10" fill="var(--mint-700)"/>
              <rect x="13" y="7" width="2" height="10" fill="var(--mint-700)"/>
            </svg>
          </button>
        </div>

        <div class="video-info">
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
