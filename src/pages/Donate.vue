<script setup>
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'
import CalloutSection from '../components/CalloutSection.vue'

const donationImpact = [
  {
    amount: '$25',
    impact: 'Plants 50 indigenous trees with community monitoring',
    icon: '🌳'
  },
  {
    amount: '$100',
    impact: 'Sponsors a climate literacy workshop for 30 students',
    icon: '📚'
  },
  {
    amount: '$250',
    impact: 'Funds coastal cleanup removing 500kg of plastic waste',
    icon: '🌊'
  },
  {
    amount: '$500',
    impact: 'Supports wildlife corridor monitoring for one month',
    icon: '🦋'
  }
]

const impactAreas = [
  {
    title: 'Tree Planting',
    description: '2.4M trees planted across 15 nations',
    percentage: '35%',
    image: mediaLibrary.homeFocusTree
  },
  {
    title: 'Climate Action',
    description: '68K youth activated as climate leaders',
    percentage: '25%',
    image: mediaLibrary.homeFocusClimate
  },
  {
    title: 'Plastic Reduction',
    description: '312 tons removed from oceans',
    percentage: '25%',
    image: mediaLibrary.homeFocusPlastic
  },
  {
    title: 'Wildlife Protection',
    description: 'Protecting biodiversity in 127 communities',
    percentage: '15%',
    image: mediaLibrary.homeFocusWildlife
  }
]

const givingWays = [
  'One-time donation',
  'Monthly sustainer',
  'Legacy giving',
  'Gift in honor/memory',
  'Corporate matching',
  'Stock donations'
]

usePageMeta({
  title: 'Donate & Support',
  description: 'Support Verdant Future\'s environmental conservation work. Your donation funds tree planting, climate action, ocean cleanup, and wildlife protection.',
  image: mediaLibrary.homeGlobalRestoration,
  keywords: ['environmental donation', 'support conservation', 'donate to environmental NGO']
})
</script>

<template>
  <div class="page-view donate-view">
    <section class="page-hero">
      <div class="hero-content">
        <p class="eyebrow">Donate & Support</p>
        <h1>Invest in a thriving planet</h1>
        <p class="lead">
          Your support powers community-led conservation across four critical areas: forests, climate, oceans, and wildlife.
        </p>
      </div>
      <img :src="mediaLibrary.homeGlobalRestoration" alt="Conservation impact" loading="lazy" />
    </section>

    <section class="donation-impact surface">
      <div class="section-heading">
        <h2>Your Donation Impact</h2>
        <p>See how your contribution creates measurable environmental change.</p>
      </div>
      <div class="impact-cards">
        <article v-for="item in donationImpact" :key="item.amount" class="impact-card lift">
          <div class="impact-icon">{{ item.icon }}</div>
          <p class="impact-amount">{{ item.amount }}</p>
          <p class="impact-text">{{ item.impact }}</p>
        </article>
      </div>
    </section>

    <section class="fund-allocation">
      <h2>Where Your Donation Goes</h2>
      <p class="allocation-intro">100% of donations directly fund conservation programs</p>
      <div class="allocation-grid">
        <article v-for="area in impactAreas" :key="area.title" class="allocation-card">
          <img :src="area.image" :alt="area.title" loading="lazy" />
          <div class="allocation-info">
            <div class="allocation-header">
              <h3>{{ area.title }}</h3>
              <span class="percentage">{{ area.percentage }}</span>
            </div>
            <p>{{ area.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="giving-options surface">
      <h2>Ways to Give</h2>
      <div class="chip-row">
        <span v-for="way in givingWays" :key="way" class="chip">{{ way }}</span>
      </div>
    </section>

    <CalloutSection
      heading="Make your donation today"
      copy="Join thousands of supporters creating lasting environmental impact worldwide."
      primaryText="Donate Now"
      primaryHref="mailto:give@verdantfuture.org"
      secondaryText="Become a Monthly Donor"
      secondaryHref="mailto:give@verdantfuture.org?subject=Monthly Giving"
    />
  </div>
</template>
