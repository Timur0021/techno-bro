import { createRouter, createWebHistory } from 'vue-router'

import Blogs from '../views/Blog/Blogs.vue';
import Blog from '../views/Blog/Blog.vue';
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
      path: '/blog/:slug',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
    },
  ],
})

export default router
