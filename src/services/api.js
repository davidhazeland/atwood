import { create, updateToken } from 'odem/utils/api'
import { get } from './token'

import { apiBaseURL } from 'config'

const api = create({
  baseURL: apiBaseURL,
  token: get()
});

export default api;