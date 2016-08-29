import createSagaMiddleware from "redux-saga"
import ExampleSaga from "@modules/example/ExampleSaga"

const sagaMiddleware = createSagaMiddleware()





export const runSaga = () => sagaMiddleware.run(ExampleSaga)
export default sagaMiddleware

