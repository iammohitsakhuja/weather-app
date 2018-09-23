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

const WeatherCardsSection = ({ data }) => {
  // TODO: Create a loading card.
  if (data === null) return <h3>Loading...</h3>

  return data.map(city => (
    <WeatherCard key={city.location.city} cardStyle={cardStyle} weatherIcon={weatherIcon} weatherInfo={city} />
  ))
}

WeatherCardsSection.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      location: propTypes.shape({
        city: propTypes.string,
        country: propTypes.string,
      }),
      temperature: propTypes.number,
      time: propTypes.instanceOf(Date),
    })
  ),
}

export default WeatherCardsSection
