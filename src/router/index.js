import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DhaagaDashboard.vue'
import ManageSubscription from '@/views/ManageSubscription.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: ManageSubscription
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
