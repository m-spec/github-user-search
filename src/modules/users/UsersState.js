import { Map, List } from 'immutable'
import { fromJS } from '@utils/immutable'

/* eslint-disable no-multi-spaces */
export const REQUEST_USER        = 'Users/REQUEST_USER'
export const REQUEST_USER_FAILED = 'Users/REQUEST_USER_FAILED'
export const ADD_USER            = 'Users/ADD_USER'
/* eslint-enable no-multi-spaces */

const initialState = new Map({
  usersList: new List(),
  fetchingUser: false,
  fetchUserError: false
})

export default function UsersStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_USER:
      return state
        .set('fetchingUser', false)
        .update('usersList', (list) => list.push(fromJS.User(action.payload)))
    case REQUEST_USER:
      return state.set('fetchingUser', true)
    case REQUEST_USER_FAILED:
      return state.set('fetchUserError', action.payload)
    default:
      return state
  }
}

export function requestUser() {
  return {
    type: REQUEST_USER
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function requestUserFailed(e) {
  return {
    type: REQUEST_USER_FAILED,
    payload: e.message || e
  }
}
