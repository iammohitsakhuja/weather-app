import axios from 'axios'
import debug from 'debug'

// Get the api keys and codes from the environment.
const { DARKSKY_API_KEY, HERE_MAPS_API_ID, HERE_MAPS_APP_CODE } = process.env

// Array about weather facts
const facts = [
  'About 2,000 thunderstorms rain down on Earth every minute.',
  'For each minute of the day, 1 billion tonnes of rain falls on the Earth.',
  'It was so cold in 1684 that the Thames River in England froze solid for two months.',
  'The air located around a lightning bolt is heated to around 30,000°C. This is 5 times hotter than the surface of the sun.',
  'Mawsynram in Meghalaya, India is the wettest place on Earth with an annual rainfall of more than 11 meters.',
  'In Antarctica, snow can fall so hard you can’t see your hand in front of your face.',
  'In 525 BC a sandstorm buried hundreds of soldiers in an Egyptian desert.',
  'Cats and dogs have been known to sense when a tornado is approaching.',
  'The biggest single snowflake ever recorded was a massive 38 cm wide and 20 cm thick in Fort Keogh, Montana, USA on 28 Jan 1887.',
  "In just ten minutes a hurricane can unleash more energy than all the world's nuclear weapons combined.",
  'The heaviest hailstone in history weighed one kilogram.',
]

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
    response.data.fact = facts[Math.floor(facts.length * Math.random())]
    return res.send(response.data)
  } catch (err) {
    customLogger(err)
    return next(err)
  }
}

export default getWeatherData
