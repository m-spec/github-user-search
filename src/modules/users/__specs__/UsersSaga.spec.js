import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { call } from 'redux-saga/effects'

import { get } from '@utils/request'
import { requestUser as requestUserGenerator } from '../UsersSaga'
import { addUser, requestUserFailed } from '../UsersState'

describe('UsersSaga', () => {
  let iterator

  beforeEach(() => {
    iterator = requestUserGenerator()
  })

  it('request user from randomuser.me', () => {
    expect(iterator.next().value).to.deep.equal(call(get, 'http://api.randomuser.me/?inc=name,gender,location,picture&noinfo'))
  })

  it('calls ADD_USER with fetched user', () => {
    iterator.next() // Get the promised stuff

    const action = addUser()
    expect(iterator.next().value.PUT.action).to.deep.equal(action)
  })

  it('calls REQUEST_USER_FAILURE if thrown', () => {
    const error = { message: 'test error' }
    //Step into the try block by yielding the api call
    iterator.next()

    //Throw the iterator, and check catched action
    const action = iterator.throw(error).value.PUT.action

    expect(action).to.deep.equal(requestUserFailed(error))
  })
})
