import { combineReducers } from 'redux'

const ids = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [...state, action.id]
    default:
      return state
  }
}

const locationsById = (state = {}, action) => state

const locations = combineReducers({
  locationsById,
  ids,
})

export default locations

export const getLocations = state => state.ids.map(id => state.locationsById[id])
