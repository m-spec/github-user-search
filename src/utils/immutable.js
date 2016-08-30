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

export default immutable
