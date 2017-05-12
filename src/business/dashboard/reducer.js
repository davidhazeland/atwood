import freeze from 'deep-freeze'
import { handleActions } from 'redux-actions'

import { clear } from './actions'

export const name = 'Dashboard'

export const initialState = freeze({

})

export default handleActions({
  [clear]: () => initialState
}, initialState)