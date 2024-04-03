import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DhaagaDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
