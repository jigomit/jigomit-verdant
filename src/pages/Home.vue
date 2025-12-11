<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import VideoShowcase from '../components/VideoShowcase.vue'
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'

const focusHighlights = [
  {
    title: 'Tree Planting Drives',
    copy: 'Indigenous species planted with community-led monitoring.',
    anchor: 'tree-planting',
    image: mediaLibrary.homeFocusTree,
    route: '/tree-planting'
  },
  {
    title: 'Climate Literacy Labs',
    copy: 'Hands-on experiences that turn climate science into action.',
    anchor: 'climate-action',
    image: mediaLibrary.homeFocusClimate,
    route: '/climate-action'
  },
  {
    title: 'Plastic-Free Coastlines',
    copy: 'Circular waste systems that keep oceans clear and thriving.',
    anchor: 'plastic-reduction',
    image: mediaLibrary.homeFocusPlastic,
    route: '/plastic-reduction'
  },
  {
    title: 'Wildlife Corridors',
    copy: 'Community guardianships that reconnect habitats.',
    anchor: 'wildlife-protection',
    image: mediaLibrary.homeFocusWildlife,
    route: '/wildlife-protection'
  }
]

const impactStats = [
  { label: 'Trees rooted', value: '2.4M', detail: '15 nations · 127 communities' },
  { label: 'Youth activated', value: '68K', detail: 'Climate storytellers + mobilizers' },
  { label: 'Plastic removed', value: '312T', detail: 'Recovered & recycled locally' }
]

const upcomingMoments = [
  {
    title: 'Mangrove Shield Week',
    description: 'Restoring coastal forests with blue-carbon monitoring workshops.',
    date: 'March 3–9 · Manila'
  },
  {
    title: 'Solar Schools Exchange',
    description: 'Educators co-design climate curricula built on local wisdom.',
    date: 'April 18 · Nairobi + Virtual'
  },
  {
    title: 'Urban Wildlife Summit',
    description: 'Cities pledge micro-reserves and pollinator superhighways.',
    date: 'May 24 · São Paulo'
  }
]

const storyImages = [
  { src: mediaLibrary.homeStoryCorridor, caption: 'Community forest corridors spanning 70km.' },
  { src: mediaLibrary.homeStoryNursery, caption: 'Women-led nurseries tending indigenous saplings.' },
  { src: mediaLibrary.homeStoryOcean, caption: 'Volunteer dive teams removing ghost nets.' }
]

const globalPrograms = [
  {
    title: 'Restoration Studios',
    copy: 'Hyper-local teams blend satellite data with indigenous planting to reboot watersheds.',
    metric: '21 biomes',
    image: mediaLibrary.homeGlobalRestoration
  },
  {
    title: 'Climate Learning Hubs',
    copy: 'Pop-up labs inside schools and maker spaces translate climate data into civic rituals.',
    metric: '43 hubs',
    image: mediaLibrary.homeGlobalLearning
  },
  {
    title: 'Circular Ocean Labs',
    copy: 'Ports and fishing villages co-design circular systems to eliminate plastic leakage.',
    metric: '12 coastlines',
    image: mediaLibrary.homeGlobalCircular
  }
]

const researchHighlights = [
  {
    title: 'Regenerative Finance Index',
    detail: 'Benchmark that tracks how city budgets invest in nature-based solutions.',
    image: mediaLibrary.homeResearchFinance
  },
  {
    title: 'Soil Moisture AI',
    detail: 'Low-cost sensors predicting drought stress 21 days in advance.',
    image: mediaLibrary.homeResearchSoil
  }
]

const regionalNetwork = ['Congo Basin', 'Coral Triangle', 'Altiplano', 'Mekong Delta', 'Sahel', 'Great Lakes']

