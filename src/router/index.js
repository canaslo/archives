import Vue from 'vue'
import VueRouter from 'vue-router'
import getToken from '@/utils/token.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { auth: false, keepAlive: false }
  },
  {
    path: '/404',
    name: 'Defined',
    component: () => import('@/views/404/index'),
    meta: { auth: false, keepAlive: false }
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && ![from.name].includes('Login')) {
    getToken ? next({ path: '/login' }) : next()
  } else {
    next()
  }
})
router.afterEach((route) => {
  console.log(`路由后置守卫: ${route}`)
})
export default router
