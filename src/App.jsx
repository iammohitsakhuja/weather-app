import React from 'react'
import { Row, Col } from 'antd'

import 'antd/dist/antd.css'

import InfoCardsSection from './components/InfoCardsSection'
import TopBar from './components/TopBar'
import WeatherCardsSection from './components/WeatherCardsSection'

const App = () => (
  <div>
    <TopBar />
    <Row>
      <Col span={12}>
        <WeatherCardsSection />
      </Col>
      <Col span={12}>
        <InfoCardsSection />
      </Col>
    </Row>
  </div>
)

export default App
