import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { call } from 'redux-saga/effects'

import { get } from '@utils/request'
import { fromJS } from '@utils/immutable'
import { requestUser as requestUserGenerator } from '../UsersSaga'
import { addUser } from '../UsersState'

describe('UsersSaga', () => {
  let iterator

  beforeEach(() => {
    iterator = requestUserGenerator()
  })

  it('request user from randomuser.me', () => {
    expect(iterator.next().value).to.deep.equal(call(get, 'http://api.randomuser.me/?inc=name,gender,location,picture&noinfo'))
  })

  it('adds fetched user', () => {
    iterator.next() // Get the promised stuff

    const action = addUser()
    expect(iterator.next().value.PUT.action).to.deep.equal(action)
  })
})
//
// import { takeEvery } from 'redux-saga'
// import { call, put } from 'redux-saga/effects'
//
// import { get } from '@utils/request'
// import { fromJS } from '@utils/immutable'
// import { REQUEST_USER, addUser } from './UsersState'
//
//
// export function* requestUser() {
//   const { results } = yield call(get, 'http://api.randomuser.me/?inc=name,gender,location,picture&noinfo')
//   const user = results[0]
//   user.firstName = user.name.first
//   user.lastName = user.name.last
//   yield put(addUser(fromJS.User(user)))
// }
//
// export default function* UserSaga() {
//   yield* takeEvery(REQUEST_USER, requestUser)
// }
//
