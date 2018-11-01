import axios from 'axios'
import debug from 'debug'

// Get the api keys and codes from the environment.
const { HERE_MAPS_API_ID, HERE_MAPS_APP_CODE } = process.env

/* eslint-disable max-len */
// Generate autocomplete URI using the API key and app code.
const autocompleteURI = `https://autocomplete.geocoder.api.here.com/6.2/suggest.json?&app_id=${HERE_MAPS_API_ID}&app_code=${HERE_MAPS_APP_CODE}`
/* eslint-enable */

const customLogger = debug('autocomplete')

const getAutocompleteSuggestions = async (req, res, next) => {
  if (req.query.value.length === 0) return res.send({})

  try {
    const response = await axios.get(autocompleteURI, {
      params: { query: req.query.value },
    })

    return res.send(response.data)
  } catch (err) {
    customLogger(err)
    return next(err)
  }
}

export default getAutocompleteSuggestions
