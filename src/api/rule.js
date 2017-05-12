import api from 'services/api'

import * as myself from './rule'
export default myself

const baseEndpoint = `/advert_accounts`

export function fetch(accountId) {
  const endpoint = `${baseEndpoint}/${accountId}/rules`
  return api.request({
    url: endpoint,
    method: 'GET'
  })
}
