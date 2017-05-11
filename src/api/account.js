import api from 'services/api';

import * as myself from './booking';
export default myself;

const baseEndpoint = `/accounts`;

export function fetch({page, date}) {
  const endpoint = `${baseEndpoint}`;
  return api.get(endpoint, {
    params: {
      page,
      date
    }
  });
}
