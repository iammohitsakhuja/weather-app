import React from 'react'
import PropTypes from 'prop-types'

import HourlyForecast from './HourlyForecast'

const HourlyForecastSection = ({ hourly }) => (
  <section className="hourly-forecast-section">
    {hourly.map(hourlyData => (
      <HourlyForecast
        key={hourlyData.time}
        time={hourlyData.time}
        temperature={hourlyData.apparentTemperature || hourlyData.temperature}
        precipProbability={hourlyData.precipProbability}
      />
    ))}
  </section>
)

HourlyForecastSection.propTypes = {
  hourly: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number.isRequired,
      apparentTemperature: PropTypes.number.isRequired,
      temperature: PropTypes.number.isRequired,
      precipProbability: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default HourlyForecastSection
