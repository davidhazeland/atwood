import store from 'store'

import * as myself from './token'
export default myself

export function save(token) {
  store.set('token', token)
}

export function clear() {
  store.remove('token')
}

export function get() {
  return store.get('token')
}
