<script setup>
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'
import CalloutSection from '../components/CalloutSection.vue'
const labStreams = [
  {
    title: 'Climate storytelling',
    body: 'Multimedia residencies equip youth to translate local science into powerful narratives.'
  },
  {
    title: 'Resilience prototyping',
    body: 'Low-tech cooling, rain capture, and shade infrastructures tested in micro pilots.'
  },
  {
    title: 'Citizen data',
    body: 'Air, soil, and water monitoring kits create open datasets for municipal action.'
  }
]

const pledges = [
  { label: 'Educators certified', value: '1,240' },
  { label: 'Climate art shows', value: '87' },
  { label: 'Microgrids funded', value: '44' }
]

const labMoments = [
  {
    title: 'Heat Watch Labs',
    copy: 'Students and elders co-create shade corridors and reflective paint projects.',
    image: mediaLibrary.climateHeatWatch
  },
  {
    title: 'Policy Studios',
    copy: 'Citizen scientists bring hyperlocal data into participatory budgeting sessions.',
    image: mediaLibrary.climatePolicy
  },
  {
    title: 'Solar Futures Festival',
    copy: 'Artists, engineers, and youth perform climate solutions in public plazas.',
    image: mediaLibrary.climateFestival
  }
]

const fellowshipTracks = [
  {
    title: 'Story Fellows',
    copy: 'Equip youth media labs with cameras, editing bays, and climate journalism mentors.'
  },
  {
    title: 'Data Fellows',
    copy: 'Teach citizen scientists to analyze and publish environmental datasets openly.'
  },
  {
    title: 'Policy Fellows',
    copy: 'Coach young advocates to co-create adaptation budgets with city officials.'
  }
]

usePageMeta({
  title: 'Climate Action Labs',
  description:
    'Verdant Future climate labs combine storytelling, citizen science, and resilience prototypes so every community can act on data.',
  image: mediaLibrary.heroClimateAction,
  keywords: [
    'climate literacy lab curriculum',
    'community climate storytelling',
    'citizen science adaptation labs',
    'youth climate fellowship program'
  ]
})
</script>

<template>
  <div class="page-view page-view--climate">
    <section class="page-hero climate hero-split">
      <div>
        <p class="eyebrow">Climate change awareness</p>
        <h1>We turn climate science into everyday rituals.</h1>
        <p class="lead">
          Climate Labs remix art, tech, and ancestral wisdom so communities can adapt faster and influence policy with
          lived data.
        </p>
        <div class="stat-badge">
          <p class="value">350+</p>
          <p>Climate literacy labs run since 2019.</p>
        </div>
      </div>
      <img :src="mediaLibrary.heroClimateAction" alt="Solar classroom" class="content-hero-image" loading="lazy" />
    </section>

    <section class="page-section pillars-section">
      <div class="section-heading">
        <p class="eyebrow">Climate labs</p>
        <h2>Three streams fueling rapid adaptation</h2>
        <p>Labs mix storytelling, prototyping, and citizen science to make policy tangible.</p>
      </div>
      <div class="pillars">
        <article v-for="stream in labStreams" :key="stream.title" class="info-card lift">
          <h3>{{ stream.title }}</h3>
          <p>{{ stream.body }}</p>
        </article>
      </div>
    </section>

    <section class="page-section impact-ribbon">
      <div class="section-heading">
        <p class="eyebrow">Pledges kept</p>
        <h2>Community outputs from 2024</h2>
      </div>
      <div class="pledges">
        <div v-for="pledge in pledges" :key="pledge.label" class="metric-card">
          <p class="value">{{ pledge.value }}</p>
          <p class="detail">{{ pledge.label }}</p>
        </div>
      </div>
    </section>

    <section class="page-section lab-gallery">
      <div class="section-heading">
        <p class="eyebrow">Lab snapshots</p>
        <h2>Moments when climate action feels joyful</h2>
      </div>
      <div class="gallery-grid climate-gallery">
        <article v-for="moment in labMoments" :key="moment.title" class="gallery-card lift">
          <img :src="moment.image" :alt="moment.title" loading="lazy" />
          <div>
            <p class="eyebrow">Lab</p>
            <h3>{{ moment.title }}</h3>
            <p>{{ moment.copy }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="page-section knowledge-section">
      <div class="knowledge-panel">
        <div>
          <h2>Fellowships powering civic imagination</h2>
          <p>Our facilitators stay for the long game, coaching alumni to launch new labs each season.</p>
        </div>
        <div class="phase-grid">
          <article v-for="track in fellowshipTracks" :key="track.title" class="phase-card">
            <p class="eyebrow">{{ track.title }}</p>
            <p>{{ track.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <CalloutSection
      tone="alt"
      eyebrow="Climate partnerships"
      title="Host a climate literacy lab"
      copy="We provide facilitation kits, facilitator training, and post-lab coaching."
      :primary="{ label: 'Download overview', href: 'mailto:climate@verdantfuture.org', variant: 'ghost' }"
    />
  </div>
</template>
