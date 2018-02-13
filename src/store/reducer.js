const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.value
      }
    case 'SUBTRACT_COUNTER':
      return {
        ...state,
        counter: state.counter - action.value
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter
        })
      }
    case 'DELETE_RESULT':
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.id)
      }
  }
  return state
}

export default reducer
