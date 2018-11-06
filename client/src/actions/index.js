import axios from 'axios'

const addLocation = (id, suggestionData) => async dispatch => {
  try {
    // Get the weather data for the given location id.
    const response = await axios.get(`/weather`, { params: { locationId: id } })

    const { latitude, longitude, currently, hourly, daily } = response.data

    // Make sure to store day-wise data for a max of 5 days only.
    if (daily.data.length > 5) daily.data.length = 5

    // Dispatch an action with the received data.
    dispatch({
      type: 'ADD_LOCATION',
      location: {
        id,
        ...suggestionData,
        latitude,
        longitude,
        currently,
        hourly,
        daily,
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
