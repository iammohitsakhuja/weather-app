import React, { Component } from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'

import InfoCardsSection from './components/InfoCardsSection'
import TopBar from './components/TopBar'
import WeatherCardsSection from './components/WeatherCardsSection'

const { REACT_APP_WEATHER_API_URI } = process.env

class App extends Component {
  state = {
    locations: [],
  }

  handleClick = async ({ lat, lng }) => {
    const requestURI = `${REACT_APP_WEATHER_API_URI}/${lat},${lng}?`
    console.log(requestURI)

    try {
      const response = await axios.get(requestURI, {
        params: {
          exclude: 'minutely,hourly,daily',
          units: 'ca',
        },
      })

      const { currently, latitude, longitude } = response.data
      this.setState(prevState => ({
        locations: [...prevState.locations, { latitude, longitude, currently }],
      }))
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { locations } = this.state
    return (
      <div>
        <TopBar handleClick={this.handleClick} />
        <Row>
          <Col span={12}>
            <WeatherCardsSection locations={locations} />
          </Col>
          <Col span={12}>
            <InfoCardsSection />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
