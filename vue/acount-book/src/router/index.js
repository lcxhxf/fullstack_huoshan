import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Data from '@/views/Data.vue'
import User from '@/views/User.vue'

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/data',
    component: Data
  },
  {
    path: '/user',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
