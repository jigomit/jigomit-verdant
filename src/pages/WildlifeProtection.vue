<script setup>
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'
import CalloutSection from '../components/CalloutSection.vue'
const guardianship = [
  {
    title: 'Habitat mapping',
    desc: 'Drones, ranger patrols, and community science identify pressure zones and design wildlife corridors.'
  },
  {
    title: 'Rapid response',
    desc: 'Coordinated wildlife vets and volunteers stabilize injured animals and re-home them swiftly.'
  },
  {
    title: 'Coexistence campaigns',
    desc: 'Story-led outreach teaches regenerative farming techniques that keep wildlife safe.'
  }
]

const spotlight = [
  { title: 'Sahel elephant corridor', detail: '150 km protected by solar-lit watchtowers.' },
  { title: 'Andean condor cliffs', detail: 'Drone mapping plus climber guardians monitor hatchlings.' },
  { title: 'Urban pollinator belts', detail: 'City rooftops converted into nectar stations.' }
]

const guardianStories = [
  {
    title: 'Telemetry Rangers',
    copy: 'Solar collars alert guardians to migration slowdowns in real time.',
    image: mediaLibrary.wildlifeTelemetry
  },
  {
    title: 'Mangrove caretakers',
    copy: 'Communities replant mangroves to bring back seahorses and shorebirds.',
    image: mediaLibrary.wildlifeMangroves
  },
  {
    title: 'Mountain hive keepers',
    copy: 'Pollinator champions rewild rooftops and urban balconies.',
    image: mediaLibrary.wildlifePollinator
  }
]

const habitatStats = [
  { metric: '62 drones', detail: 'deployed for night monitoring and fire spotting.' },
  { metric: '140 guardians', detail: 'trained annually in wildlife first aid.' },
  { metric: '11 sanctuaries', detail: 'community-managed safe zones restored since 2021.' }
]

usePageMeta({
  title: 'Wildlife Protection',
  description: 'Telemetry, rapid response teams, and coexistence campaigns help Verdant Future safeguard keystone species.',
  image: mediaLibrary.heroWildlifeProtection,
  keywords: [
    'community wildlife guardianship',
    'wildlife corridor monitoring',
    'rapid response conservation teams',
    'human wildlife coexistence campaigns'
  ]
})
</script>

<template>
  <div class="page-view page-view--wildlife">
    <section class="page-hero wildlife hero-split">
      <div>
        <p class="eyebrow">Wildlife protection</p>
        <h1>Guarding keystone species through science and storytelling.</h1>
        <p class="lead">
          Our wildlife teams pair cutting-edge monitoring with local guardians to keep fragile ecosystems thriving.
        </p>
        <div class="stat-badge">
          <p class="value">47</p>
          <p>Species on the rebound across our landscapes.</p>
        </div>
      </div>
      <img :src="mediaLibrary.heroWildlifeProtection" alt="Conservationist observing wildlife" class="content-hero-image" loading="lazy" />
    </section>

    <section class="page-section pillars-section">
      <div class="section-heading">
        <p class="eyebrow">Guardianship model</p>
        <h2>Programs that keep wildlife and people in balance</h2>
      </div>
      <div class="pillars">
        <article v-for="item in guardianship" :key="item.title" class="info-card lift">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section class="page-section spotlight-ribbon">
      <div class="section-heading">
        <p class="eyebrow">Spotlight corridors</p>
        <h2>Critical habitats we are fortifying</h2>
      </div>
      <div class="phase-grid showcase">
        <article v-for="item in spotlight" :key="item.title" class="phase-card">
          <p class="eyebrow">{{ item.title }}</p>
          <p>{{ item.detail }}</p>
        </article>
      </div>
    </section>

    <section class="page-section wildlife-gallery">
      <div class="section-heading">
        <p class="eyebrow">Field stories</p>
        <h2>Guardians innovating on the front lines</h2>
      </div>
      <div class="gallery-grid wildlife-gallery-grid">
        <article v-for="story in guardianStories" :key="story.title" class="gallery-card lift">
          <img :src="story.image" :alt="story.title" loading="lazy" />
          <div>
            <p class="eyebrow">Field story</p>
            <h3>{{ story.title }}</h3>
            <p>{{ story.copy }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="page-section impact-ribbon habitat-ribbon">
      <div class="section-heading">
        <p class="eyebrow">Guardians at work</p>
        <h2>Habitat stats we track monthly</h2>
      </div>
      <div class="impact-grid">
        <article v-for="stat in habitatStats" :key="stat.metric" class="metric-card">
          <p class="value">{{ stat.metric }}</p>
          <p class="detail">{{ stat.detail }}</p>
        </article>
      </div>
    </section>

    <CalloutSection
      tone="alt"
      eyebrow="Guardian cohorts"
      title="Sponsor a wildlife guardian cohort"
      copy="Provide stipends, field gear, and emergency response supplies."
      :primary="{ label: 'Request a prospectus', href: 'mailto:wildlife@verdantfuture.org', variant: 'ghost' }"
    />
  </div>
</template>
