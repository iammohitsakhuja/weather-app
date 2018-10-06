import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import locations from './reducers/locations'

const configureStore = () => {
  // Apply middlewares.
  const middlewares = []
  if (process.env.NODE_ENV === 'production') middlewares.push(createLogger)

  return createStore(locations, applyMiddleware(...middlewares))
}

export default configureStore
