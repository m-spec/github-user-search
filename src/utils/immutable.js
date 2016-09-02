import immutable, { Map, fromJS as originalFromJS } from 'immutable'
import User, { fromJS as UserFromJS } from '@models/User'

const knownRecordTypes = new Map({
  User
})

export function fromJS(any) {
  return originalFromJS(any)
}

knownRecordTypes.forEach((Type, name) => {
  fromJS[name] = (any => new Type(fromJS(any)))
})

fromJS.User = UserFromJS

//Rootstate represents the whole application state.
//The fromJS is for rehydrating the application from JSON.
fromJS.RootState = (any) => fromJS(any)
  .updateIn(['users', 'usersList'], usersList => usersList.map(fromJS.User))

export default immutable

