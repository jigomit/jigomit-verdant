<script setup>
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'
import CalloutSection from '../components/CalloutSection.vue'

const partnershipTypes = [
  {
    title: 'Field Partnerships',
    description: 'Co-create conservation programs with our on-ground teams in 15 nations.',
    icon: '🌍'
  },
  {
    title: 'Research Collaboration',
    description: 'Joint research initiatives on climate resilience, biodiversity, and circular economy.',
    icon: '🔬'
  },
  {
    title: 'Funding Partners',
    description: 'Strategic funding relationships that amplify impact across our four focus areas.',
    icon: '💚'
  },
  {
    title: 'Technology Partners',
    description: 'Leverage tech solutions for monitoring, data collection, and community engagement.',
    icon: '📡'
  }
]

const partnerBenefits = [
  'Access to global conservation network across 15 nations',
  'Co-branded impact reports and case studies',
  'On-ground field visits and immersion experiences',
  'Joint research and publication opportunities',
  'Recognition in annual reports and digital platforms',
  'Quarterly partnership review meetings'
]

usePageMeta({
  title: 'Partner With Us',
  description: 'Join Verdant Future in creating lasting environmental impact. Explore partnership opportunities in conservation, research, and community engagement.',
  image: mediaLibrary.homeGlobalLearning,
  keywords: ['environmental partnership opportunities', 'conservation collaboration', 'NGO partnerships']
})
</script>

<template>
  <div class="page-view partner-view">
    <section class="page-hero">
      <div class="hero-content">
        <p class="eyebrow">Partner With Us</p>
        <h1>Build a greener future together</h1>
        <p class="lead">
          Partner with Verdant Future to amplify conservation impact across tree planting, climate action, plastic reduction, and wildlife protection.
        </p>
      </div>
      <img :src="mediaLibrary.homeGlobalLearning" alt="Partnership collaboration" loading="lazy" />
    </section>

    <section class="partnership-types surface">
      <div class="section-heading">
        <h2>Partnership Opportunities</h2>
        <p>We collaborate with organizations, institutions, and communities worldwide.</p>
      </div>
      <div class="grid-4">
        <article v-for="type in partnershipTypes" :key="type.title" class="card-simple">
          <div class="icon-large">{{ type.icon }}</div>
          <h3>{{ type.title }}</h3>
          <p>{{ type.description }}</p>
        </article>
      </div>
    </section>

    <section class="benefits-section">
      <div class="content-wrapper">
        <div class="benefits-text">
          <p class="eyebrow">Why Partner</p>
          <h2>Partnership Benefits</h2>
          <ul class="benefits-list">
            <li v-for="benefit in partnerBenefits" :key="benefit">{{ benefit }}</li>
          </ul>
        </div>
        <div class="benefits-image">
          <img :src="mediaLibrary.homeGlobalRestoration" alt="Partnership benefits" loading="lazy" />
        </div>
      </div>
    </section>

    <CalloutSection
      heading="Ready to partner?"
      copy="Let's explore how we can create lasting environmental impact together."
      primaryText="Start Conversation"
      primaryHref="mailto:connect@verdantfuture.org"
      secondaryText="Download Partnership Guide"
      secondaryHref="mailto:connect@verdantfuture.org?subject=Partnership Guide Request"
    />
  </div>
</template>
