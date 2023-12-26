import Cookies from 'js-cookie'

export const getToken = (key) => Cookies.get(key)
export const setToken = (key, val) => Cookies.set(key, val)
export const delToken = (key) => Cookies.get(key)
