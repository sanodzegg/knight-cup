import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView';
import PersonalInfoView from '@/views/PersonalInfoView';
import ChessInfoView from '@/views/ChessInfoView';
import CompleteView from '@/views/CompleteView';
import PageNotFound from '@/views/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'landingTab',
    component: LandingView
  },
  {
    path: '/personalForm',
    name: 'personalInfoTab',
    component: PersonalInfoView
  },
  {
    path: '/chessForm',
    name: 'chessInfoTab',
    component: ChessInfoView
  },
  {
    path: '/complete',
    name: 'CompleteTab',
    component: CompleteView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
