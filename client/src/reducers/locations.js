import { combineReducers } from 'redux'

const ids = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [...state, action.location.id]
    default:
      return state
  }
}

const locationsById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        ...state,
        [action.location.id]: action.location,
      }
    default:
      return state
  }
}

const cardState = (state = 'STACKED', action) => {
  switch (action.type) {
    case 'CARD_EXPANDED':
      return 'EXPANDED'
    case 'CARD_SHRINKED':
      return 'STACKED'
    default:
      return state
  }
}

const expandedCardId = (state = null, action) => {
  switch (action.type) {
    case 'CARD_EXPANDED':
    case 'EXPANDED_CARD_SWITCHED':
      return action.id
    case 'CARD_SHRINKED':
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
