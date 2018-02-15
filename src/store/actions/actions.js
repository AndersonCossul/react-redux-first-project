export const INCREMENT_COUNTER  = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER  = 'DECREMENT_COUNTER'
export const ADD_COUNTER        = 'ADD_COUNTER'
export const SUBTRACT_COUNTER   = 'SUBTRACT_COUNTER'
export const STORE_RESULT       = 'STORE_RESULT'
export const DELETE_RESULT      = 'DELETE_RESULT'

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  }
}

export const addCounter = value => {
  return {
    type: ADD_COUNTER,
    value: value
  }
}

export const subtractCounter = value => {
  return {
    type: SUBTRACT_COUNTER,
    value: value
  }
}
export const storeResult = counter => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(counter))
    }, 2000)
  }
}

export const saveResult = counter => {
  return {
    type: STORE_RESULT,
    counter: counter
  }
}


export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    id: id
  }
}