import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import middlewares from './middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(compose(applyMiddleware(...middlewares)))
)

export default reducers
