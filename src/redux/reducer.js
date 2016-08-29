import {Map} from 'immutable';
import {combineReducers} from 'redux-immutable';

//Import reducers from modules here
import ExampleState from "@modules/example/ExampleState"

const reducers = {
  example: ExampleState
};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = new Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  return namespacedReducer(state || void 0, action);
}