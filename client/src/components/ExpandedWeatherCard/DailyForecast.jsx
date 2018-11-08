import React from 'react'
import PropTypes from 'prop-types'

import AnimatedWeatherIconsReact from '../AnimatedWeatherIconsReact'
import { getPrecipProbability, formatTemperature, getIconName, getDayOfWeek } from '../../utils'

const DailyForecast = ({ icon, time, temperatureHigh, temperatureLow, precipProbability }) => (
  <div className="daily-forecast">
    <div className="daily-forecast-icon-day-container">
      <div className="daily-forecast-icon-day">
        <div className="daily-forecast-icon">
          <AnimatedWeatherIconsReact icon={getIconName(icon)} size={30} />
        </div>
        <div className="daily-forecast-day">{getDayOfWeek(time)}</div>
      </div>
    </div>
    <div className="daily-forecast-temperature-precipitation">
      <div className="daily-forecast-temperature">
        {formatTemperature(temperatureLow)}
        &deg; {formatTemperature(temperatureHigh)}
        &deg;
      </div>
      <div className="daily-forecast-precipitation">Rain {getPrecipProbability(precipProbability)}%</div>
    </div>
  </div>
)

DailyForecast.propTypes = {
  time: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  temperatureHigh: PropTypes.number.isRequired,
  temperatureLow: PropTypes.number.isRequired,
  precipProbability: PropTypes.number.isRequired,
}

export default DailyForecast
