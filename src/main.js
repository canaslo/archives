import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Token from './utils/token.js'
import BASE64 from './utils/base64.js'

import ElementUI from 'element-ui'
import './assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font-icons/iconfont.css'

Vue.prototype.$token = Token
Vue.prototype.$base64 = BASE64
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
