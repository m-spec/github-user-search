import { Map, List } from 'immutable'
import { fromJS } from '@utils/immutable'

/* eslint-disable no-multi-spaces */
export const SEARCH_USERS        = 'Users/SEARCH_USERS'
export const SEARCH_USERS_FAILED = 'Users/SEARCH_USERS_FAILED'
export const ADD_USERS           = 'Users/ADD_USERS'
export const SET_FILTER          = 'Users/SET_USER_FILTERS'
export const SET_API_KEY         = 'Users/SET_API_KEY'
/* eslint-enable no-multi-spaces */

const initialState = new Map({
  usersList: new List(),
  fetchingUser: false,
  fetchUserError: false,
  apiKey: '',
  filter: new Map({ freetext: '', language: 'javascript', location: 'finland' })
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
    case SET_FILTER:
      return state.setIn(['filter', action.payload.filter], action.payload.value)
    case SET_API_KEY:
      return state.set('apiKey', action.payload)
    default:
      return state
  }
}

export function searchUsers(filters, apiKey) {
  return {
    type: SEARCH_USERS,
    payload: { filters, apiKey }
  }
}

export function addUsers(response = {}) {
  return {
    type: ADD_USERS,
    payload: response.items
  }
}

export function setFilter(name, value) {
  return {
    type: SET_FILTER,
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

export function setApiKey(apiKey) {
  return {
    type: SET_API_KEY,
    payload: apiKey
  }
}
