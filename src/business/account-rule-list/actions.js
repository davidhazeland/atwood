import {createAction} from 'redux-actions'
import {actions as listActions} from 'ironlake/businesses/list'

import API from 'api/rule'

export const CLEAR = 'account-rule-list/CLEAR'

export const clear = createAction(CLEAR)

export const fetchRequest = payload => listActions.fetchRequest({
  ...payload,
  endpoint: API.fetch
})
