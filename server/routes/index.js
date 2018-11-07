import express from 'express'
import path from 'path'

import getAutocompleteSuggestions from '../controllers/autocompleteController'
import getWeatherData from '../controllers/weatherController'

const router = express.Router()

router.get('/api/autocomplete', getAutocompleteSuggestions)

router.get('/api/weather', getWeatherData)

// If the route does not match any of the above defined routes.
router.get('*', (req, res) => {
  // During production, serve the `index.html` of the React frontend.
  if (process.env.NODE_ENV === 'production') res.sendFile(path.join(`${__dirname}/../client-build/index.html`))
  // During development, redirect to the React dev server.
  else res.redirect('http://localhost:3000/')
})

export default router
