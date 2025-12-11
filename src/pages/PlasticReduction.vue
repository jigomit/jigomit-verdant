<script setup>
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'
import CalloutSection from '../components/CalloutSection.vue'
const systems = [
  {
    title: 'Circular design sprints',
    text: 'Coastal entrepreneurs and engineers turn single-use pain points into reusable systems in 48 hours.'
  },
  {
    title: 'Community materials hubs',
    text: 'Micro-factories crush, wash, and remold plastics into construction panels and marine gear.'
  },
  {
    title: 'Policy acceleration',
    text: 'Local leaders use our Plastic Ledger platform to enforce bans and track incentives.'
  }
]

const proof = [
  { heading: '312 tons', detail: 'plastic removed from watersheds in 2024' },
  { heading: '8 partner ports', detail: 'deploying plastic interception booms' },
  { heading: '63 artisans', detail: 'earning new income from recovered waste' }
]

const hubMoments = [
  {
    title: 'Ocean interceptors',
    copy: 'Solar skimmers deployed at river mouths capture debris before it hits reefs.',
    image: mediaLibrary.plasticInterceptors
  },
  {
    title: 'Zero-waste markets',
    copy: 'Vendors shift to refill stations paired with QR-coded incentives.',
    image: mediaLibrary.plasticMarkets
  },
  {
    title: 'Materials labs',
    copy: 'Makers transform waste into modular furniture for coastal schools.',
    image: mediaLibrary.plasticMakers
  }
]

const materialStreams = [
  {
    title: 'Ghost nets',
    metric: '72%',
    copy: 'Of recovered fishing gear turned into marine-safe rope and art installations.'
  },
  {
    title: 'Household plastics',
    metric: '48k homes',
    copy: 'Participating in our digital deposit-return system.'
  },
  {
    title: 'Industrial scraps',
    metric: '11 ports',
    copy: 'Tracking packaging footprints via Plastic Ledger agreements.'
  }
]

usePageMeta({
  title: 'Plastic Reduction Hubs',
  description: 'Our Plastic Action Hubs turn coastal waste streams into circular economies with tech, policy, and community ownership.',
  image: mediaLibrary.heroPlasticReduction,
  keywords: [
    'plastic action hub blueprint',
    'zero plastic leakage strategy',
    'community circular economy hubs',
    'coastal plastic interception systems'
  ]
})
</script>

<template>
  <div class="page-view page-view--plastic">
    <section class="page-hero plastic hero-split">
      <div>
        <p class="eyebrow">Plastic reduction</p>
        <h1>We help cities leap toward zero plastic leakage.</h1>
        <p class="lead">
          Verdant Future unites governments, recyclers, and citizens to design circular economies that keep oceans
          free-flowing.
        </p>
        <div class="stat-badge">
          <p class="value">82%</p>
          <p>Average drop in single-use plastic around our hubs.</p>
        </div>
      </div>
      <img :src="mediaLibrary.heroPlasticReduction" alt="Volunteers cleaning a coastline" class="content-hero-image" loading="lazy" />
    </section>

    <section class="page-section pillars-section">
      <div class="section-heading">
        <p class="eyebrow">Systems change</p>
        <h2>Interventions that bend plastic curves downward</h2>
        <p>Each hub pairs circular design, infrastructure, and policy tools for rapid adoption.</p>
      </div>
      <div class="pillars">
        <article v-for="system in systems" :key="system.title" class="info-card lift">
          <h3>{{ system.title }}</h3>
          <p>{{ system.text }}</p>
        </article>
      </div>
    </section>

    <section class="page-section impact-ribbon">
      <div class="section-heading">
        <p class="eyebrow">Proof points</p>
        <h2>Plastic Action Hub outputs</h2>
      </div>
      <div class="impact-grid alt">
        <article v-for="item in proof" :key="item.heading" class="metric-card">
          <p class="value">{{ item.heading }}</p>
          <p class="detail">{{ item.detail }}</p>
        </article>
      </div>
    </section>

    <section class="page-section hub-gallery">
      <div class="section-heading">
        <p class="eyebrow">Hub playbooks</p>
        <h2>Where circular ideas become public rituals</h2>
      </div>
      <div class="gallery-grid plastic-gallery">
        <article v-for="hub in hubMoments" :key="hub.title" class="gallery-card lift">
          <img :src="hub.image" :alt="hub.title" loading="lazy" />
          <div>
            <p class="eyebrow">Hub</p>
            <h3>{{ hub.title }}</h3>
            <p>{{ hub.copy }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="page-section knowledge-section">
      <div class="knowledge-panel">
        <div>
          <h2>Material streams we track relentlessly</h2>
          <p>Partners plug into our Plastic Ledger to verify impact and finance new infrastructure.</p>
        </div>
        <div class="phase-grid">
          <article v-for="stream in materialStreams" :key="stream.title" class="phase-card">
            <p class="eyebrow">{{ stream.metric }}</p>
            <h3>{{ stream.title }}</h3>
            <p>{{ stream.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <CalloutSection
      eyebrow="Launch a hub"
      title="Scale a Plastic Action Hub"
      copy="We install interception tech, mobilize volunteers, and set up buy-back programs."
      :primary="{ label: 'Book a discovery call', href: 'mailto:plastic@verdantfuture.org' }"
    />
  </div>
</template>
