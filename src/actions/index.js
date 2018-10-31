import axios from 'axios'

const { REACT_APP_PLACE_DETAILS_URI, REACT_APP_WEATHER_API_URI } = process.env

const getLatitudeLongitude = async id => {
  const response = await axios.get(REACT_APP_PLACE_DETAILS_URI, { params: { locationid: id } })
  return response.data.Response.View[0].Result[0].Location.DisplayPosition
}

const getWeatherData = async (Latitude, Longitude) => {
  const requestURI = `${REACT_APP_WEATHER_API_URI}/${Latitude},${Longitude}?`
  console.log(requestURI)
  const response = await axios.get(requestURI, {
    params: {
      exclude: 'minutely,hourly,daily',
      units: 'ca',
    },
  })

  console.log(response.data)

  return response.data
}

const addLocation = (id, suggestionData) => async dispatch => {
  try {
    // Get the latitude and longitude of the given location (by using its location id).
    const { Latitude, Longitude } = await getLatitudeLongitude(id)

    // Get the weather data for the received latitude and longitude.
    const { currently, latitude, longitude } = await getWeatherData(Latitude, Longitude)

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
