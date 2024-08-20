import { createRouter, createWebHistory } from 'vue-router'
import Game from './routes/game'
import Menu from './routes/menu'
import Categories from './routes/categories'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../App.vue'),
      children: [
        Game,
        Menu,
        Categories
      ]
    },
  ]
})

export default router