import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { get } from '@utils/request'
import { SEARCH_USERS, addUsers, searchUsersFailed } from './UsersState'

function buildQuery(query, filters, apiKey) {
  const combinedFilters = Object.keys(filters)
    .map(key => filters[key] === 'all' ? '' : `${key}:${filters[key]}`)
    .join('+')
  const accessParam = apiKey && apiKey !== 'null' ? `&access_token=${apiKey}` : ''
  return `${query}+${combinedFilters}+type:user&sort=followers${accessParam}`
}

export function* searchUsers({ payload }) {
  try {
    const { freetext, ...filters } = payload.filters
    const response = yield call(get, `https://api.github.com/search/users?q=${buildQuery(freetext, filters, payload.apiKey)}`)
    yield put(addUsers(response))

  } catch (e) {
    yield put(searchUsersFailed(e))
  }
}

export default function* UserSaga() {
  yield* takeEvery(SEARCH_USERS, searchUsers)
}
