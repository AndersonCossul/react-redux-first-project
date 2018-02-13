import * as actions from './actions'

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(), // not really unique but good enough here!
          name: 'Anderson',
          age: Math.floor( Math.random() * 40 )
        })
      }
  }
  return state
}

export default reducer
