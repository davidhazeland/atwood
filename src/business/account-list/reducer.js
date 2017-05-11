import freeze from 'deep-freeze'
import {handleActions} from 'redux-actions'

import {clear, set} from './actions'

export const name = 'AccountList'

export const initialState = freeze({
  data: []
})

export default handleActions({
  [clear]: () => initialState,

  [set]: (state, action) => {
    return freeze({
      ...state,
      ...action.payload
    })
  }
}, initialState)
