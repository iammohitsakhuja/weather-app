import React from 'react'
import propTypes from 'prop-types'
import { Card, Row, Col } from 'antd'
import moment from 'moment'

import 'antd/dist/antd.css'

import Sun from '../img/sun.png'

const leftColStyle = {
  marginLeft: 15,
  float: 'left',
}

const rightColStyle = {
  marginRight: 15,
  float: 'right',
  fontSize: 20,
}

const WeatherCard = ({ cardStyle, weatherIcon, weatherInfo }) => {
  const { location, temperature, time } = weatherInfo
  const { city, country } = location

  return (
    <Card bordered={false} style={cardStyle}>
      <Row type="flex" justify="start">
        <Col span={12}>
          <p style={leftColStyle}>
            {city} &nbsp;
            <span style={{ fontSize: 15 }}>{country}</span>
          </p>
        </Col>
        <Col span={12}>
          <img alt="sun" src={Sun} style={weatherIcon} />
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
            {temperature}
            &#x2103;
          </p>
        </Col>
        <Col span={12}>
          <p style={rightColStyle}>
            {moment(time).format('h:mm')} <span style={{ fontSize: 15 }}>{moment(time).format('A')}</span>
            <br />
            <span style={{ fontSize: 15 }}>{moment(time).format('dddd')}</span>
          </p>
        </Col>
      </Row>
    </Card>
  )
}

WeatherCard.propTypes = {
  cardStyle: propTypes.shape({
    backgroundColor: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
    color: propTypes.string,
    borderRadius: propTypes.number,
    fontSize: propTypes.number,
    fontWeight: propTypes.string,
  }).isRequired,
  weatherIcon: propTypes.shape({
    float: propTypes.string,
    marginRight: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
    marginBottom: propTypes.number,
  }).isRequired,
  weatherInfo: propTypes.shape({
    location: propTypes.shape({
      city: propTypes.string,
      country: propTypes.string,
    }),
    temperature: propTypes.number,
    time: propTypes.instanceOf(Date),
  }).isRequired,
}

export default WeatherCard
