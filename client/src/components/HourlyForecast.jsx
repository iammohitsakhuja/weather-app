import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import { RainHourly } from '../icons'

const getTime = time => moment.unix(time).format('ha') // Formats time like: `7am` or `11pm`.
const getTemperature = temperature => Math.round(temperature)
const getPrecipProbability = precipProbability => Math.round(precipProbability * 100)

const HourlyForecast = ({ time, temperature, precipProbability }) => (
  <div className="hourly-forecast">
    <div className="time">{getTime(time)}</div>
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
