<script setup>
import { usePageMeta } from '../composables/usePageMeta'
import { mediaLibrary } from '../data/mediaLibrary'

const atlasSummary = [
  { label: 'Hectares under restoration', value: '780k' },
  { label: 'Communities', value: '214' },
  { label: 'Live nurseries', value: '612' }
]

const biomeSignals = [
  {
    biome: 'Congo Basin',
    focus: 'Canopy stitching',
    metric: '87% seedling survivorship',
    detail: 'Community rangers pair LiDAR passes with on-ground transects.'
  },
  {
    biome: 'Coral Triangle',
    focus: 'Ocean plastics',
    metric: '312T recovered',
    detail: 'Waste cooperatives convert trawler waste into bricks.'
  },
  {
    biome: 'Andean Altiplano',
    focus: 'Paramo rewetting',
    metric: '64 micro-reservoirs',
    detail: 'Quechua-led brigades restore sponge wetlands for city water.'
  },
  {
    biome: 'Mekong Delta',
    focus: 'Agroforestry belts',
    metric: '14 regenerative corridors',
    detail: 'Sensors flag saltwater intrusion 21 days ahead of planting.'
  }
]

const climatePulses = [
  {
    title: 'Forest vitality index',
    change: '+6.2%',
    copy: 'Satellite NDVI blended with ranger audio diaries to unlock micro-climate actions.'
  },
  {
    title: 'Tide-safe plastic capture',
    change: '42 ports',
    copy: 'Modular booms redirect ghost nets into community-run material labs.'
  },
  {
    title: 'Youth climate labs',
    change: '68K learners',
    copy: 'Curricula pairs science storytelling with quick-build sensor kits.'
  }
]

const readinessLevels = [
  { label: 'Field teams trained', value: '1,420' },
  { label: 'AI soil nodes online', value: '3,210' },
  { label: 'Policy pledges tracked', value: '118' },
  { label: 'Community labs funded', value: '$18.6M' }
]

const regionHighlights = [
  { region: 'Sahel arc', status: 'Water table rising', action: 'Seedball drones + mycelium pellets' },
  { region: 'Great Lakes', status: 'Kelp farms scaling', action: 'Blue-carbon credits powering schools' },
  { region: 'Borneo', status: 'Carbon guardianship', action: 'Village-owned MRV cooperatives' }
]

usePageMeta({
  title: 'Impact Atlas',
  description: 'Live atlas showcasing Verdant Future biomes, readiness metrics, and climate signals.',
  image: mediaLibrary.homeGlobalRestoration,
  keywords: [
    'impact atlas climate data',
    'community restoration metrics',
    'biome readiness dashboard',
    'ranger telemetry insights'
  ]
})
</script>

<template>
  <div class="page-view">
    <section class="atlas-hero surface">
      <div class="atlas-copy">
        <p class="eyebrow">Impact atlas</p>
        <h1>Every hectare, mapped and narrated.</h1>
        <p>
          Data layers, ranger dispatches, and citizen sensors fuse into a living atlas that guides how we restore forests,
          coastlines, and habitats together.
        </p>
        <div class="atlas-metrics">
          <article v-for="item in atlasSummary" :key="item.label">
            <p class="value">{{ item.value }}</p>
            <p class="detail">{{ item.label }}</p>
          </article>
        </div>
      </div>
      <div class="atlas-map">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="atlas-map__legend">
          <p>Priority biomes</p>
          <div>
            <span class="dot forest"></span> Forest pulse
          </div>
          <div>
            <span class="dot ocean"></span> Ocean resilience
          </div>
          <div>
            <span class="dot savanna"></span> Savanna corridors
          </div>
        </div>
      </div>
    </section>

    <section class="atlas-grid surface atlas-grid--spacious">
      <article v-for="signal in biomeSignals" :key="signal.biome" class="atlas-card lift">
        <p class="eyebrow">{{ signal.biome }}</p>
        <h3>{{ signal.focus }}</h3>
        <p class="metric-callout">{{ signal.metric }}</p>
        <p>{{ signal.detail }}</p>
      </article>
    </section>

    <section class="pulse-grid surface">
      <article v-for="pulse in climatePulses" :key="pulse.title" class="pulse-card lift">
        <p class="eyebrow">Live pulse</p>
        <div class="pulse-change">{{ pulse.change }}</div>
        <h3>{{ pulse.title }}</h3>
        <p>{{ pulse.copy }}</p>
      </article>
    </section>

    <section class="readiness-compact surface">
      <article v-for="item in readinessLevels" :key="item.label" class="metric-compact lift">
        <div class="metric-compact__value">{{ item.value }}</div>
        <div class="metric-compact__label">{{ item.label }}</div>
      </article>
      <article v-for="item in regionHighlights" :key="item.region" class="region-compact lift">
        <p class="eyebrow">Regional spotlight</p>
        <h4>{{ item.region }}</h4>
        <p class="region-compact__status">{{ item.status }}</p>
        <p class="region-compact__action">{{ item.action }}</p>
      </article>
    </section>
  </div>
