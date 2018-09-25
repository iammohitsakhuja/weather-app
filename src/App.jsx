import { Col, Row } from 'antd'
import React, { Component } from 'react'
import axios from 'axios'

import InfoCardsSection from './components/InfoCardsSection'
import TopBar from './components/TopBar/index'
import WeatherCardsSection from './components/WeatherCardsSection'

const { REACT_APP_WEATHER_API_URI } = process.env

class App extends Component {
  state = {
    // Dummy initial location.
    locations: [
      {
        city: 'Sahibzada Ajit Singh Nagar',
        country: 'India',
        currently: {
          apparentTemperature: 23.81,
          cloudCover: 0.71,
          dewPoint: 19.86,
          humidity: 0.81,
          icon: 'partly-cloudy-day',
          ozone: 271.19,
          precipIntensity: 0.0838,
          precipProbability: 0.05,
          precipType: 'rain',
          pressure: 1010.46,
          summary: 'Mostly Cloudy',
          temperature: 23.3,
          time: 1537850377,
          uvIndex: 5,
          visibility: 16.09,
          windBearing: 232,
          windGust: 10.44,
          windSpeed: 2.29,
        },
        lat: 30.70347,
        lng: 76.69162,
        locationId: 'NT_slcvtDdQxNuhascaVc1.yD',
        state: 'PB',
      },
    ],
  }

  /** Action to take when user selects a city from Search Bar. */
  handleCitySelect = async location => {
    const requestURI = `${REACT_APP_WEATHER_API_URI}/${location.lat},${location.lng}?`
    console.log(requestURI)

    try {
      // Fetch data.
      const response = await axios.get(requestURI, {
        params: {
          exclude: 'minutely,hourly,daily',
          units: 'ca',
        },
      })

      // Change state accordingly.
      const { currently, latitude, longitude } = response.data
      this.setState(prevState => ({
        locations: [...prevState.locations, { ...location, lat: latitude, lng: longitude, currently }],
      }))
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { locations } = this.state
    return (
      <div>
        <TopBar handleCitySelect={this.handleCitySelect} />
        <Row type="flex" justify="space-around">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <WeatherCardsSection locations={locations} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <InfoCardsSection />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
