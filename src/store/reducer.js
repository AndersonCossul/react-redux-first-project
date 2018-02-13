import * as actionTypes from './actions'

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT_COUNTER:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter
        })
      }
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.id)
      }
  }
  return state
}

export default reducer
