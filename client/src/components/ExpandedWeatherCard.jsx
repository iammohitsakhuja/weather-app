import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import AnimatedWeatherIconsReact from './AnimatedWeatherIconsReact'
import DailyForecastSection from './DailyForecastSection'
import WeatherAttributesSection from './WeatherAttributesSection'
import { getLocationData } from '../reducers/locations'

import '../styles/expanded-weather-card.scss'

const getTemperature = temperature => parseInt(temperature)
const getIconName = iconName => iconName.toUpperCase().replace(/-/g, '_')
const getFormattedDate = time => moment.unix(time).format('MMMM Do, YYYY')

const ExpandedWeatherCard = ({ location }) => {
  const { city, country, currently, hourly, daily } = location
  const { time, summary, icon, apparentTemperature } = currently

  const currentTime = Date.now()

  return (
    <div className="expanded-weather-card">
      <section className="date">
        <span>{getFormattedDate(time)}</span>
      </section>

      <section className="time">
        {moment(currentTime).format('hh:mm')}
        <span className="time-modifier">{moment(currentTime).format('A')}</span>
      </section>

      <section className="current-temperature">
        {getTemperature(apparentTemperature)}
        &deg;
      </section>

      <section className="location-and-forecast">
        <section className="location">
          {city}, {country}
        </section>
        <section className="forecast">{summary}</section>
      </section>

      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <section className="hourly-forecast">
        <div className="hourly-temperature-forecast">
          <div className="time">7pm</div>
          <div className="temperature">21&deg;</div>
          <div className="precipitation">
            <AnimatedWeatherIconsReact icon="RAIN" size={12} />
            70%
          </div>
        </div>
        <div className="hourly-temperature-forecast">
          <div className="time">11pm</div>
          <div className="temperature">19&deg;</div>
          <div className="precipitation">
            <AnimatedWeatherIconsReact icon="RAIN" size={12} />
            75%
          </div>
        </div>
        <div className="hourly-temperature-forecast">
          <div className="time">2am</div>
          <div className="temperature">16&deg;</div>
          <div className="precipitation">
            <AnimatedWeatherIconsReact icon="RAIN" size={12} />
            80%
          </div>
        </div>
        <div className="hourly-temperature-forecast">
          <div className="time">5am</div>
          <div className="temperature">15&deg;</div>
          <div className="precipitation">
            <AnimatedWeatherIconsReact icon="RAIN" size={12} />
            60%
          </div>
        </div>
        <div className="hourly-temperature-forecast">
          <div className="time">8am</div>
          <div className="temperature">18&deg;</div>
          <div className="precipitation">
            <AnimatedWeatherIconsReact icon="RAIN" size={12} />
            45%
          </div>
        </div>
      </section>

      <section className="animated-weather-icon">
        <AnimatedWeatherIconsReact icon={getIconName(icon)} size={48} />
      </section>
      {/* eslint-enable */}

      <section className="summary">Drizzle starting in an hour.</section>

      <section className="weather-animation-frame">Reserved for displaying weather animation frame.</section>

      <DailyForecastSection data={daily.data} />

      <WeatherAttributesSection todaysData={daily.data[0]} />
    </div>
  )
}

ExpandedWeatherCard.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    currently: PropTypes.shape({
      time: PropTypes.number.isRequired,
      summary: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      apparentTemperature: PropTypes.number.isRequired,
    }).isRequired,
    hourly: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          precipProbability: PropTypes.number.isRequired,
          temperature: PropTypes.number.isRequired,
          apparentTemperature: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
    daily: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.number.isRequired,
          icon: PropTypes.string.isRequired,
          precipProbability: PropTypes.number.isRequired,
          temperatureHigh: PropTypes.number.isRequired,
          temperatureLow: PropTypes.number.isRequired,
          apparentTemperatureHigh: PropTypes.number.isRequired,
          apparentTemperatureLow: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  location: getLocationData(state),
})

export default connect(mapStateToProps)(ExpandedWeatherCard)
