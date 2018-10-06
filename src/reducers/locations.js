const locations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [...state, action.location]
    case 'REMOVE_LOCATION':
      return state.filter(location => location.locationId !== action.id)
    default:
      return state
  }
}

export default locations
