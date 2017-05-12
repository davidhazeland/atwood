import { create } from 'odem/utils/api'
import { get } from './token'

import { apiBaseURL } from 'config'

const api = create({
  baseURL: apiBaseURL,
  token: get()
})

export default {
  request(...params) {
    return api.request(...params)
      .then(response => response.data)
      .catch(error => {
        throw error
      })
  }
}
