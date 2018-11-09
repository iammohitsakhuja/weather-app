import axios from 'axios'

import { FETCH_LOCATION_DATA_REQUEST, FETCH_LOCATION_DATA_SUCCESS, FETCH_LOCATION_DATA_FAILURE } from './action-types'

// Helper function to fetch location data for a location with the given id.
const fetchDataFromApi = async id => {
  // Get the weather data for the given location id.
  const response = await axios.get('/api/weather', { params: { locationId: id } })

  const { latitude, longitude, currently, hourly, daily, fact } = response.data

  // Make sure to store day-wise data for a max of 5 days only.
  if (daily.data.length > 5) daily.data.length = 5

  return {
    latitude,
    longitude,
    currently,
    hourly,
    daily,
    fact,
  }
}

const locationDataRequest = id => ({
  type: FETCH_LOCATION_DATA_REQUEST,
  id,
})

const locationDataSuccess = (id, locationData, suggestionData = {}) => ({
  type: FETCH_LOCATION_DATA_SUCCESS,
  location: {
    id,
    ...suggestionData,
    ...locationData,
  },
})

const locationDataFailure = (id, err, suggestionData) => ({
  type: FETCH_LOCATION_DATA_FAILURE,
  id,
  errorMessage: err.message || 'There was a problem in fetching weather data for this location',
  suggestionData,
})

const handleDataFetching = async (dispatch, id, suggestionData) => {
  // Dispatch an action that a request has been initiated for the location with the given id.
  dispatch(locationDataRequest(id))

  try {
    // Fetch the location data for the given id.
    const locationData = await fetchDataFromApi(id)

    // Dispatch an action with the received data.
    dispatch(locationDataSuccess(id, locationData, suggestionData))
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') console.error(err)

    // If an error has occurred, then dispatch an action that data could not be fetched, and pass along the error.
    // Passing the suggestion data (if any) is important to ensure that city, state and country names are not lost,
    // which they will be if the request fails when adding the card for the first time.
    dispatch(locationDataFailure(id, err, suggestionData))
  }
}

const fetchLocationData = (id, suggestionData) => async dispatch => {
  await handleDataFetching(dispatch, id, suggestionData)
}

const fetchAllLocationsData = () => async (dispatch, getState) => {
  const { ids } = getState()

  await Promise.all(
    ids.map(async id => {
      await handleDataFetching(dispatch, id)
    })
  )
}

export { fetchLocationData, fetchAllLocationsData }
