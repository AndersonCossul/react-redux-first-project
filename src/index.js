import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import counterReducer from './store/reducers/counter'
import resultsReducer from './store/reducers/results'

const rootReducer = combineReducers({
  counter: counterReducer,
  results: resultsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching action', action)
      const result = next(action)
      console.log('[Middleware] next state', store.getState())
      return result
    }
  }
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
