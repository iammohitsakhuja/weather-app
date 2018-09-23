import React, { Component } from 'react'
import { Row, Col } from 'antd'

import 'antd/dist/antd.css'

import './fonts'

import InfoCardsSection from './components/InfoCardsSection'
import TopBar from './components/TopBar'
import WeatherCardsSection from './components/WeatherCardsSection'

class App extends Component {
  state = {
    cities: ['Chandigarh', 'Patiala'],
    data: [],
  }

  componentDidMount() {
    // TODO: Make API requests here.
    const { cities } = this.state
    this.setState({
      data: [
        {
          location: {
            city: cities[0],
            country: 'India',
          },
          temperature: 36,
          time: new Date(),
        },
        {
          location: {
            city: cities[1],
            country: 'India',
          },
          temperature: 42,
          time: new Date(),
        },
      ],
    })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <TopBar />
        <Row>
          <Col span={12}>
            <WeatherCardsSection data={data} />
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
