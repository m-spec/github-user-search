import {applyMiddleware, createStore, compose} from 'redux';

import middleware from './middleware';
import {runSaga} from "./middleware/sagaMiddleware"
import reducer from './reducer';

const enhancer = compose(
  applyMiddleware(...middleware)
);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

runSaga()

export default store;