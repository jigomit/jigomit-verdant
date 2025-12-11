<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isReady = ref(false)

onMounted(() => {
  // Mark app as ready immediately (no delay)
  isReady.value = true

  if (typeof document === 'undefined') return
  if (document.getElementById('vf-structured-data')) return

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://verdantfuture.org/#organization',
        name: 'Verdant Future',
        url: 'https://verdantfuture.org',
        logo: {
          '@type': 'ImageObject',
          url: 'https://verdantfuture.org/favicon.svg'
        },
        sameAs: ['https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.youtube.com/']
      },
      {
        '@type': 'WebSite',
        '@id': 'https://verdantfuture.org/#website',
        url: 'https://verdantfuture.org',
        name: 'Verdant Future',
        publisher: { '@id': 'https://verdantfuture.org/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://verdantfuture.org/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = 'vf-structured-data'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
})
</script>

<template>
  <div class="app-shell" :class="{ 'ready': isReady }">
    <div class="ambient ambient-one" aria-hidden="true"></div>
    <div class="ambient ambient-two" aria-hidden="true"></div>

    <Navbar />

    <main>
      <RouterView v-slot="{ Component, route }">
        <transition name="page-fade" mode="out-in">
          <div class="page-transition-shell" :key="route.fullPath">
            <component :is="Component" />
          </div>
        </transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>
