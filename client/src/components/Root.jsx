import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Root
