import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker, { unregister } from './registerServiceWorker'

import './styles/index.css'

ReactDOM.render(<App />, document.getElementById('root'))
if (process.env.NODE_ENV === 'production') registerServiceWorker()
else unregister()
