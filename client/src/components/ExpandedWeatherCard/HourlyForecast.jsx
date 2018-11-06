import React from 'react'
import PropTypes from 'prop-types'

import { RainHourly } from '../../icons'
import { getTemperature, getPrecipProbability, getFormattedTimeWithModifier } from '../../utils'

const HourlyForecast = ({ time, temperature, precipProbability }) => (
  <div className="hourly-forecast">
    <div className="time">{getFormattedTimeWithModifier(time)}</div>
    <div className="temperature">
      {getTemperature(temperature)}
      &deg;
    </div>
    <div className="precipitation">
      <img src={RainHourly} alt="Hourly rain icon" />
      {getPrecipProbability(precipProbability)}%
    </div>
  </div>
)

HourlyForecast.propTypes = {
  time: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  precipProbability: PropTypes.number.isRequired,
}

export default HourlyForecast
