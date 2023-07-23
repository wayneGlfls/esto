import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authGuard } from "@auth0/auth0-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },    
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile-page.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('../views/callback-page.vue')
    }


  ]
})

export default router
