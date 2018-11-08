import axios from 'axios'

import { ADD_LOCATION, LOCATION_DATA_FETCHED } from './action-types'

// Helper function to fetch location data for a location with the given id.
const fetchLocationData = async id => {
  try {
    // Get the weather data for the given location id.
    const response = await axios.get('/api/weather', { params: { locationId: id } })

    const { latitude, longitude, currently, hourly, daily } = response.data

    // Make sure to store day-wise data for a max of 5 days only.
    if (daily.data.length > 5) daily.data.length = 5

    return {
      latitude,
      longitude,
      currently,
      hourly,
      daily,
    }
  } catch (err) {
    console.error(err)
    return undefined
  }
}

const addLocation = (id, suggestionData) => async dispatch => {
  try {
    // Fetch the location data for the given id.
    const locationData = await fetchLocationData(id)

    // Dispatch an action with the received data.
    dispatch({
      type: ADD_LOCATION,
      location: {
        id,
        ...suggestionData,
        ...locationData,
      },
    })
  } catch (err) {
    console.error(err)
  }
}

const fetchAllLocationsData = () => async (dispatch, getState) => {
  const { ids } = getState()
  try {
    await Promise.all(
      ids.map(async id => {
        // Fetch the location data for the given id.
        const locationData = await fetchLocationData(id)

        // Dispatch an action with the received data.
        dispatch({
          type: LOCATION_DATA_FETCHED,
          location: {
            id,
            ...locationData,
          },
        })
      })
    )
  } catch (err) {
    console.error(err)
  }
}

export { addLocation, fetchAllLocationsData }
