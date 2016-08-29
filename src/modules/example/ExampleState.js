import { Map } from 'immutable'


//Action names
/* eslint-disable no-multi-spaces */
export const INCREMENT      = 'ExampleState/INCREMENT'
export const DECREMENT      = 'ExampleState/DECREMENT'
export const MULTIPLY       = 'ExampleState/MULTIPLY'
export const RESET          = 'ExampleState/RESET'
export const ASYNC_RANDOM   = 'ExampleState/ASYNC_RANDOM'
export const SET            = 'ExampleState/SET'
/* eslint-enable no-multi-spaces */

// Initial state
const initialState = new Map({
  value: 0
})

// Action creators
export function increment(integer = 1) {
  return {
    type: INCREMENT,
    payload: integer
  }
}

export function decrement(integer = 1) {
  return {
    type: DECREMENT,
    payload: integer
  }
}

export function multiply(integer = 1) {
  return {
    type: MULTIPLY,
    payload: integer
  }
}

export function reset() {
  return {
    type: RESET
  }
}

export function set(integer = 0) {
  return {
    type: SET,
    payload: integer
  }
}

export function asyncRandom() {
  return {
    type: ASYNC_RANDOM
  }
}

// Reducer
export default function ExampleStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case INCREMENT:
      return state.update('value', (value) => value + action.payload)

    case DECREMENT:
      return state.update('value', (value) => value - action.payload)

    case MULTIPLY:
      return state.update('value', (value) => value * action.payload)

    case SET:
      return state.set('value', action.payload)

    case RESET:
      return initialState

    case ASYNC_RANDOM: //no-op, listened to by ExampleSaga
    default:
      return state
  }
}
