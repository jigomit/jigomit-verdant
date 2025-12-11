<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import brandMark from '../assets/logo.svg'
import { primaryNavLinks } from '../data/navLinks'

const isMenuOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header class="site-header">
    <div class="nav-inner">
      <RouterLink to="/" class="logo-row" @click="closeMenu">
        <img :src="brandMark" alt="Verdant Future logo" />
        <p class="brand-name">Verdant Future</p>
      </RouterLink>

      <button
        :class="['menu-toggle', { 'menu-toggle--open': isMenuOpen }]"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="primary-navigation" :class="['primary-nav', { open: isMenuOpen }]">
        <RouterLink
          v-for="link in primaryNavLinks"
          :key="link.label"
          class="nav-link"
          :class="{ active: route.path === link.to }"
          :to="link.to"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
        <a class="accent-button" href="mailto:connect@verdantfuture.org" @click="closeMenu">Partner with us</a>
      </nav>
    </div>
  </header>
</template>
