import React from 'react'
import propTypes from 'prop-types'
import { Card, Row, Col } from 'antd'
import moment from 'moment'

import { SunnyDay } from '../icons'

const WeatherCard = ({ location }) => {
  const { city, country, currently } = location
  const { temperature } = currently
  const time = Date.now()

  return (
    <Card className="weather-card" bordered={false} style={{ backgroundColor: '#ffb100' }}>
      <Row>
        <Col span={20}>
          <p className="weather-card-city">{city}</p>
          <p className="weather-card-info">{country}</p>
        </Col>
        <Col span={4} align="middle">
          <img className="weather-card-icon" alt="Weather icon" src={SunnyDay} />
        </Col>
      </Row>

      <Row type="flex" justify="space-between">
        <Col className="weather-card-temperature" span={6}>
          {/* eslint-disable-next-line */}
          {parseInt(temperature, 10)}
          &#x2103;
        </Col>
        <Col span={6} className="weather-card-time">
          <div className="weather-card-time-number">{moment(time).format('h:mm')}</div>
          <div className="weather-card-time-ampm">{moment(time).format('A')}</div>
        </Col>
      </Row>
    </Card>
  )
}

WeatherCard.propTypes = {
  location: propTypes.shape({
    id: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    state: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
    latitude: propTypes.number.isRequired,
    longitude: propTypes.number.isRequired,
    currently: propTypes.shape({
      time: propTypes.number.isRequired,
      summary: propTypes.string,
      icon: propTypes.string.isRequired,
      precipIntensity: propTypes.number,
      precipType: propTypes.string,
      temperature: propTypes.number.isRequired,
      apparentTemperature: propTypes.number.isRequired,
      dewPoint: propTypes.number,
      humidity: propTypes.number.isRequired,
      pressure: propTypes.number.isRequired,
      windSpeed: propTypes.number.isRequired,
      windGust: propTypes.number,
      windBearing: propTypes.number,
      cloudCover: propTypes.number,
      uvIndex: propTypes.number,
      visibility: propTypes.number,
      ozone: propTypes.number,
    }).isRequired,
  }).isRequired,
}

export default WeatherCard
