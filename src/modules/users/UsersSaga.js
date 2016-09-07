import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { get } from '@utils/request'
import { SEARCH_USERS, addUsers, searchUsersFailed } from './UsersState'

export function* searchUsers({ payload }) {
  try {
    const response = yield call(get, `https://api.github.com/search/users?q=${payload}`)
    yield put(addUsers(response))

  } catch (e) {
    yield put(searchUsersFailed(e))
  }
}

export default function* UserSaga() {
  yield* takeEvery(SEARCH_USERS, searchUsers)
}
