import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/Home.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'  // JobDetails.vue
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetails,
    props: true
  },
  // redirect 
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // 404 path
  {
    path: '/:catchAll(.*)',
    name: "notFound",
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