</template>

<style scoped>
.atlas-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  align-items: center;
  padding: clamp(1.75rem, 4vw, 3.25rem);
  background: linear-gradient(135deg, rgba(32, 146, 110, 0.08), rgba(158, 215, 235, 0.15));
  border: 1px solid rgba(15, 56, 33, 0.12);
}

.atlas-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
}

.atlas-metrics article {
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(17, 81, 50, 0.12);
  background: #fff;
}

.atlas-map {
  position: relative;
  border-radius: 28px;
  border: 1px solid rgba(15, 56, 33, 0.12);
  min-height: 360px;
  background: radial-gradient(circle at 25% 30%, rgba(32, 146, 110, 0.45), transparent 60%),
    radial-gradient(circle at 70% 60%, rgba(158, 215, 235, 0.6), transparent 55%),
    linear-gradient(135deg, rgba(12, 35, 21, 0.9), rgba(8, 24, 15, 0.85));
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(7, 24, 15, 0.45);
}

.atlas-map .orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  animation: organicOrbit 20s ease-in-out infinite;
  transform-origin: center;
}

.orbit-one {
  width: 220px;
  height: 220px;
  top: 20%;
  left: 15%;
}

.orbit-two {
  width: 320px;
  height: 320px;
  bottom: 10%;
  right: 5%;
}

.atlas-map__legend {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.85rem;
}

.atlas-map__legend div {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.atlas-map__legend .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.4rem;
}

.dot.forest {
  background: #68f5bb;
}

.dot.ocean {
  background: #8ed3ff;
}

.dot.savanna {
  background: #e8ff8a;
}

.atlas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.atlas-grid--spacious {
  padding: clamp(1.5rem, 3vw, 2.5rem);
}

.atlas-card {
  padding: 1.2rem;
  border-radius: 18px;
  border: 1px solid rgba(15, 56, 33, 0.12);
  background: #fff;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.atlas-card .metric-callout {
  font-weight: 600;
  color: var(--mint-700);
}

.pulse-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: clamp(1.25rem, 3vw, 2.25rem);
}

.pulse-card {
  padding: 1.2rem;
  border-radius: 20px;
  border: 1px solid rgba(15, 56, 33, 0.12);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pulse-change {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--mint-700);
}

.readiness-compact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: clamp(1.5rem, 3vw, 2.5rem);
}

.metric-compact {
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid rgba(17, 81, 50, 0.12);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
}

.metric-compact__value {
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--mint-700);
  white-space: nowrap;
}

.metric-compact__label {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.3;
}

.region-compact {
  padding: 1rem 1.2rem;
  border-radius: 16px;
  border: 1px solid rgba(17, 81, 50, 0.12);
  background: #fff;
  min-height: 85px;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.region-compact__status {
  font-size: 0.88rem;
  color: var(--mint-700);
  font-weight: 600;
  margin: 0;
}

.region-compact__action {
  font-size: 0.85rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.3;
}

@keyframes organicOrbit {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: rotate(180deg) scale(1.05);
    opacity: 0.6;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 0.8;
  }
}

@media (max-width: 720px) {
  .atlas-hero {
    grid-template-columns: 1fr;
  }
}
</style>
