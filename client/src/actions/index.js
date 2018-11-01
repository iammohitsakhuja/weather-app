import axios from 'axios'

const addLocation = (id, suggestionData) => async dispatch => {
  try {
    // Get the weather data for the given location id.
    const response = await axios.get(`/weather`, { params: { locationId: id } })

    const { currently, latitude, longitude } = response.data

    // Dispatch an action with the received data.
    dispatch({
      type: 'ADD_LOCATION',
      location: {
        id,
        ...suggestionData,
        currently,
        latitude,
        longitude,
      },
    })
  } catch (err) {
    console.error(err)
    dispatch({
      type: 'ADD_LOCATION_ERROR',
      message: err.message || 'Something went wrong.',
    })
  }
}

const expandCard = id => ({
  type: 'CARD_EXPANDED',
  id,
})

const shrinkCard = () => ({
  type: 'CARD_SHRINKED',
})

const switchExpandedCard = id => ({
  type: 'EXPANDED_CARD_SWITCHED',
  id,
})

export { addLocation, expandCard, shrinkCard, switchExpandedCard }
