<script setup>
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'
import CalloutSection from '../components/CalloutSection.vue'

const partnershipModels = [
  {
    title: 'CSR Program Design',
    description: 'Co-create corporate social responsibility initiatives aligned with your ESG goals.',
    benefits: ['Custom impact metrics', 'Quarterly reporting', 'Employee engagement']
  },
  {
    title: 'Employee Engagement',
    description: 'Mobilize your workforce through volunteering, matched giving, and team experiences.',
    benefits: ['Field immersion trips', 'Virtual workshops', 'Skill-based volunteering']
  },
  {
    title: 'Cause Marketing',
    description: 'Align your brand with verified conservation impact through co-branded campaigns.',
    benefits: ['Impact storytelling', 'Digital assets', 'Campaign analytics']
  },
  {
    title: 'Carbon Offsetting',
    description: 'Credible nature-based carbon solutions through verified tree planting and restoration.',
    benefits: ['Third-party verification', 'Long-term monitoring', 'Transparent reporting']
  }
]

const corporatePartners = [
  'Tech innovators funding AI-powered conservation monitoring',
  'Retail brands eliminating plastic through circular systems',
  'Financial institutions investing in regenerative projects',
  'Manufacturing companies offsetting carbon through reforestation'
]

const partnershipSteps = [
  {
    step: '1',
    title: 'Discovery Call',
    description: 'Understand your sustainability goals and priorities'
  },
  {
    step: '2',
    title: 'Proposal',
    description: 'Custom partnership framework aligned with your objectives'
  },
  {
    step: '3',
    title: 'Activation',
    description: 'Launch programs with clear milestones and metrics'
  },
  {
    step: '4',
    title: 'Impact Reporting',
    description: 'Transparent quarterly updates and annual impact reports'
  }
]

usePageMeta({
  title: 'Corporate Partnerships',
  description: 'Partner with Verdant Future for ESG initiatives, employee engagement, and verified environmental impact. Build CSR programs that deliver measurable conservation results.',
  image: mediaLibrary.homeGlobalLearning,
  keywords: ['corporate environmental partnerships', 'CSR programs', 'ESG conservation initiatives']
})
</script>

<template>
  <div class="page-view corporate-view">
    <section class="page-hero">
      <div class="hero-content">
        <p class="eyebrow">Corporate Partnerships</p>
        <h1>Amplify your impact through conservation</h1>
        <p class="lead">
          Partner with Verdant Future to build credible ESG programs, engage employees, and deliver verified environmental impact.
        </p>
      </div>
      <img :src="mediaLibrary.homeGlobalLearning" alt="Corporate partnerships" loading="lazy" />
    </section>

    <section class="partnership-models surface">
      <div class="section-heading">
        <h2>Partnership Models</h2>
        <p>Flexible engagement options designed for corporate sustainability goals.</p>
      </div>
      <div class="models-grid">
        <article v-for="model in partnershipModels" :key="model.title" class="model-card lift">
          <h3>{{ model.title }}</h3>
          <p>{{ model.description }}</p>
          <ul class="benefits-list">
            <li v-for="benefit in model.benefits" :key="benefit">{{ benefit }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="corporate-partners">
      <h2>Who We Partner With</h2>
      <ul class="partners-list">
        <li v-for="partner in corporatePartners" :key="partner">{{ partner }}</li>
      </ul>
    </section>

    <section class="partnership-process surface">
      <h2>Partnership Process</h2>
      <div class="process-timeline">
        <div v-for="item in partnershipSteps" :key="item.step" class="timeline-item">
          <div class="timeline-marker">{{ item.step }}</div>
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="impact-proof">
      <div class="proof-content">
        <h2>Verified Impact, Transparent Reporting</h2>
        <p>
          All corporate partnerships include third-party verification, satellite monitoring, and community-verified outcomes. We provide quarterly impact dashboards and annual comprehensive reports with photo documentation, GPS coordinates, and community testimonials.
        </p>
      </div>
      <img :src="mediaLibrary.homeResearchFinance" alt="Impact verification" loading="lazy" />
    </section>

    <CalloutSection
      heading="Let's build a partnership"
      copy="Explore how we can align your corporate sustainability goals with verified conservation impact."
      primaryText="Schedule Discovery Call"
      primaryHref="mailto:partners@verdantfuture.org"
      secondaryText="Download Partnership Deck"
      secondaryHref="mailto:partners@verdantfuture.org?subject=Partnership Deck Request"
    />
  </div>
</template>
