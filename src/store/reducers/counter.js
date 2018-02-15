import * as actions from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER:
      return updateObject(state, {counter: state.counter + 1})
    case actions.DECREMENT_COUNTER:
      return updateObject(state, {counter: state.counter - 1})
    case actions.ADD_COUNTER:
      return updateObject(state, {counter: state.counter + action.value})
    case actions.SUBTRACT_COUNTER:
      return updateObject(state, {counter: state.counter - action.value})
  }
  return state
}

export default reducer
