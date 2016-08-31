import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { call } from 'redux-saga/effects'

import { get } from '@utils/request'
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
