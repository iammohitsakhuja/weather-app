import React from 'react'

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

const weatherInfo = {
  location: {
    city: 'Chandigarh',
    country: 'India',
  },
  temperature: 36,
  time: new Date(),
}

const WeatherCardsSection = () => (
  <WeatherCard cardStyle={cardStyle} weatherIcon={weatherIcon} weatherInfo={weatherInfo} />
)

export default WeatherCardsSection
