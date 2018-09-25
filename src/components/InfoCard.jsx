import React from 'react'
import { Card, Col, Icon, Row } from 'antd'

import { CloudyDay } from '../icons'

const InfoCard = () => (
  <Card className="info-card" bordered={false} style={{ backgroundColor: '#1890ff' }} hoverable>
    <Row className="info-card-row" type="flex" justify="space-around">
      <Col span={2} align="middle">
        <img className="info-card-icon" alt="Weather icon" src={CloudyDay} />
      </Col>
      <Col span={14}>
        <p className="info-card-time">Right Now</p>
        <p className="info-card-forecast">Moderate rain</p>
      </Col>
      <Col className="info-card-temperature" span={4}>
        21&#x2103;
      </Col>
    </Row>
    <Row className="info-card-row" type="flex" justify="space-around">
      <Icon className="info-card-weather-detail-icon" type="slack-square" theme="outlined" />
      <Icon className="info-card-weather-detail-icon" type="github" theme="outlined" />
      <Icon className="info-card-weather-detail-icon" type="coffee" theme="outlined" />
      <Icon className="info-card-weather-detail-icon" type="pie-chart" theme="outlined" />
      <Icon className="info-card-weather-detail-icon" type="smile" theme="outlined" />
    </Row>
  </Card>
)

export default InfoCard
