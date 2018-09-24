import React from 'react'
import propTypes from 'prop-types'

import WeatherCard from './WeatherCard'

const WeatherCardsSection = ({ locations }) => {
  if (locations.length === 0) return <h3>Search for a location!</h3>

  return locations.map(location => <WeatherCard key={location.locationId} location={location} />)
}

// Type checking for received props.
WeatherCardsSection.propTypes = {
  locations: propTypes.arrayOf(
    propTypes.shape({
      locationId: propTypes.string.isRequired,
      city: propTypes.string.isRequired,
      state: propTypes.string.isRequired,
      country: propTypes.string.isRequired,
      lat: propTypes.number.isRequired,
      lng: propTypes.number.isRequired,
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
    })
  ).isRequired,
}

export default WeatherCardsSection
