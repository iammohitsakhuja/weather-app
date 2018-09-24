import React from 'react'
import propTypes from 'prop-types'
import { Card, Row, Col } from 'antd'
import moment from 'moment'

import Sun from '../img/sun.png'
import Moon from '../img/moon.png'
import Rain from '../img/shower-rain.png'
import RainSoonNight from '../img/few-cloud-night.png'

const cardStyle = {
  backgroundColor: '#FFB100',
  width: 500,
  height: 160,
  color: '#FFFFFF',
  borderRadius: 3,
  fontSize: 25,
  fontWeight: 'bold',
}

const weatherIcon = {
  float: 'right',
  marginRight: 20,
  height: 50,
  width: 50,
  marginBottom: 15,
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

const weatherProfiles = {
  day: {
    background: '#FFB100',
    alt: 'sun',
    src: 'Sun',
  },

  night: {
    background: '#004048',
    alt: 'moon',
    src: 'Moon',
  },

  rain: {
    background: '#4169E1',
    alt: 'rain',
    src: 'Rain',
  },

  rainSoonNight: {
    background: '#313131',
    alt: 'rain-soon',
    src: 'RainSoonNight',
  },
}

const WeatherCard = ({ location }) => {
  const { city, country, currently } = location
  const { temperature } = currently
  const time = Date.now()

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
            {parseInt(temperature)}
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
  location: propTypes.shape({
    locationId: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    state: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
    lat: propTypes.number.isRequired,
    lng: propTypes.number.isRequired,
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
