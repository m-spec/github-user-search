import { describe, it } from 'mocha'
import { expect } from 'chai'
import { initialState, dispatch } from '@test/state.js'

import * as UsersActions from '../UsersState'

describe('UsersState', () => {
  describe('ADD_USERS', () => {
    it('can add users', () => {
      const users = {
        items: [{
          login: 'foo',
          html_url: 'bar'
        }]
      }

      const oneUserState = dispatch(initialState, UsersActions.addUsers(users))
      const usersList = oneUserState.getIn(['users', 'usersList'])
      expect(usersList.size).to.equal(1)
      expect(usersList.first().login).to.equal('foo')
      expect(usersList.first().html_url).to.equal('bar')
    })
  })

  describe('SEARCH_USERS', () => {
    it('sets fetchingUser flag on', () => {
      const fetchingState = dispatch(initialState, UsersActions.searchUsers())
      expect(fetchingState.getIn(['users', 'fetchingUser'])).to.equal(true)
    })
  })

  describe('REQUEST_USER_FAILED', () => {
    it('sets fetchUserError flag on', () => {
      const failureState = dispatch(
        initialState, UsersActions.searchUsersFailed({ message: 'test failure' }
      ))
      expect(failureState.getIn(['users', 'fetchUserError'])).to.equal('test failure')
    })
  })
})
