import createSagaMiddleware from 'redux-saga'
import RootSaga from '../rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const runSaga = () => sagaMiddleware.run(RootSaga)
export default sagaMiddleware

