import React from 'react'
import { Card } from 'antd'

import '../styles/expanded-weather-card.scss'

const ExpandedWeatherCard = () => (
  <div className="expanded-weather-card-container">
    <Card className="expanded-weather-card" bordered={false}>
      <div className="expanded-weather-card-grid">
        <div className="left-col">
          <div className="hourly-temperature">
            <div className="current-temperature">23&deg;</div>
            <div className="hourly-temperature-section">
              <div className="hourly-temperature-forecast">
                <div className="time">7pm</div>
                <div className="temperature">21&deg;</div>
                <div className="precipitation">70%</div>
              </div>
              <div className="hourly-temperature-forecast">
                <div className="time">7pm</div>
                <div className="temperature">21&deg;</div>
                <div className="precipitation">70%</div>
              </div>
              <div className="hourly-temperature-forecast">
                <div className="time">7pm</div>
                <div className="temperature">21&deg;</div>
                <div className="precipitation">70%</div>
              </div>
              <div className="hourly-temperature-forecast">
                <div className="time">7pm</div>
                <div className="temperature">21&deg;</div>
                <div className="precipitation">70%</div>
              </div>
              <div className="hourly-temperature-forecast">
                <div className="time">7pm</div>
                <div className="temperature">21&deg;</div>
                <div className="precipitation">70%</div>
              </div>
            </div>
          </div>
          <div className="summary">Light rain stopping in 13 min.</div>
          <p>This is an expanded weather card</p>
          <p>This is an expanded weather card</p>
          <p>This is an expanded weather card</p>
        </div>
        <div className="right-col">
          <p>Right col</p>
        </div>
      </div>
    </Card>
  </div>
)

export default ExpandedWeatherCard
