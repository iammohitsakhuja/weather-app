import React from 'react'
import propTypes from 'prop-types'

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
        <div className="weather-icon">☀️</div>
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
  location: propTypes.shape({
    id: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    state: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
    latitude: propTypes.number.isRequired,
    longitude: propTypes.number.isRequired,
    currently: propTypes.shape({
      time: propTypes.number.isRequired,
      summary: propTypes.string,
      icon: propTypes.string.isRequired,
      precipIntensity: propTypes.number,
      precipType: propTypes.string,
      temperature: propTypes.number.isRequired,
      apparentTemperature: propTypes.number.isRequired,
      dewPoint: propTypes.number,
      humidity: propTypes.number.isRequired,
      pressure: propTypes.number.isRequired,
      windSpeed: propTypes.number.isRequired,
      windGust: propTypes.number,
      windBearing: propTypes.number,
      cloudCover: propTypes.number,
      uvIndex: propTypes.number,
      visibility: propTypes.number,
      ozone: propTypes.number,
    }).isRequired,
  }).isRequired,
}

export default WeatherCard
