import api from 'services/api'

import * as myself from './activity'
export default myself

const baseEndpoint = `/rules`

export function fetch(query, {ruleId}) {
  const endpoint = `${baseEndpoint}/${ruleId}/activities`
  return api.request({
    url: endpoint,
    method: 'GET'
  })
}
