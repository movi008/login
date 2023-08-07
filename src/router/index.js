import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../components/Signin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/Signup.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../components/Welcome.vue')
    }
  ]
})

export default router
