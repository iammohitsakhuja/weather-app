import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import locations from './reducers/locations'

const persistedState = {
  locationsById: {
    'NT_slcvtDdQxNuhascaVc1.yD': {
      id: 'NT_slcvtDdQxNuhascaVc1.yD',
      city: 'Sahibzada Ajit Singh Nagar',
      state: 'PB',
      country: 'India',
      latitude: 30.70347,
      longitude: 76.69162,
      currently: {
        time: 1541492993,
        summary: 'Clear',
        icon: 'clear-day',
        precipProbability: 0,
        temperature: 26.45,
        apparentTemperature: 26.45,
        humidity: 0.27,
        windSpeed: 18.44,
      },
      hourly: {
        summary: 'Clear throughout the day.',
        icon: 'clear-day',
        data: [
          {
            time: 1541489400,
            summary: 'Clear',
            icon: 'clear-day',
            precipProbability: 0,
            temperature: 26.13,
            apparentTemperature: 26.13,
            humidity: 0.26,
            windSpeed: 17.77,
          },
          {
            time: 1541489400,
            summary: 'Clear',
            icon: 'clear-day',
            precipProbability: 0,
            temperature: 26.13,
            apparentTemperature: 26.13,
            humidity: 0.26,
            windSpeed: 17.77,
          },
          {
            time: 1541489400,
            summary: 'Clear',
            icon: 'clear-day',
            precipProbability: 0,
            temperature: 26.13,
            apparentTemperature: 26.13,
            humidity: 0.26,
            windSpeed: 17.77,
          },
          {
            time: 1541489400,
            summary: 'Clear',
            icon: 'clear-day',
            precipProbability: 0,
            temperature: 26.13,
            apparentTemperature: 26.13,
            humidity: 0.26,
            windSpeed: 17.77,
          },
          {
            time: 1541489400,
            summary: 'Clear',
            icon: 'clear-day',
            precipProbability: 0,
            temperature: 26.13,
            apparentTemperature: 26.13,
            humidity: 0.26,
            windSpeed: 17.77,
          },
        ],
      },
      daily: {
        summary: 'No precipitation throughout the week, with high temperatures peaking at 27°C on Sunday.',
        icon: 'clear-day',
        data: [
          {
            time: 1541442600,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.95,
            precipProbability: 0,
            temperatureHigh: 25.72,
            temperatureLow: 13.24,
            apparentTemperatureHigh: 25.72,
            apparentTemperatureLow: 13.24,
            humidity: 0.43,
            windSpeed: 10.7,
          },
          {
            time: 1541529000,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.98,
            precipProbability: 0,
            temperatureHigh: 26.07,
            temperatureLow: 12.58,
            apparentTemperatureHigh: 26.07,
            apparentTemperatureLow: 12.58,
            humidity: 0.4,
            windSpeed: 7.27,
          },
          {
            time: 1541615400,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.03,
            precipProbability: 0,
            temperatureHigh: 25.55,
            temperatureLow: 13.37,
            apparentTemperatureHigh: 25.55,
            apparentTemperatureLow: 13.37,
            humidity: 0.42,
            windSpeed: 2.43,
          },
          {
            time: 1541701800,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.06,
            precipProbability: 0,
            temperatureHigh: 26.57,
            temperatureLow: 13.29,
            apparentTemperatureHigh: 26.57,
            apparentTemperatureLow: 13.29,
            humidity: 0.4,
            windSpeed: 2,
          },
          {
            time: 1541788200,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.09,
            precipProbability: 0,
            temperatureHigh: 26.66,
            temperatureLow: 14.39,
            apparentTemperatureHigh: 26.66,
            apparentTemperatureLow: 14.39,
            humidity: 0.38,
            windSpeed: 1.95,
          },
        ],
      },
    },
  },
  ids: ['NT_slcvtDdQxNuhascaVc1.yD'],
  cardState: 'EXPANDED',
  expandedCardId: 'NT_slcvtDdQxNuhascaVc1.yD',
}

const configureStore = () => {
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

  return createStore(locations, persistedState, storeEnhancers)
}

export default configureStore
