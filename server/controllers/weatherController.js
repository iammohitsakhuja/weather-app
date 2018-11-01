import axios from 'axios'

// Get the api keys and codes from the environment.
const { DARKSKY_API_KEY, HERE_MAPS_API_ID, HERE_MAPS_APP_CODE } = process.env

/* eslint-disable max-len */
// Generate URIs using the various API keys and app codes.
const placeDetailsURI = `https://geocoder.api.here.com/6.2/geocode.json?app_id=${HERE_MAPS_API_ID}&app_code=${HERE_MAPS_APP_CODE}`
const weatherApiURI = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}`
/* eslint-enable */

const getLatitudeLongitude = async id => {
  const response = await axios.get(placeDetailsURI, {
    params: { locationid: id },
  })
  return response.data.Response.View[0].Result[0].Location.DisplayPosition
}

const getWeatherDataUtil = async id => {
  // Get the latitude and longitude of the given location (by using its location id).
  const { Latitude, Longitude } = await getLatitudeLongitude(id)

  // Get the weather data for the received latitude and longitude.
  const requestURI = `${weatherApiURI}/${Latitude},${Longitude}`
  console.log(requestURI)

  const response = await axios.get(requestURI, {
    params: {
      exclude: 'minutely,hourly,daily',
      units: 'ca',
    },
  })

  return response
}

const getWeatherData = async (req, res, next) => {
  try {
    const response = getWeatherDataUtil(req.params.locationId)

    console.log(response.data)
    return res.send(response.data)
  } catch (err) {
    console.log(err)
    return next(err)
  }
}

export default getWeatherData
