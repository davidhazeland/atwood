import api from 'services/api'

import * as myself from './action'
export default myself

const baseEndpoint = `/actions`

export function fetch(query) {
  const endpoint = `${baseEndpoint}`
  return api.request({
    url: endpoint,
    method: 'GET'
  })
}
