import { combineReducers } from 'redux-immutable'
import routerReducer from '@utils/routerReducer'

import { fromJS } from '@utils/immutable'
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
  if (action.type === 'RESTORE_STATE') {
    return fromJS.RootState(action.payload)
  }
  return namespacedReducer(state || undefined, action)
}
