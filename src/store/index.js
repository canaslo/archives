import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import user from './modules/user.js'
Vue.use(Vuex)

const state = {}

/**
 * @description 状态机模块
 * @param user 用户相关数据及操作
 */
const modules = { user }

export default new Vuex.Store({
  state,
  modules,
  mutations,
  actions,
  getters
})
