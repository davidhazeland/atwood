import {createAction} from 'redux-actions'

export const CLEAR = 'account-list/CLEAR'
export const INITIALIZE = 'account-list/INITIALIZE'
export const SET = 'account-list/SET'

export const clear = createAction(CLEAR)
export const initialize = createAction(INITIALIZE)
export const set = createAction(SET)
