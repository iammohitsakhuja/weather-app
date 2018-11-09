import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import locations from './reducers/locations'

const configureStore = () => {
  // Define what to persist to local storage.
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['cardState', 'expandedCardId'],
  }

  // New reducer that will persist data.
  const persistedReducer = persistReducer(persistConfig, locations)

  // Apply middlewares.
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger)

  // Use Redux DevTools in development.
  /* eslint-disable no-underscore-dangle */
  const storeEnhancers =
    process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(...middlewares),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(...middlewares)
  /* eslint-enable */

  const store = createStore(persistedReducer, storeEnhancers)
  const persistor = persistStore(store)

  return { store, persistor }
}

export default configureStore
