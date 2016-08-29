import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { promisedRandomInteger } from '@utils/randomNumber'
import { ASYNC_RANDOM, set } from './ExampleState'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* asyncRandom() {
  const randomedInteger = yield call(promisedRandomInteger, 100)
  yield put(set(randomedInteger))
}

export default function* mySaga() {
  yield* takeEvery(ASYNC_RANDOM, asyncRandom)
}
