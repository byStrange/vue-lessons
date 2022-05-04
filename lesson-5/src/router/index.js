import { createRouter, createWebHistory } from 'vue-router'
import App from '../App' 

const routes = [
  {
    path: '/',
    name: "Home",
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
