import React from 'react'
import PropTypes from 'prop-types'

import AnimatedWeatherIconsReact from './AnimatedWeatherIconsReact'

import '../styles/weather-card.scss'

const WeatherCard = ({ location }) => {
  const { city, country, currently } = location
  const { temperature } = currently
  const time = Date.now()

  return (
    <div className="weather-card">
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <section className="date-and-weather-icon">
        <div className="date">December 31, 2018</div>
        <div className="weather-icon">
          <AnimatedWeatherIconsReact icon="RAIN" size={28} />
        </div>
      </section>

      <section className="current-forecast">
        <div className="temperature">23&deg;</div>
        <section className="location-and-info">
          <div className="location">Manchester by the Sea</div>
          <div className="info">Partly cloudy</div>
        </section>
      </section>
      {/* eslint-enable */}
    </div>
  )
}

WeatherCard.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    currently: PropTypes.shape({
      time: PropTypes.number.isRequired,
      summary: PropTypes.string,
      icon: PropTypes.string.isRequired,
      precipIntensity: PropTypes.number,
      precipType: PropTypes.string,
      temperature: PropTypes.number.isRequired,
      apparentTemperature: PropTypes.number.isRequired,
      dewPoint: PropTypes.number,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      windSpeed: PropTypes.number.isRequired,
      windGust: PropTypes.number,
      windBearing: PropTypes.number,
      cloudCover: PropTypes.number,
      uvIndex: PropTypes.number,
      visibility: PropTypes.number,
      ozone: PropTypes.number,
    }).isRequired,
  }).isRequired,
}

export default WeatherCard
