import * as actions from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.counter
        })
      })
    case actions.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.id)
      }
  }
  return state
}

export default reducer
