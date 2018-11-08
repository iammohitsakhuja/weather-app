import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AnimatedWeatherIconsReact from '../AnimatedWeatherIconsReact'
import HourlyForecastSection from './HourlyForecastSection'
import DailyForecastSection from './DailyForecastSection'
import WeatherAttributesSection from './WeatherAttributesSection'
import { getLocationData } from '../../reducers/locations'
import { getTemperature, getIconName, getFormattedTime, getFormattedModifier, getFormattedDate } from '../../utils'
import { shrinkCard } from '../../actions'

import '../../styles/expanded-weather-card.scss'

const getHourlyData = (hourlyData, lastRefreshTime, gap = 3, maxItems = 5) => {
  let currentGap = gap
  let numItems = 0

  return hourlyData.reduce((accumulator, currentValue) => {
    if (currentValue.time >= lastRefreshTime && numItems < maxItems) {
      if (currentGap === gap) {
        accumulator.push(currentValue)
        numItems += 1
      }
      currentGap -= 1
      if (currentGap === 0) currentGap = gap
    }

    return accumulator
  }, [])
}

const ExpandedWeatherCard = ({ location, handleClick }) => {
  const { id, city, country, currently, hourly, daily } = location
  const { time, icon, apparentTemperature, temperature } = currently

  return (
    <div className="expanded-weather-card" onClick={() => handleClick(id)}>
      {/* Date */}
      <section className="date">
        <span>{getFormattedDate(time)}</span>
      </section>

      {/* Time */}
      <section className="time">
        {getFormattedTime(time)}
        <span className="time-modifier">{getFormattedModifier(time)}</span>
      </section>

      {/* Current temperature */}
      <section className="current-temperature">
        {getTemperature(apparentTemperature || temperature)}
        &deg;
      </section>

      {/* Location and forecast */}
      <section className="location-and-forecast">
        <section className="location">
          {city}, {country}
        </section>
        <section className="forecast">{currently.summary}</section>
      </section>

      {/* Hourly forecast section */}
      <HourlyForecastSection hourly={getHourlyData(hourly.data, time)} />

      {/* Animated weather icon */}
      <section className="animated-weather-icon">
        <AnimatedWeatherIconsReact icon={getIconName(icon)} size={48} />
      </section>

      {/* Summary */}
      <section className="summary">{hourly.summary}</section>

      {/* Weather animation frame */}
      <section className="weather-animation-frame">Reserved for displaying weather animation frame.</section>

      {/* Daily forecast section */}
      <DailyForecastSection data={daily.data} />

      {/* Weather attributes section */}
      <WeatherAttributesSection todaysData={daily.data[0] || {}} />
    </div>
  )
}

ExpandedWeatherCard.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    currently: PropTypes.shape({
      time: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      apparentTemperature: PropTypes.number.isRequired,
    }).isRequired,
    hourly: PropTypes.shape({
      summary: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.number.isRequired,
          apparentTemperature: PropTypes.number.isRequired,
          temperature: PropTypes.number.isRequired,
          precipProbability: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
    daily: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.number.isRequired,
          icon: PropTypes.string.isRequired,
          temperatureHigh: PropTypes.number.isRequired,
          temperatureLow: PropTypes.number.isRequired,
          apparentTemperatureHigh: PropTypes.number.isRequired,
          apparentTemperatureLow: PropTypes.number.isRequired,
          precipProbability: PropTypes.number.isRequired,
          precipType: PropTypes.string,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  location: getLocationData(state),
})

const mapDispatchToProps = dispatch => ({
  handleClick: id => dispatch(shrinkCard(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpandedWeatherCard)
