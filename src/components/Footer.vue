<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import brandMark from '../assets/logo.svg'
import { primaryNavLinks, resourceLinks } from '../data/navLinks'

const footerColumns = [
  {
    title: 'Programs',
    links: primaryNavLinks.map((link) => ({ ...link }))
  },
  {
    title: 'Resources',
    links: resourceLinks.map((link) => ({ ...link }))
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Partner with us', to: '/partner' },
      { label: 'Volunteer opportunities', to: '/volunteer' },
      { label: 'Donate & support', to: '/donate' },
      { label: 'Corporate partnerships', to: '/corporate-partnerships' }
    ]
  }
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' }
]

const newsletterEmail = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
  if (!newsletterEmail.value.trim()) return

  isSubscribed.value = true
  newsletterEmail.value = ''

  setTimeout(() => {
    isSubscribed.value = false
  }, 4000)
}
</script>

<template>
  <section class="newsletter-bar">
    <div class="newsletter-copy">
      <p class="eyebrow">Stay in the canopy</p>
      <p>Monthly field notes and fast calls-to-action.</p>
    </div>
    <form class="newsletter-inline" @submit.prevent="handleSubscribe">
      <label class="visually-hidden" for="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        v-model="newsletterEmail"
        type="email"
        placeholder="you@example.com"
        required
      />
      <button type="submit" class="accent-button">Join</button>
      <span v-if="isSubscribed" class="success-text">Welcome aboard!</span>
    </form>
  </section>

  <footer class="site-footer container">
    <div class="footer-top">
      <RouterLink to="/" class="logo-row">
        <img :src="brandMark" alt="Verdant Future logo" loading="lazy" />
        <p class="brand-name">Verdant Future</p>
      </RouterLink>
      <p class="brand-tagline">Future-focused conservation studio.</p>
      <div class="social-icons">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          :class="['social-icon', social.icon]"
          target="_blank"
          rel="noreferrer"
          :aria-label="social.label"
        >
          <svg v-if="social.icon === 'instagram'" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
            <path
              d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm8 1a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
            />
          </svg>
          <svg v-else-if="social.icon === 'facebook'" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
            <path
              d="M14 8.5V6.5C14 5.67 14.67 5 15.5 5H18V2H14.5C12 2 10 4 10 6.5V8.5H7v3h3v10h4v-10h3l0.5-3H14z"
            />
          </svg>
          <svg v-else-if="social.icon === 'youtube'" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
            <path
              d="M22 8.5a3 3 0 0 0-2.1-2.8C17.8 5 12 5 12 5s-5.8 0-7.9.7A3 3 0 0 0 2 8.5C2 10.7 2 13 2 13s0 2.3.1 4.5a3 3 0 0 0 2.1 2.8C6.2 21 12 21 12 21s5.8 0 7.9-.7a3 3 0 0 0 2.1-2.8c.1-2.2.1-4.5.1-4.5s0-2.3-.1-4.5Z"
            />
            <path d="M10 9.75v4.5l4-2.25-4-2.25Z" fill="#fff" />
          </svg>
          <span class="visually-hidden">{{ social.label }}</span>
        </a>
      </div>
    </div>

    <div class="footer-grid">
      <div class="footer-column" v-for="column in footerColumns" :key="column.title">
        <p class="eyebrow">{{ column.title }}</p>
        <template v-for="link in column.links" :key="link.label">
          <RouterLink v-if="link.to" :to="link.to" class="footer-link">
            {{ link.label }}
          </RouterLink>
          <a v-else :href="link.href" class="footer-link">
            {{ link.label }}
          </a>
        </template>
      </div>
    </div>

    <div class="footer-bar">
      <p>© {{ new Date().getFullYear() }} Verdant Future · connect@verdantfuture.org · +1 (555) 391-2044</p>
    </div>
  </footer>
</template>
