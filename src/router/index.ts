import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/middleware/middleware.ts'
import Cookies from 'js-cookie'

const routes = [
  {
  path: '/login',
  name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/DefaultLayout.vue'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('../views//Dashboard/Dashboard.vue'),
    meta: {
      layout: 'LoggedLayout',
    }

  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(loadLayoutMiddleware)

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !Cookies.get('token')) next({name: 'login'})
  else next()

})

export default router