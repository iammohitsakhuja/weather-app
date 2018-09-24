import React, { Component } from 'react'
import { Card, Col, Icon, Row } from 'antd'

import { CloudyDay } from '../icons'

const styles = {
  margin: 20,
  backgroundColor: '#1890ff',
  width: 500,
  fontSize: 20,
  color: '#fff',
}

const weatherIcon = {
  float: 'right',
  marginRight: 20,
  height: 50,
  width: 50,
  marginBottom: 15,
}

class InfoCard extends Component {
  state = {
    loading: false,
  }

  render() {
    const { loading } = this.state

    return (
      <Card bordered={false} loading={loading} style={styles} hoverable>
        <Row type="flex" justify="start">
          <Col span={4}>
            <img alt="Weather icon" src={CloudyDay} style={weatherIcon} />
          </Col>
          <Col span={14}>
            <p>Right Now</p>
            <p>Moderate rain</p>
          </Col>
          <Col span={6}>
            <p style={{ fontSize: 35, marginLeft: 20, float: 'left' }}>21&#x2103;</p>
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Icon type="loading" />
          <Icon type="loading" />
          <Icon type="loading" />
          <Icon type="loading" />
          <Icon type="loading" />
        </Row>
      </Card>
    )
  }
}

export default InfoCard
