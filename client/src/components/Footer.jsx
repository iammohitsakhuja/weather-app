import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import '../styles/footer.scss'

const Footer = () => (
  <footer>
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

export default Footer
