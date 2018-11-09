import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AnimatedWeatherIconsReact from './AnimatedWeatherIconsReact'
import FetchingError from './FetchingError'
import { getTemperature, getIconName, getFormattedDate } from '../utils'
import { expandCard, fetchLocationData } from '../actions'

import '../styles/weather-card.scss'

const WeatherCard = props => {
  const { id, city, country, errorMessage, isFetching, currently, expandCard, fetchLocationData } = props

  if (isFetching && currently === undefined) return <Card loading className="weather-card" />

  if (errorMessage !== null)
    return <FetchingError errorMessage={errorMessage} handleClick={() => fetchLocationData(id)} />

  const { time, summary, icon, apparentTemperature, temperature } = currently

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div className="weather-card" onClick={() => expandCard(id)}>
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
    </div>
  )
  /* eslint-enable */
}

WeatherCard.propTypes = {
  id: PropTypes.string.isRequired,
  city: PropTypes.string,
  country: PropTypes.string,
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  currently: PropTypes.shape({
    time: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    precipProbability: PropTypes.number.isRequired,
    precipType: PropTypes.string,
    temperature: PropTypes.number.isRequired,
    apparentTemperature: PropTypes.number,
  }),
  expandCard: PropTypes.func.isRequired,
  fetchLocationData: PropTypes.func.isRequired,
}

WeatherCard.defaultProps = {
  city: undefined,
  country: undefined,
  errorMessage: null,
  currently: undefined,
}

export default connect(
  null,
  { expandCard, fetchLocationData }
)(WeatherCard)
