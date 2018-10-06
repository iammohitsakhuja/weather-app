import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.min.css'

import Root from './components/Root'
import configureStore from './configureStore'

import './fonts'
import './styles/index.css'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
