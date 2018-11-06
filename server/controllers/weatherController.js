import axios from 'axios'
import debug from 'debug'

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

  // Fetch and return the weather data for the received latitude and longitude.
  return axios.get(`${weatherApiURI}/${Latitude},${Longitude}`, {
    params: {
      exclude: 'minutely,flags',
      units: 'ca',
    },
  })
}

const customLogger = debug('weather')

const getWeatherData = async (req, res, next) => {
  try {
    const response = await getWeatherDataUtil(req.query.locationId)

    return res.send(response.data)
  } catch (err) {
    customLogger(err)
    return next(err)
  }
}

export default getWeatherData
