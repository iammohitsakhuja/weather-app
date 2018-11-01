import express from 'express'

import getAutocompleteSuggestions from '../controllers/autocompleteController'
import getWeatherData from '../controllers/weatherController'

const router = express.Router()

router.get('/autocomplete/:query', getAutocompleteSuggestions)

router.get('/weather/:locationId', getWeatherData)

export default router
