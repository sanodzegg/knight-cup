import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView';
import PersonalInfoView from '@/views/PersonalInfoView';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/test',
    name: 'personalInfo',
    component: PersonalInfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
