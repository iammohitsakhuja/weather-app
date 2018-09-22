import React from 'react'
import { Card, Row, Col } from 'antd'

import 'antd/dist/antd.css'

import Sun from '../img/sun.png'

const styleCard = {
  backgroundColor: '#FFB100',
  width: 500,
  height: 160,
  color: '#FFFFFF',
  borderRadius: 3,
  fontSize: 25,
  fontWeight: 'bold',
}

const leftColStyle = {
  marginLeft: 15,
  float: 'left',
}

const rightColStyle = {
  marginRight: 15,
  float: 'right',
  fontSize: 20,
}

const whetherIcon = {
  float: 'right',
  marginRight: 20,
  height: 50,
  width: 50,
  marginBottom: 15,
}

const WeatherCard = () => (
  <Card bordered={false} style={styleCard}>
    <Row type="flex" justify="start">
      <Col span={12}>
        <p style={leftColStyle}>
          Chandigarh, &nbsp;
          <span style={{ fontSize: 15 }}>India</span>
        </p>
      </Col>
      <Col span={12}>
        <img alt="sun" src={Sun} style={whetherIcon} />
      </Col>
    </Row>

    <Row type="flex" justify="start">
      <Col span={12}>
        <p
          style={{
            fontSize: 35,
            marginLeft: 20,
            float: 'left',
          }}
        >
          36&#x2103;
        </p>
      </Col>
      <Col span={12}>
        <p style={rightColStyle}>
          12:18 <span style={{ fontSize: 15 }}>PM</span>
          <br />
          <span style={{ fontSize: 15 }}>Wednesday</span>
        </p>
      </Col>
    </Row>
  </Card>
)

export default WeatherCard
