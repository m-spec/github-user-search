import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { get } from '@utils/request'
import { REQUEST_USER, addUser, requestUserFailed } from './UsersState'


export function* requestUser() {
  try {
    const response = yield call(get, 'http://api.randomuser.me/?inc=name,gender,location,picture&noinfo')
    const user = response && response.results && response.results[0]
    yield put(addUser(user))
  } catch (e) {
    yield put(requestUserFailed(e))
  }
}

export default function* UserSaga() {
  yield* takeEvery(REQUEST_USER, requestUser)
}
