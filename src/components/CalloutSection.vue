<script setup>
const props = defineProps({
  eyebrow: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  copy: {
    type: String,
    required: true
  },
  tone: {
    type: String,
    default: 'default'
  },
  primary: {
    type: Object,
    required: true
  },
  secondary: {
    type: Object,
    default: null
  }
})

const buttonClasses = (cta = {}) => {
  const classes = ['accent-button']
  if (cta.variant === 'ghost') {
    classes.push('ghost')
  }
  if (cta.size === 'small') {
    classes.push('small')
  }
  return classes
}
</script>

<template>
  <section class="page-section cta-panel cta-panel--wide" :class="{ alt: tone === 'alt' }">
    <div>
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h3>{{ title }}</h3>
      <p>{{ copy }}</p>
    </div>
    <div class="cta-actions">
      <a
        v-if="primary"
        :href="primary.href"
        :class="buttonClasses(primary)"
        :target="primary.target"
        :rel="primary.rel"
      >
        {{ primary.label }}
      </a>
      <a
        v-if="secondary"
        :href="secondary.href"
        :class="buttonClasses(secondary)"
        :target="secondary.target"
        :rel="secondary.rel"
      >
        {{ secondary.label }}
      </a>
    </div>
  </section>
</template>
