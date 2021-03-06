import * as actionTypes from '../actionTypes'

export const storeResult = counter => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().counter.counter
      console.log(oldCounter)
      dispatch(saveResult(counter))
    }, 2000)
  }
}

export const saveResult = counter => {
  return {
    type: actionTypes.STORE_RESULT,
    counter: counter
  }
}

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  }
}