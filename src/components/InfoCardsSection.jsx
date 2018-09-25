import React from 'react'
import { Col, Row } from 'antd'

import InfoCard from './InfoCard'

import '../styles/info-card.css'

const InfoCardsSection = () => (
  <Row className="info-cards-section">
    <Col span={18}>
      <InfoCard />
    </Col>
    <Col span={18}>
      <InfoCard />
    </Col>
  </Row>
)

export default InfoCardsSection
