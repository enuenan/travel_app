import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import( /* webpackChunkName: "DestinationShow" */ '../views/DestinationShow.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router