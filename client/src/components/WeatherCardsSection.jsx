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
      currently: PropTypes.shape({
        time: PropTypes.number.isRequired,
        summary: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        precipProbability: PropTypes.number.isRequired,
        precipType: PropTypes.string,
        temperature: PropTypes.number.isRequired,
        apparentTemperature: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
}

const mapStateToProps = state => ({
  locations: getLocations(state),
})

export default connect(mapStateToProps)(WeatherCardsSection)
