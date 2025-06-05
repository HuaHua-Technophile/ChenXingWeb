import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/intelligent-integration',
      name: 'intelligent-integration',
      component: () => import('../views/IntelligentIntegrationView.vue'),
    },
    {
      path: '/tech-support',
      name: 'tech-support',
      component: () => import('../views/TechSupportView.vue'),
    },
    {
      path: '/software-dev',
      name: 'software-dev',
      component: () => import('../views/SoftwareDevView.vue'),
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('../views/CasesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
