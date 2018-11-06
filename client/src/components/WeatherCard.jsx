import React from 'react'
import PropTypes from 'prop-types'

import AnimatedWeatherIconsReact from './AnimatedWeatherIconsReact'
import { getTemperature, getIconName, getFormattedDate } from '../utils'

import '../styles/weather-card.scss'

const WeatherCard = ({ location }) => {
  const { city, country, currently } = location
  const { time, summary, icon, apparentTemperature } = currently

  return (
    <div className="weather-card">
      <section className="date-and-weather-icon">
        <div className="date">{getFormattedDate(time)}</div>
        <div className="weather-icon">
          <AnimatedWeatherIconsReact icon={getIconName(icon)} size={28} />
        </div>
      </section>

      <section className="current-forecast">
        <div className="temperature">
          {getTemperature(apparentTemperature)}
          &deg;
        </div>
        <section className="location-and-info">
          <div className="location">
            {city}, {country}
          </div>
          <div className="info">{summary}</div>
        </section>
      </section>
    </div>
  )
}

WeatherCard.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    currently: PropTypes.shape({
      time: PropTypes.number.isRequired,
      summary: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      precipProbability: PropTypes.number.isRequired,
      precipType: PropTypes.string,
      temperature: PropTypes.number.isRequired,
      apparentTemperature: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default WeatherCard
