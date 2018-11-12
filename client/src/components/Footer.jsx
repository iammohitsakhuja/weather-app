import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { purgeAppData } from '../actions'

import '../styles/footer.scss'

const Footer = ({ purgeAppData }) => (
  <footer>
    <button type="button" onClick={purgeAppData}>
      Reset app data
    </button>
    <div className="api-credits">
      <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
    </div>
    <div className="icon-credits">
      Icons by <a href="https://www.flaticon.com">Freepik</a>
    </div>
    <div className="authors">
      Created with{' '}
      <span className="icon">
        <FontAwesomeIcon icon={faHeart} />
      </span>{' '}
      by <a href="https://github.com/mohitsakhuja">MS</a> and <a href="https://github.com/ManuSekhon">MS</a>
    </div>
  </footer>
)

Footer.propTypes = {
  purgeAppData: PropTypes.func.isRequired,
}

export default connect(
  null,
  { purgeAppData }
)(Footer)
