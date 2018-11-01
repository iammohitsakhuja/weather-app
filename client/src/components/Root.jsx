import React from 'react'
import { Provider } from 'react-redux'
import propTypes from 'prop-types'

import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

Root.propTypes = {
  // eslint-disable-next-line
  store: propTypes.object.isRequired,
}

export default Root
