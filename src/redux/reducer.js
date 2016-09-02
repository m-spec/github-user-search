import { combineReducers } from 'redux-immutable'
import routerReducer from '@utils/routerReducer'

// Import reducers from modules here
import UsersState from '@modules/users/UsersState'

const reducers = {
  users: UsersState,
  routing: routerReducer
}

const namespacedReducer = combineReducers(
  reducers
)

export default function mainReducer(state, action) {
  return namespacedReducer(state || undefined, action)
}
