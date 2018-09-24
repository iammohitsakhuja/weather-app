import React from 'react'
import propTypes from 'prop-types'

import WeatherCard from './WeatherCard'

const cardStyle = {
  backgroundColor: '#FFB100',
  width: 500,
  height: 160,
  color: '#FFFFFF',
  borderRadius: 3,
  fontSize: 25,
  fontWeight: 'bold',
}

const weatherIcon = {
  float: 'right',
  marginRight: 20,
  height: 50,
  width: 50,
  marginBottom: 15,
}

const WeatherCardsSection = ({ locations }) => {
  // TODO: Create a loading card.
  if (locations.length === 0) return <h3>Search for a location!</h3>

  return locations.map(location => (
    <WeatherCard
      key={location.latitude.toString() + location.longitude.toString()}
      cardStyle={cardStyle}
      location={location}
      weatherIcon={weatherIcon}
    />
  ))
}

WeatherCardsSection.propTypes = {
  locations: propTypes.arrayOf(
    propTypes.shape({
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
    })
  ).isRequired,
}

export default WeatherCardsSection
