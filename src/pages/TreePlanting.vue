<script setup>
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'
import CalloutSection from '../components/CalloutSection.vue'
const restorationPillars = [
  {
    title: 'Biodiversity-first design',
    detail: 'Seed mixes based on indigenous knowledge, moisture modeling, and wildlife corridors.'
  },
  {
    title: 'Community nurseries',
    detail: 'Women-led cooperatives cultivate saplings with drip irrigation and composting hubs.'
  },
  {
    title: 'Smart monitoring',
    detail: 'Solar sensors track survival and water stress to guide rapid response teams.'
  }
]

const rolloutPhases = [
  {
    title: '1 · Listening labs',
    copy: 'Land stewards map historical canopy cover and cultural values to align planting goals.'
  },
  {
    title: '2 · Co-creation sprints',
    copy: 'Growing plans, soil restoration, and maintenance roles are prototyped in 72 hours.'
  },
  {
    title: '3 · Regenerative activation',
    copy: 'Volunteers plant, mulch, and irrigate while capturing baseline data for the next decade.'
  }
]

const canopyStats = [
  {
    figure: '540k ha',
    detail: 'of native canopy restored with agroforestry corridors.',
    image: mediaLibrary.treeCanopy
  },
  {
    figure: '1.8B L',
    detail: 'water captured yearly through micro-catchments and swales.',
    image: mediaLibrary.treeWaterCapture
  },
  {
    figure: '2.1M',
    detail: 'community caretakers receiving regenerative livelihoods.',
    image: mediaLibrary.treeCommunity
  }
]

const knowledgeChapters = [
  {
    title: 'Care circles',
    copy: 'Peer-to-peer brigades manage pruning, pest control, and storytelling updates for donors.'
  },
  {
    title: 'Nursery accelerators',
    copy: 'Seed-to-sapling tech transfers plus funding decks for women-led cooperatives.'
  },
  {
    title: 'Monitoring commons',
    copy: 'Open dashboards blending satellite imagery with on-the-ground data guardians capture weekly.'
  }
]

usePageMeta({
  title: 'Tree Planting',
  description: 'Verdant Future co-designs climate-resilient forests with communities, blending indigenous knowledge and smart monitoring.',
  image: mediaLibrary.heroTreePlanting,
  keywords: [
    'community-led tree planting',
    'adaptive forest restoration',
    'indigenous reforestation playbooks',
    'smart monitoring forestry programs'
  ]
})
</script>

<template>
  <div class="page-view page-view--trees">
    <section class="page-hero trees hero-split">
      <div>
        <p class="eyebrow">Tree Planting</p>
        <h1>We root forests that outlive the next generation.</h1>
        <p class="lead">
          Verdant Future focuses on native species, hydrological resilience, and circular economies that allow every tree
          to regenerate soil, water, and livelihoods.
        </p>
        <div class="stat-badge">
          <p class="value">92%</p>
          <p>Average survival rate after three dry seasons.</p>
        </div>
      </div>
      <img :src="mediaLibrary.heroTreePlanting" alt="Tree planting" class="content-hero-image" loading="lazy" />
    </section>

    <section class="page-section pillars-section">
      <div class="section-heading">
        <p class="eyebrow">Restoration pillars</p>
        <h2>Forest systems designed for permanence</h2>
        <p>Each lever blends traditional knowledge with monitoring tech so new canopy can stand on its own.</p>
      </div>
      <div class="pillars">
        <article v-for="pillar in restorationPillars" :key="pillar.title" class="info-card lift">
          <h3>{{ pillar.title }}</h3>
          <p>{{ pillar.detail }}</p>
        </article>
      </div>
    </section>

    <section class="page-section phases phase-timeline">
      <div class="section-heading">
        <h2>From listening to long-term care</h2>
        <p>Each phase is co-led by local youth fellows and agroforestry experts.</p>
      </div>
      <div class="phase-grid">
        <article v-for="phase in rolloutPhases" :key="phase.title" class="phase-card">
          <p class="eyebrow">{{ phase.title }}</p>
          <p>{{ phase.copy }}</p>
        </article>
      </div>
    </section>

    <section class="page-section canopy-showcase">
      <div class="section-heading">
        <p class="eyebrow">Field data</p>
        <h2>Canopies we keep breathing</h2>
        <p>Regeneration metrics track survival, moisture, and livelihoods unlocked around each site.</p>
      </div>
      <div class="gallery-grid canopy-grid">
        <article v-for="stat in canopyStats" :key="stat.figure" class="gallery-card lift">
          <img :src="stat.image" :alt="stat.detail" loading="lazy" />
          <div>
            <p class="value">{{ stat.figure }}</p>
            <p>{{ stat.detail }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="page-section knowledge-section">
      <div class="knowledge-panel">
        <div>
          <h2>Knowledge that keeps forests thriving</h2>
          <p>Our open playbooks help partners replicate results without waiting for another grant cycle.</p>
        </div>
        <div class="phase-grid">
          <article v-for="chapter in knowledgeChapters" :key="chapter.title" class="phase-card">
            <p class="eyebrow">{{ chapter.title }}</p>
            <p>{{ chapter.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <CalloutSection
      eyebrow="Partner with us"
      title="Bring an adaptive forest to your territory"
      copy="We design turnkey planting playbooks, train caretakers, and set up satellite monitoring."
      :primary="{ label: 'Schedule a briefing', href: 'mailto:forest@verdantfuture.org' }"
    />
  </div>
</template>
