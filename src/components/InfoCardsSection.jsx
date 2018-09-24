import React from 'react'
import { Row } from 'antd'

import InfoCard from './InfoCard'

const InfoCardsSection = () => (
  <Row style={{ padding: 30 }}>
    <InfoCard />
    <InfoCard />
  </Row>
)

export default InfoCardsSection
