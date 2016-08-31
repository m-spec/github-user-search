import { describe, it } from 'mocha'
import { expect } from 'chai'
import { initialState, dispatch } from '@test/state.js'

import * as UsersActions from '../UsersState'

describe('UsersState', () => {
  describe('ADD_USER', () => {
    it('can add users', () => {
      const user = {
        firstName: 'Fred',
        lastName: 'Dunning'
      }

      const oneUserState = dispatch(initialState, UsersActions.addUser(user))
      const usersList = oneUserState.getIn(['users', 'usersList'])
      expect(usersList.size).to.equal(1)
      expect(usersList.first().firstName).to.equal('Fred')
      expect(usersList.first().lastName).to.equal('Dunning')
    })
  })

  describe('REQUEST_USER', () => {
    it('sets fetchingUser flag on', () => {
      const fetchingState = dispatch(initialState, UsersActions.requestUser())
      expect(fetchingState.getIn(['users', 'fetchingUser'])).to.equal(true)
    })
  })

  describe('REQUEST_USER_FAILED', () => {
    it('sets fetchUserError flag on', () => {
      const failureState = dispatch(
        initialState, UsersActions.requestUserFailed({ message: 'test failure' }
      ))
      expect(failureState.getIn(['users', 'fetchUserError'])).to.equal('test failure')
    })
  })
})
