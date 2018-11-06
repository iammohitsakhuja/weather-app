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
            precipIntensityMax: 0,
            precipProbability: 0,
            temperatureHigh: 26.45,
            temperatureLow: 12.53,
            apparentTemperatureHigh: 26.45,
            apparentTemperatureLow: 12.53,
            humidity: 0.42,
            windSpeed: 10.7,
          },
          {
            time: 1541442600,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.95,
            precipIntensityMax: 0,
            precipProbability: 0,
            temperatureHigh: 26.45,
            temperatureLow: 12.53,
            apparentTemperatureHigh: 26.45,
            apparentTemperatureLow: 12.53,
            humidity: 0.42,
            windSpeed: 10.7,
          },
          {
            time: 1541442600,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.95,
            precipIntensityMax: 0,
            precipProbability: 0,
            temperatureHigh: 26.45,
            temperatureLow: 12.53,
            apparentTemperatureHigh: 26.45,
            apparentTemperatureLow: 12.53,
            humidity: 0.42,
            windSpeed: 10.7,
          },
          {
            time: 1541442600,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.95,
            precipIntensityMax: 0,
            precipProbability: 0,
            temperatureHigh: 26.45,
            temperatureLow: 12.53,
            apparentTemperatureHigh: 26.45,
            apparentTemperatureLow: 12.53,
            humidity: 0.42,
            windSpeed: 10.7,
          },
          {
            time: 1541442600,
            summary: 'Clear throughout the day.',
            icon: 'clear-day',
            moonPhase: 0.95,
            precipIntensityMax: 0,
            precipProbability: 0,
            temperatureHigh: 26.45,
            temperatureLow: 12.53,
            apparentTemperatureHigh: 26.45,
            apparentTemperatureLow: 12.53,
            humidity: 0.42,
            windSpeed: 10.7,
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
