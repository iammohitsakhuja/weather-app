import React from 'react'
import PropTypes from 'prop-types'

import WeatherAttribute from './WeatherAttribute'

const WeatherAttributesSection = ({ todaysData }) => {
  const {
    apparentTemperatureLow,
    apparentTemperatureHigh,
    precipProbability,
    humidity,
    windSpeed,
    moonPhase,
  } = todaysData

  return (
    <section className="weather-attributes-section">
      {/* Precipitation */}
      <WeatherAttribute attributeType="PRECIPITATION" attributePayload={{ precipProbability }} />

      {/* Temperature */}
      <WeatherAttribute
        attributeType="TEMPERATURE"
        attributePayload={{ apparentTemperatureLow, apparentTemperatureHigh }}
      />

      {/* Humidity */}
      <WeatherAttribute attributeType="HUMIDITY" attributePayload={{ humidity }} />

      {/* Wind Speed */}
      <WeatherAttribute attributeType="WIND_SPEED" attributePayload={{ windSpeed }} />

      {/* Moon Phase */}
      <WeatherAttribute attributeType="MOON_PHASE" attributePayload={{ moonPhase }} />
    </section>
  )
}

WeatherAttributesSection.propTypes = {
  todaysData: PropTypes.shape({
    apparentTemperatureLow: PropTypes.number.isRequired,
    apparentTemperatureHigh: PropTypes.number.isRequired,
    precipProbability: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    moonPhase: PropTypes.number.isRequired,
  }).isRequired,
}

export default WeatherAttributesSection
