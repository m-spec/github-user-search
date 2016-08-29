import { fork } from "redux-saga/effects"
import ExampleSaga from "@modules/example/ExampleSaga"
import UsersSaga from "@modules/users/UsersSaga"


//Import your module sagas here and fork them!
export default function* RootSaga() {
  yield fork(ExampleSaga)
  yield fork(UsersSaga)
}
