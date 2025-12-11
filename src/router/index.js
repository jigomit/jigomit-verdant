import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/impact-atlas',
      name: 'impact-atlas',
      component: () => import('../pages/ImpactAtlas.vue')
    },
    {
      path: '/field-stories',
      name: 'field-stories',
      component: () => import('../pages/FieldStories.vue')
    },
    {
      path: '/tree-planting',
      name: 'tree-planting',
      component: () => import('../pages/TreePlanting.vue')
    },
    {
      path: '/climate-action',
      name: 'climate-action',
      component: () => import('../pages/ClimateAction.vue')
    },
    {
      path: '/plastic-reduction',
      name: 'plastic-reduction',
      component: () => import('../pages/PlasticReduction.vue')
    },
    {
      path: '/wildlife-protection',
      name: 'wildlife-protection',
      component: () => import('../pages/WildlifeProtection.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../pages/Insights.vue')
    },
    {
      path: '/blogs/:slug',
      name: 'blog-post',
      component: () => import('../pages/BlogPost.vue')
    },
    {
      path: '/partner',
      name: 'partner',
      component: () => import('../pages/Partner.vue')
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: () => import('../pages/Volunteer.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../pages/Donate.vue')
    },
    {
      path: '/corporate-partnerships',
      name: 'corporate-partnerships',
      component: () => import('../pages/Corporate.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
