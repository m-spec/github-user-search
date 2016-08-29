import loggerMiddleware from './middleware/loggerMiddleware';
import sagaMiddleware from './middleware/sagaMiddleware';

// define store middlewares as an array
export default [
  loggerMiddleware,
  sagaMiddleware
];