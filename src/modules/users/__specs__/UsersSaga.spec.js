import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { call } from 'redux-saga/effects'

import { get } from '@utils/request'
import { searchUsers as searchUsersGenerator } from '../UsersSaga'
import { addUsers, searchUsersFailed } from '../UsersState'

describe('UsersSaga', () => {
  let iterator

  beforeEach(() => {
    iterator = searchUsersGenerator({ payload: 'test' })
  })

  it('request user from randomuser.me', () => {
    expect(iterator.next().value).to.deep.equal(
      call(get, 'https://api.github.com/search/users?q=test')
    )
  })

  it('calls ADD_USER with fetched user', () => {
    iterator.next() // Get the promised stuff

    const action = addUsers()
    expect(iterator.next().value.PUT.action).to.deep.equal(action)
  })

  it('calls REQUEST_USER_FAILURE if thrown', () => {
    const error = { message: 'test error' }
    //Step into the try block by yielding the api call
    iterator.next()

    //Throw the iterator, and check catched action
    const action = iterator.throw(error).value.PUT.action

    expect(action).to.deep.equal(searchUsersFailed(error))
  })
})
