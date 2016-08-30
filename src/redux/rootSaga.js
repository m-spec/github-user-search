import { fork } from 'redux-saga/effects'
import UsersSaga from '@modules/users/UsersSaga'


//Import your module sagas here and fork them!
export default function* RootSaga() {
  yield fork(UsersSaga)
}
