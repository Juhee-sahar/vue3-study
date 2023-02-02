import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/number',
      name: 'number',
      component: () => import('../views/NumberView.vue')
    },
    {
      path: '/respons',
      name: 'respons',
      component: () => import('../views/ResponsCheck.vue')
    },
    {
      path: '/rsp',
      name: 'rsp',
      component: () => import('../views/RockScissorsPaper.vue')
    },
    {
      path: '/lotto',
      name: 'lotto',
      component: () => import('../views/LottoGenerator.vue')
    },
    {
      path: '/tictactoe',
      name: 'tictactoe',
      component: () => import('../views/TicTacToe.vue')
    },
    {
      path: '/tictactoeMitt',
      name: 'tictactoeMitt',
      component: () => import('../views/TicTacToeMitt.vue')
    },
    {
      path: '/tictactoeVuex',
      name: 'tictactoeVuex',
      component: () => import('../views/TicTacToeVuex.vue')
    },
    {
      path: '/tictactoeVuexNoComponents',
      name: 'tictactoeVuexNoComponents',
      component: () => import('../views/TicTacToeVuexNoComponents.vue')
    },
    {
      path: '/tictactoeSlot',
      name: 'tictactoeSlot',
      component: () => import('../views/TicTacToeSlot.vue')
    },
    {
      path: '/mineseeper',
      name: 'mineseeper',
      component: () => import('../views/MineSweeper.vue')
    },
  ]
})

export default router
