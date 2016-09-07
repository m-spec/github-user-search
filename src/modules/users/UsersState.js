import { Map, List } from 'immutable'
import { fromJS } from '@utils/immutable'

/* eslint-disable no-multi-spaces */
export const SEARCH_USERS        = 'Users/SEARCH_USERS'
export const SEARCH_USERS_FAILED = 'Users/SEARCH_USERS_FAILED'
export const ADD_USERS           = 'Users/ADD_USERS'
export const SET_USER_FILTERS    = 'Users/SET_USER_FILTERS'
/* eslint-enable no-multi-spaces */

const initialState = new Map({
  usersList: new List(),
  fetchingUser: false,
  fetchUserError: false,
  userFilters: new Map({ gender: 'all' })
})

export default function UsersStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_USERS:
      return state
        .set('fetchingUser', false)
        .update('usersList', () => (
          new List(action.payload.map((user) => fromJS.User(user)))
        ))
    case SEARCH_USERS:
      return state.set('fetchingUser', true)
    case SEARCH_USERS_FAILED:
      return state.set('fetchUserError', action.payload)
    case SET_USER_FILTERS:
      return state.setIn(['userFilters', action.payload.filter], action.payload.value)
    default:
      return state
  }
}

export function searchUsers(query) {
  return {
    type: SEARCH_USERS,
    payload: query
  }
}

export function addUsers(response = {}) {
  return {
    type: ADD_USERS,
    payload: response.items
  }
}

export function setUserFilters(name, value) {
  return {
    type: SET_USER_FILTERS,
    payload: {
      filter: name,
      value
    }
  }
}

export function searchUsersFailed(e) {
  return {
    type: SEARCH_USERS_FAILED,
    payload: e.message || e
  }
}
