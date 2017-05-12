import api from 'services/api'

import * as myself from './account'
export default myself

const baseEndpoint = `/advert_accounts`

export function fetch() {
  const endpoint = `${baseEndpoint}`
  return api.request({
    url: endpoint,
    method: 'GET'
  })
}
