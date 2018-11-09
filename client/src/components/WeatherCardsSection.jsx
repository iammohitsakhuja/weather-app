import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WeatherCard from './WeatherCard'
import { getLocations } from '../reducers/locations'

import '../styles/weather-cards-section.scss'

const WeatherCardsSection = ({ locations }) => {
  const children =
    locations.length === 0 ? (
      <h3 className="no-weather-cards">Search for a city, state or country!</h3>
    ) : (
      locations.map(location => <WeatherCard key={location.id} {...location} />)
    )

  return <div className="weather-cards-section">{children}</div>
}

// Type checking for received props.
WeatherCardsSection.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
}

const mapStateToProps = state => ({
  locations: getLocations(state),
})

export default connect(mapStateToProps)(WeatherCardsSection)
