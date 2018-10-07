import axios from 'axios'

const { REACT_APP_PLACE_DETAILS_URI, REACT_APP_WEATHER_API_URI } = process.env

const addLocation = (id, suggestionData) => async dispatch => {
  try {
    // Get the latitude and longitude of the given location (by using its location id).
    let response = await axios.get(REACT_APP_PLACE_DETAILS_URI, { params: { locationid: id } })
    const { Latitude, Longitude } = response.data.Response.View[0].Result[0].Location.DisplayPosition

    // Get the weather data for the receive latitude and longitude.
    const requestURI = `${REACT_APP_WEATHER_API_URI}/${Latitude},${Longitude}?`
    response = await axios.get(requestURI, {
      params: {
        exclude: 'minutely,hourly,daily',
        units: 'ca',
      },
    })

    // Dispatch an action with the received data.
    const { currently, latitude, longitude } = response.data
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
