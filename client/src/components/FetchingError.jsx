import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'

import '../styles/fetching-error.scss'

const FetchingError = ({ errorMessage, handleClick }) => (
  <div className="fetching-error">
    <span className="error-message">{errorMessage}</span>
    <Button ghost className="retry-button" onClick={handleClick}>
      Retry
    </Button>
  </div>
)

FetchingError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default FetchingError
