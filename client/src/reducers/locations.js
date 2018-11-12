import { combineReducers } from 'redux'

import { pick } from '../utils'
import {
  CARD_EXPANDED,
  CARD_SHRINKED,
  CARD_DELETED,
  FETCH_LOCATION_DATA_REQUEST,
  FETCH_LOCATION_DATA_SUCCESS,
  FETCH_LOCATION_DATA_FAILURE,
  APP_DATA_PURGED,
} from '../actions/action-types'

const ids = (state = [], action) => {
  switch (action.type) {
    case FETCH_LOCATION_DATA_REQUEST:
      if (!state.includes(action.id)) return [...state, action.id]
      return state
    case CARD_DELETED:
      return state.filter(id => id !== action.id)
    case APP_DATA_PURGED:
      return []
    default:
      return state
  }
}

const locationsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOCATION_DATA_REQUEST:
      return {
        ...state,
        [action.id]: { ...state[action.id], id: action.id, isFetching: true, errorMessage: null },
      }
    case FETCH_LOCATION_DATA_SUCCESS:
      return {
        ...state,
        [action.location.id]: { ...state[action.location.id], ...action.location, isFetching: false },
      }
    case FETCH_LOCATION_DATA_FAILURE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          id: action.id,
          isFetching: false,
          errorMessage: action.errorMessage,
          ...action.suggestionData,
        },
      }
    case CARD_DELETED:
      return pick(state, Object.keys(state).filter(id => id !== action.id))
    case APP_DATA_PURGED:
      return {}
    default:
      return state
  }
}

const cardState = (state = 'STACKED', action) => {
  switch (action.type) {
    case CARD_EXPANDED:
      return 'EXPANDED'
    case CARD_SHRINKED:
    case CARD_DELETED:
    case APP_DATA_PURGED:
      return 'STACKED'
    default:
      return state
  }
}

const expandedCardId = (state = null, action) => {
  switch (action.type) {
    case CARD_EXPANDED:
      return action.id
    case CARD_SHRINKED:
    case CARD_DELETED:
    case APP_DATA_PURGED:
      return null
    default:
      return state
  }
}

const locations = combineReducers({
  locationsById,
  ids,
  cardState,
  expandedCardId,
})

export default locations

export const getLocations = state => state.ids.map(id => state.locationsById[id])
export const getCardState = state => state.cardState
export const getLocationData = state => state.locationsById[state.expandedCardId]
