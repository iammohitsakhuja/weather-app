import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import debug from 'debug'

import './configureEnvironment'
import router from './routes'

const name = 'Weather App'

const app = express()
const PORT = process.env.PORT || 3001
const customLogger = debug('app')

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes.
app.use('/', router)

// Error handler.
app.use((err, req, res, next) => res.status(err.status || 500).send(err.message || 'There was a problem'))

// Start the server.
app.listen(PORT, () => {
  customLogger('%o server listening on port: %o', name, PORT)
})
