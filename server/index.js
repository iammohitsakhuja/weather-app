import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import path from 'path'

import './configureEnvironment'
import router from './routes'

const name = 'Weather App'

const app = express()
const PORT = process.env.PORT || 3001

// Safety.
app.use(helmet())

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Compress all routes.
app.use(compression())

// Server static files from React frontend app, but only during production.
if (process.env.NODE_ENV === 'production') app.use(express.static(path.join(__dirname, 'client-build')))

// Routes.
app.use('/', router)

// Error handler.
app.use((err, req, res, next) => res.status(err.status || 500).send(err.message || 'There was a problem'))

// Start the server.
app.listen(PORT, () => {
  console.log('%o server listening on port: %o', name, PORT)
})
