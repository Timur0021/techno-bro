import { createRouter, createWebHistory } from 'vue-router'

import Blogs from '../views/Blog/Blogs.vue';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blogs',
      name: 'Blog',
      component: Blogs,
    },
  ],
})

export default router
