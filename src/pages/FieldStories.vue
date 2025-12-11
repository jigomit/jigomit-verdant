<script setup>
import { RouterLink } from 'vue-router'
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'

const heroHighlights = [
  { label: 'Field labs live', value: '34' },
  { label: 'Storytellers trained', value: '420' },
  { label: 'Listener minutes', value: '2.4M' }
]

const storyFeatures = [
  {
    title: 'Mangrove Night Shift',
    location: 'Manila Bay · Philippines',
    summary: 'Nighttime planting crews sync tide forecasts with LED drones to reclaim blue-carbon edges.',
    theme: 'Blue carbon',
    media: mediaLibrary.fieldMangrove
  },
  {
    title: 'Sahel Seedball Airlift',
    location: 'Kano · Nigeria',
    summary: 'Women-run fab labs print seed pods that sprout with the first rains, tracked by SMS diaries.',
    theme: 'Dryland forests',
    media: mediaLibrary.fieldSeedball
  },
  {
    title: 'Coral Radio Diaries',
    location: 'Lamu · Kenya',
    summary: 'Fishers stream hydrophone audio so students can “hear” reef recovery in real time.',
    theme: 'Ocean learning',
    media: mediaLibrary.fieldCoral
  }
]

const dispatches = [
  {
    title: 'Field Radio · Episode 19',
    detail: 'Climate poets + marine biologists co-host a sonic walk through plastic-free ports.',
    link: 'https://spotify.com'
  },
  {
    title: 'Blueprint: Community Nurseries 2.0',
    detail: '15-slide playbook on how we keep saplings alive past Year 3 with local cooperatives.',
    link: 'https://verdantfuture.org'
  },
  {
    title: 'Toolkit: Youth Climate Labs',
    detail: 'Starter curriculum + sensor kits for schools joining the movement.',
    link: 'https://verdantfuture.org'
  }
]

const storyTimeline = [
  { title: 'Roots & Rivers', date: 'Feb 14', detail: 'Water keepers map rivers with AR overlays + canoe labs.' },
  { title: 'Guardians of Canopy', date: 'Mar 02', detail: 'Forest rangers narrate drone footage for classrooms.' },
  { title: 'Cities Go Tide-Positive', date: 'Apr 11', detail: 'Coastal mayors swap plastic policies live on-air.' }
]

usePageMeta({
  title: 'Field Stories',
  description: 'Field dispatches, toolkits, and story-driven recaps capture Verdant Future impact across coasts and forests.',
  image: mediaLibrary.fieldMangrove,
  keywords: [
    'environmental field dispatches',
    'community conservation storytelling',
    'climate radio toolkit',
    'impact atlas field reports'
  ]
})
</script>

<template>
  <div class="page-view">
    <section class="stories-hero surface">
      <div>
        <p class="eyebrow">Field dispatch</p>
        <h1>Stories engineered to move communities.</h1>
        <p>
          We pair immersive media, quick-build exhibits, and radio dispatches so every volunteer can feel the momentum of
          restoration—from rainforest corridors to ocean nurseries.
        </p>
      </div>
      <div class="hero-stats">
        <article v-for="stat in heroHighlights" :key="stat.label">
          <p class="value">{{ stat.value }}</p>
          <p class="detail">{{ stat.label }}</p>
        </article>
      </div>
    </section>

    <section class="story-list">
      <RouterLink v-for="story in storyFeatures" :key="story.title" to="/impact-atlas" class="story-feature">
        <div class="story-feature__media">
          <img :src="story.media" :alt="story.title" loading="lazy" />
          <span class="story-feature__badge">{{ story.theme }}</span>
        </div>
        <div class="story-feature__content">
          <p class="story-feature__eyebrow eyebrow">{{ story.theme }}</p>
          <h3>{{ story.title }}</h3>
          <p class="detail">{{ story.location }}</p>
          <p>{{ story.summary }}</p>
          <span class="story-feature__cta inline-link">Explore impact →</span>
        </div>
      </RouterLink>
    </section>

    <section class="dispatch-grid surface">
      <article v-for="item in dispatches" :key="item.title" class="dispatch-card">
        <p class="eyebrow">New</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.detail }}</p>
        <a class="inline-link" :href="item.link" target="_blank" rel="noreferrer">Listen / download →</a>
      </article>
    </section>

    <section class="stories-timeline surface">
      <h2>What’s premiering next</h2>
      <div class="stories-timeline__cards">
        <article v-for="item in storyTimeline" :key="item.title">
          <p class="eyebrow">{{ item.date }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.detail }}</p>
        </article>
      </div>
    </section>

    <section class="radio-banner surface">
      <div>
        <p class="eyebrow">Field radio</p>
        <h3>Shortwave storytelling hub</h3>
        <p>Sign up to syndicate community-made climate stories across local stations.</p>
      </div>
      <div class="radio-actions">
        <a class="accent-button" href="mailto:radio@verdantfuture.org">Become a host</a>
        <RouterLink to="/impact-atlas" class="ghost-button">See the atlas</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.stories-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  align-items: center;
  padding: clamp(1.75rem, 4vw, 3rem);
  background: linear-gradient(135deg, rgba(32, 146, 110, 0.08), rgba(158, 215, 235, 0.15));
  border: 1px solid rgba(15, 56, 33, 0.12);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.8rem;
}

.hero-stats article {
  padding: 0.9rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(17, 81, 50, 0.12);
  background: #fff;
}

.story-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.story-feature {
  display: flex;
  flex-wrap: wrap;
  border-radius: 26px;
  overflow: hidden;
  border: 1px solid rgba(15, 56, 33, 0.12);
  background: linear-gradient(120deg, rgba(15, 80, 51, 0.08), rgba(158, 215, 235, 0.15));
  color: inherit;
  box-shadow: 0 25px 45px rgba(10, 34, 21, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.story-feature:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 55px rgba(10, 34, 21, 0.16);
}

.story-feature__media {
  position: relative;
  flex: 1 1 360px;
  min-height: 240px;
}

.story-feature__media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-feature__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.35));
}

.story-feature__badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mint-700);
  z-index: 2;
}

.story-feature__content {
  flex: 1 1 320px;
  padding: clamp(1.5rem, 5vw, 2.75rem);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #fff;
}

.story-feature__eyebrow {
  color: var(--mint-700);
}

.story-feature__cta {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
}

.dispatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: clamp(1.5rem, 3vw, 2.5rem);
}

.dispatch-card {
  border-radius: 20px;
  border: 1px solid rgba(15, 56, 33, 0.12);
  padding: 1.25rem;
  background: #fff;
}

.stories-timeline {
  border: 1px solid rgba(17, 81, 50, 0.12);
  background: #fff;
  padding: clamp(1.5rem, 4vw, 2.75rem);
}

.stories-timeline__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.stories-timeline__cards article {
  border-radius: 20px;
  border: 1px solid rgba(15, 56, 33, 0.12);
  padding: 1.2rem;
  background: #fff;
}

.radio-banner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: linear-gradient(120deg, rgba(32, 146, 110, 0.2), rgba(20, 118, 84, 0.15));
  border: 1px solid rgba(32, 146, 110, 0.35);
  border-radius: 26px;
  padding: clamp(1.75rem, 4vw, 3rem);
}

.radio-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}
</style>
