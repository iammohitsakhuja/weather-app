import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import AnimatedWeatherIconsReact from './AnimatedWeatherIconsReact'

const getTemperature = temperature => parseInt(temperature)
const getIconName = iconName => iconName.toUpperCase().replace(/-/g, '_')

const isToday = time => moment.unix(time).isSame(Date.now(), 'day')
const isTomorrow = time => moment.unix(time).isSame(moment().add(1, 'days'), 'day')
const getWeekDay = time => moment.unix(time).format('dddd')

const getDayOfWeek = time => {
  if (isToday(time)) return 'Today'
  if (isTomorrow(time)) return 'Tomorrow'
  return getWeekDay(time)
}

const getPrecipProbability = precipProbability => parseInt(precipProbability * 100)

const DailyForecast = ({ icon, time, apparentTemperatureLow, apparentTemperatureHigh, precipProbability }) => (
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
        {getTemperature(apparentTemperatureLow)}
        &deg;-
        {getTemperature(apparentTemperatureHigh)}
        &deg;
      </div>
      <div className="daily-forecast-precipitation">Rain {getPrecipProbability(precipProbability)}%</div>
    </div>
  </div>
)

DailyForecast.propTypes = {
  icon: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  apparentTemperatureLow: PropTypes.number.isRequired,
  apparentTemperatureHigh: PropTypes.number.isRequired,
  precipProbability: PropTypes.number.isRequired,
}

export default DailyForecast
