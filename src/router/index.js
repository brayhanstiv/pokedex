import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import PokemonDetailPage from '../pages/PokemonDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetail',
    component: PokemonDetailPage,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "Create" */ '@/pages/PokemonDetailPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
