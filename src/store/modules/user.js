import { getToken } from '@/utils/token'

const state = {
  token: getToken('token') || '',
  name: getToken('name') || '',
  avatar: getToken('avatar') || '',
  roles: getToken('roles') || '',
  isCheck: getToken('isCheck') || '',
  username: getToken('username') || ''
}

const mutations = {
  SET_TOKEN: (state, token) => (state.token = token),
  SET_NAME: (state, name) => (state.name = name),
  SET_AVATAR: (state, avatar) => (state.avatar = avatar),
  SET_ROLES: (state, roles) => (state.roles = roles)
}

const actions = {}
export default {
  state,
  mutations,
  actions
}