const showcaseVideos = [
  {
    title: 'Tree Planting',
    description: 'Indigenous species planted with community-led monitoring to restore forests and improve air quality.',
    src: mediaLibrary.videoTreePlanting,
    poster: mediaLibrary.homeFocusTree
  },
  {
    title: 'Climate Action',
    description: 'Hands-on climate literacy programs that turn scientific knowledge into tangible community action.',
    src: mediaLibrary.videoClimateAction,
    poster: mediaLibrary.homeFocusClimate
  },
  {
    title: 'Plastic Reduction',
    description: 'Circular waste systems that eliminate plastic pollution and protect our oceans and coastlines.',
    src: mediaLibrary.videoPlasticReduction,
    poster: mediaLibrary.homeFocusPlastic
  },
  {
    title: 'Wildlife Protection',
    description: 'Community guardianships that reconnect habitats and safeguard biodiversity for future generations.',
    src: mediaLibrary.videoWildlifeProtection,
    poster: mediaLibrary.homeFocusWildlife
  }
]

usePageMeta({
  title: 'Home',
  description:
    'Verdant Future mobilizes communities to reforest landscapes, accelerate climate literacy, end plastic leakage, and safeguard wildlife.',
  image: mediaLibrary.homeGlobalRestoration,
  keywords: [
    'community-led conservation programs',
    'climate literacy labs',
    'plastic action hubs',
    'wildlife corridor partnerships'
  ]
})
</script>

<template>
  <HeroSection />

  <div class="page-view home-view">
    <VideoShowcase :videos="showcaseVideos" />

    <section id="impact" class="impact-grid surface">
      <article v-for="stat in impactStats" :key="stat.label" class="metric-card">
        <p class="eyebrow">{{ stat.label }}</p>
        <p class="value">{{ stat.value }}</p>
        <p class="detail">{{ stat.detail }}</p>
      </article>
    </section>

    <section id="focus" class="focus-grid">
      <RouterLink
        v-for="highlight in focusHighlights"
        :key="highlight.title"
        class="focus-card lift"
        :id="highlight.anchor"
        :to="highlight.route"
      >
        <img :src="highlight.image" :alt="highlight.title" loading="lazy" />
        <div>
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.copy }}</p>
          <span class="inline-link">Deep dive →</span>
        </div>
      </RouterLink>
    </section>

    <section id="global-programs" class="global-grid surface">
      <article v-for="program in globalPrograms" :key="program.title" class="global-card lift">
        <img :src="program.image" :alt="program.title" loading="lazy" />
        <div>
          <p class="eyebrow">{{ program.metric }}</p>
          <h3>{{ program.title }}</h3>
          <p>{{ program.copy }}</p>
        </div>
      </article>
    </section>

    <section id="stories" class="story-grid surface">
      <article v-for="story in storyImages" :key="story.caption" class="story-card lift">
        <img :src="story.src" :alt="story.caption" loading="lazy" />
        <p>{{ story.caption }}</p>
      </article>
    </section>

    <section id="events" class="upcoming surface">
      <div class="section-heading">
        <h2>Moments you can join</h2>
        <p>Pop-up nurseries, climate art labs, clean coast expeditions, and wildlife counts.</p>
      </div>
      <div class="timeline">
        <a v-for="moment in upcomingMoments" :key="moment.title" href="mailto:connect@verdantfuture.org" class="timeline-card lift">
          <p class="eyebrow">{{ moment.date }}</p>
          <h3>{{ moment.title }}</h3>
          <p>{{ moment.description }}</p>
          <span class="link">RSVP</span>
        </a>
      </div>
    </section>

    <section id="research" class="insight-grid">
      <a
        v-for="highlight in researchHighlights"
        :key="highlight.title"
        href="mailto:research@verdantfuture.org"
        class="insight-card lift"
      >
        <img :src="highlight.image" :alt="highlight.title" loading="lazy" />
        <div>
          <p class="eyebrow">Insight</p>
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.detail }}</p>
          <span class="link">Request briefing</span>
        </div>
      </a>
    </section>

    <section id="network" class="network surface">
      <div>
        <h2>Global rewilding network</h2>
        <p>Regional alliances exchanging climate intelligence, nursery stock, and policy wins.</p>
      </div>
      <div class="chip-row">
        <span v-for="region in regionalNetwork" :key="region" class="chip">{{ region }}</span>
      </div>
    </section>
  </div>
</template>
