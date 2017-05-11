/* eslint-disable */
import api from 'services/api'

import * as myself from './account'
export default myself

const baseEndpoint = `/accounts`

export function fetch() {
  // const endpoint = `${baseEndpoint}`
  // return api.get(endpoint, {
  //   params: {
  //     page,
  //     date
  //   }
  // })
  return Promise.resolve({
    "data": [
      {
        "id": 1,
        "account_id": "1860230220918580",
        "name": "Mokona #1",
        "currency": "USD",
        "timezone_name": "America\/Los_Angeles",
        "created_at": "2017-05-02 07:34:58",
        "updated_at": "2017-05-02 07:34:58"
      }
    ]
  })
}
