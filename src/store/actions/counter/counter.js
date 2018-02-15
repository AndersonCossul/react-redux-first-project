import * as actionTypes from '../actionTypes'

export const incrementCounter = () => {
  return {
    type: actionTypes.INCREMENT_COUNTER
  }
}

export const decrementCounter = () => {
  return {
    type: actionTypes.DECREMENT_COUNTER
  }
}

export const addCounter = value => {
  return {
    type: actionTypes.ADD_COUNTER,
    value: value
  }
}

export const subtractCounter = value => {
  return {
    type: actionTypes.SUBTRACT_COUNTER,
    value: value
  }
}