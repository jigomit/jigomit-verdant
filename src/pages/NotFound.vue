<script setup>
import { usePageMeta } from '../composables/usePageMeta'

// Set page metadata
usePageMeta({
  title: '404 - Page Not Found | Verdant Future',
  description: 'The page you are looking for could not be found. Return to Verdant Future to explore our environmental conservation work.',
  canonical: 'https://verdantfuture.org/404'
})
</script>

<template>
  <section class="not-found-page">
    <div class="not-found-content">
      <p class="not-found-code">404</p>
      <h1 class="not-found-title">Off the Beaten Path</h1>
      <p class="not-found-message">
        This page has wandered off like a seedling carried by the wind.
        Let's help you find your way back to fertile ground.
      </p>

      <div class="not-found-links">
        <router-link to="/" class="accent-button">Return Home</router-link>
        <router-link to="/impact-atlas" class="ghost-button">Explore Our Impact</router-link>
        <router-link to="/blogs" class="ghost-button">Read Field Stories</router-link>
      </div>

      <div class="not-found-footer">
        <p>Looking for something specific?</p>
        <nav class="quick-links">
          <router-link to="/tree-planting">Tree Planting</router-link>
          <router-link to="/climate-action">Climate Action</router-link>
          <router-link to="/plastic-reduction">Plastic Reduction</router-link>
          <router-link to="/wildlife-protection">Wildlife Protection</router-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found-page {
  min-height: calc(100vh - 80px - 450px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space);
  padding-block: clamp(4rem, 10vh, 8rem);
  background: linear-gradient(
    135deg,
    var(--mint-50) 0%,
    rgba(230, 248, 237, 0.6) 100%
  );
}

.not-found-content {
  max-width: 700px;
  text-align: center;
}

.not-found-code {
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, var(--mint-600), var(--mint-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 1rem;
}

.not-found-title {
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--ink);
  margin: 0 0 1.5rem;
  font-weight: 700;
}

.not-found-message {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--ink);
  opacity: 0.85;
  margin-bottom: 3rem;
  max-width: 580px;
  margin-inline: auto;
}

.not-found-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.not-found-footer {
  padding-top: 3rem;
  border-top: 1px solid rgba(32, 146, 110, 0.2);
}

.not-found-footer p {
  font-size: 0.95rem;
  color: var(--ink);
  opacity: 0.7;
  margin-bottom: 1rem;
  font-weight: 600;
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.quick-links a {
  color: var(--mint-700);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  position: relative;
}

.quick-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--mint-600);
  transition: width 0.2s ease;
}

.quick-links a:hover {
  color: var(--mint-600);
}

.quick-links a:hover::after {
  width: 100%;
}

@media (max-width: 640px) {
  .not-found-page {
    padding-block: clamp(3rem, 8vh, 6rem);
  }

  .not-found-code {
    font-size: clamp(4rem, 20vw, 6rem);
  }

  .not-found-links {
    flex-direction: column;
  }

  .not-found-links a {
    width: 100%;
  }

  .quick-links {
    gap: 1rem;
  }
}
</style>
