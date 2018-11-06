import React from 'react'
import PropTypes from 'prop-types'

import getAttributes from './getAttributes'

const WeatherAttribute = ({ attributeType, attributePayload }) => {
  const { icon, imgAlt, attributeName, attributeValue } = getAttributes(attributeType, attributePayload)

  return (
    <div className="weather-attribute">
      <div className="attribute-icon">
        <img src={icon} alt={imgAlt} />
      </div>
      <div className="attribute-name">{attributeName}</div>
      <div className="attribute-value">{attributeValue}</div>
    </div>
  )
}

WeatherAttribute.propTypes = {
  attributeType: PropTypes.oneOf(['PRECIPITATION', 'TEMPERATURE', 'HUMIDITY', 'WIND_SPEED', 'MOON_PHASE']).isRequired,
  attributePayload: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default WeatherAttribute
