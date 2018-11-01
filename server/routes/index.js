import express from 'express'

import getAutocompleteSuggestions from '../controllers/autocompleteController'
import getWeatherData from '../controllers/weatherController'

const router = express.Router()

router.get('/autocomplete', getAutocompleteSuggestions)

router.get('/weather', getWeatherData)

export default router
