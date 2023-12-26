import Vue from 'vue'
import VueRouter from 'vue-router'
import getToken from '@/utils/token.js'
Vue.use(VueRouter)

const routes = []

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
