// application root reducer
import reducer from '@redux/reducer';

console.log(reducer(null, {}))

// Initial application state
export const initialState = reducer(null, {});

// Run an action through all reducers
export const dispatch = (state, action) => reducer(state, action);