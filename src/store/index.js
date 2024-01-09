import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js' // 异步修改状态
import mutations from './mutations.js' // 同步修改状态
import getters from './getters.js' // 查询复杂对象内的单一值
import user from './modules/user.js' // 用户相关的vuex模块
import router from './modules/router.js' // 路由相关的vuex模块
Vue.use(Vuex)

const state = {}

/**
 * @description 状态机模块
 * @param user 用户相关数据及操作
 */
const modules = { user, router }

export default new Vuex.Store({
  state,
  modules,
  mutations,
  actions,
  getters
})
