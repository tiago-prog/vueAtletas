import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import atletasGuard from './atletas-guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/newAtleta',
      name: 'newAtleta',

      component: () => import('../views/NewAtletaView.vue')
    },
    {
      beforeEnter: atletasGuard, // Adicionar o guard antes da rota
      path: '/atleta',
      name: 'atleta',
      component: () => import('../views/AtletaView.vue'),
    },
  ]
})

export default router
