import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DhaagaDashboard.vue'
import ManageSubscription from '@/views/ManageSubscription.vue'
import Listing from '@/views/Listing.vue'
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
  {
    path: '/business-lsiting',
    name: 'listing',
    component: Listing
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
