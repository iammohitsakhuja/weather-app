import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WeatherCard from './WeatherCard'
import { getLocations } from '../reducers/locations'

import '../styles/weather-cards-section.scss'

const WeatherCardsSection = ({ locations }) => {
  const children =
    locations.length === 0 ? (
      <h3>Search for a location!</h3>
    ) : (
      locations.map(location => <WeatherCard key={location.id} location={location} />)
    )

  return <div className="weather-cards-section">{children}</div>
}

// Type checking for received props.
WeatherCardsSection.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
}

const mapStateToProps = state => ({
  locations: getLocations(state),
})

export default connect(mapStateToProps)(WeatherCardsSection)
