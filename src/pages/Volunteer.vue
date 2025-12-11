<script setup>
import { mediaLibrary } from '../data/mediaLibrary'
import { usePageMeta } from '../composables/usePageMeta'
import CalloutSection from '../components/CalloutSection.vue'

const volunteerRoles = [
  {
    title: 'Field Volunteers',
    description: 'Hands-on tree planting, coastal cleanups, and wildlife monitoring.',
    commitment: '1-3 months',
    image: mediaLibrary.homeFocusTree
  },
  {
    title: 'Climate Educators',
    description: 'Lead climate literacy workshops in schools and communities.',
    commitment: 'Flexible',
    image: mediaLibrary.homeFocusClimate
  },
  {
    title: 'Research Assistants',
    description: 'Support data collection, analysis, and impact reporting.',
    commitment: '6+ months',
    image: mediaLibrary.homeResearchSoil
  },
  {
    title: 'Communications Volunteers',
    description: 'Content creation, social media, storytelling, and photography.',
    commitment: 'Remote/Flexible',
    image: mediaLibrary.blogCommunity
  }
]

const volunteerStats = [
  { value: '400K+', label: 'Volunteers activated' },
  { value: '15', label: 'Countries' },
  { value: '127', label: 'Communities' }
]

usePageMeta({
  title: 'Volunteer Opportunities',
  description: 'Join 400K+ volunteers making environmental impact through tree planting, climate action, plastic reduction, and wildlife protection with Verdant Future.',
  image: mediaLibrary.homeStoryNursery,
  keywords: ['environmental volunteer opportunities', 'conservation volunteering', 'climate action volunteers']
})
</script>

<template>
  <div class="page-view volunteer-view">
    <section class="page-hero">
      <div class="hero-content">
        <p class="eyebrow">Volunteer With Us</p>
        <h1>Be part of the solution</h1>
        <p class="lead">
          Join a global movement of 400,000+ volunteers restoring forests, protecting wildlife, and building climate-resilient communities.
        </p>
      </div>
      <img :src="mediaLibrary.homeStoryNursery" alt="Volunteers in action" loading="lazy" />
    </section>

    <section class="impact-grid surface">
      <article v-for="stat in volunteerStats" :key="stat.label" class="metric-card">
        <p class="value">{{ stat.value }}</p>
        <p class="detail">{{ stat.label }}</p>
      </article>
    </section>

    <section class="volunteer-roles">
      <div class="section-heading">
        <h2>Volunteer Roles</h2>
        <p>Find opportunities that match your skills, passion, and availability.</p>
      </div>
      <div class="roles-grid">
        <article v-for="role in volunteerRoles" :key="role.title" class="role-card lift">
          <img :src="role.image" :alt="role.title" loading="lazy" />
          <div class="role-info">
            <p class="eyebrow">{{ role.commitment }}</p>
            <h3>{{ role.title }}</h3>
            <p>{{ role.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="volunteer-process surface">
      <h2>How to Get Started</h2>
      <div class="process-steps">
        <div class="step">
          <span class="step-number">1</span>
          <h3>Apply</h3>
          <p>Fill out our volunteer application form</p>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <h3>Interview</h3>
          <p>Brief conversation about your interests and availability</p>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <h3>Orientation</h3>
          <p>Virtual onboarding and training session</p>
        </div>
        <div class="step">
          <span class="step-number">4</span>
          <h3>Impact</h3>
          <p>Start making a difference in your chosen role</p>
        </div>
      </div>
    </section>

    <CalloutSection
      heading="Ready to volunteer?"
      copy="Join thousands of changemakers restoring our planet. Every action counts."
      primaryText="Apply Now"
      primaryHref="mailto:volunteer@verdantfuture.org"
      secondaryText="Ask a Question"
      secondaryHref="mailto:volunteer@verdantfuture.org?subject=Volunteer Question"
    />
  </div>
</template>
