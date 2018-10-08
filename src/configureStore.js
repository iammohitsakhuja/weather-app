import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import locations from './reducers/locations'

const persistedState = {
  locationsById: {
    'NT_slcvtDdQxNuhascaVc1.yD': {
      city: 'Sahibzada Ajit Singh Nagar',
      country: 'India',
      currently: {
        apparentTemperature: 23.81,
        cloudCover: 0.71,
        dewPoint: 19.86,
        humidity: 0.81,
        icon: 'partly-cloudy-day',
        ozone: 271.19,
        precipIntensity: 0.0838,
        precipProbability: 0.05,
        precipType: 'rain',
        pressure: 1010.46,
        summary: 'Mostly Cloudy',
        temperature: 23.3,
        time: 1537850377,
        uvIndex: 5,
        visibility: 16.09,
        windBearing: 232,
        windGust: 10.44,
        windSpeed: 2.29,
      },
      latitude: 30.70347,
      longitude: 76.69162,
      id: 'NT_slcvtDdQxNuhascaVc1.yD',
      state: 'PB',
    },
  },
  ids: ['NT_slcvtDdQxNuhascaVc1.yD'],
  cardState: 'EXPANDED',
  expandedCardId: 'random',
}

const configureStore = () => {
  // Apply middlewares.
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger)

  // Use Redux DevTools in development.
  /* eslint-disable no-underscore-dangle */
  const storeEnhancers =
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(...middlewares)
      : compose(
          applyMiddleware(...middlewares)
          // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
  /* eslint-enable */

  return createStore(locations, persistedState, storeEnhancers)
}

export default configureStore
