import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import pose from 'react-pose'

import AnimatedWeatherIconsReact from './AnimatedWeatherIconsReact'
import { getTemperature, getIconName, getFormattedDate } from '../utils'
import { expandCard } from '../actions'

import '../styles/weather-card.scss'

const Div = pose.div({
  closed: { y: '30px', opacity: 0 },
  open: { y: '0', opacity: 1 },
})

const WeatherCard = ({ location, expandCard }) => {
  const { id, city, country, currently } = location
  const { time, summary, icon, apparentTemperature, temperature } = currently

  return (
    <Div className="weather-card" onClick={() => expandCard(id)} initialPose="closed" pose="open">
      <section className="date-and-weather-icon">
        <div className="date">{getFormattedDate(time)}</div>
        <div className="weather-icon">
          <AnimatedWeatherIconsReact icon={getIconName(icon)} size={28} />
        </div>
      </section>

      <section className="current-forecast">
        <div className="temperature">
          {getTemperature(apparentTemperature || temperature)}
          &deg;
        </div>
        <section className="location-and-info">
          <div className="location">
            {city}, {country}
          </div>
          <div className="info">{summary}</div>
        </section>
      </section>
    </Div>
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
  expandCard: PropTypes.func.isRequired,
}

export default connect(
  null,
  { expandCard }
)(WeatherCard)
