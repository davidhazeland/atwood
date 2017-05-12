import { call, put, take, fork } from 'redux-saga/effects'

import * as actions from '../actions'

import API from 'api/account'

export function* handle({payload}) {
  try {
    const response = yield call(API.fetch)
    yield put(actions.set({
      data: response.data
    }))
  }
  catch (error) {
    throw error
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.initialize)

    yield fork(handle, action)
  }
}