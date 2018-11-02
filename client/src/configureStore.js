import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import locations from './reducers/locations'

const persistedState = {
  locationsById: {
    'NT_slcvtDdQxNuhascaVc1.yD': {
      city: 'Sahibzada Ajit Singh Nagar',
      state: 'PB',
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
    },
    NT_o44BdSAJPG3BafyX0XzU7B: {
      city: 'Quezon City',
      state: 'National Capital Region',
      country: 'Philippines',
      timezone: 'Asia/Manila',
      currently: {
        time: 1541074851,
        summary: 'Drizzle',
        icon: 'rain',
        precipIntensity: 0.7264,
        precipProbability: 0.18,
        precipType: 'rain',
        temperature: 28.07,
        apparentTemperature: 30.78,
        dewPoint: 22.04,
        humidity: 0.7,
        pressure: 1012.02,
        windSpeed: 12.09,
        windGust: 12.91,
        windBearing: 92,
        cloudCover: 0.36,
        uvIndex: 0,
        visibility: 9.66,
        ozone: 249.43,
      },
      latitude: 14.67534,
      longitude: 121.09653,
      id: 'NT_o44BdSAJPG3BafyX0XzU7B',
    },
  },
  ids: ['NT_slcvtDdQxNuhascaVc1.yD', 'NT_o44BdSAJPG3BafyX0XzU7B'],
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
          applyMiddleware(...middlewares),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
  /* eslint-enable */

  return createStore(locations, persistedState, storeEnhancers)
}

export default configureStore
