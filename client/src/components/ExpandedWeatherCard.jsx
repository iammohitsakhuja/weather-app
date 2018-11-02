import React from 'react'

import '../styles/expanded-weather-card.scss'

const ExpandedWeatherCard = () => (
  <div className="expanded-weather-card">
    <section className="date">
      <span>December 31, 2018</span>
    </section>

    <section className="time">
      11:11
      <span className="time-modifier">PM</span>
    </section>

    <section className="current-temperature">23&deg;</section>

    <section className="location-and-forecast">
      <section className="location">Manchester by the Sea</section>
      <section className="forecast">Partly cloudy</section>
    </section>

    {/* eslint-disable jsx-a11y/accessible-emoji */}
    <section className="hourly-forecast">
      <div className="hourly-temperature-forecast">
        <div className="time">7pm</div>
        <div className="temperature">21&deg;</div>
        <div className="precipitation">🌧 70%</div>
      </div>
      <div className="hourly-temperature-forecast">
        <div className="time">11pm</div>
        <div className="temperature">19&deg;</div>
        <div className="precipitation">☔️ 75%</div>
      </div>
      <div className="hourly-temperature-forecast">
        <div className="time">2am</div>
        <div className="temperature">16&deg;</div>
        <div className="precipitation">⚡️ 80%</div>
      </div>
      <div className="hourly-temperature-forecast">
        <div className="time">5am</div>
        <div className="temperature">15&deg;</div>
        <div className="precipitation">⛅️ 60%</div>
      </div>
      <div className="hourly-temperature-forecast">
        <div className="time">8am</div>
        <div className="temperature">18&deg;</div>
        <div className="precipitation">☀️ 45%</div>
      </div>
    </section>

    <section className="animated-weather-icon">☀️</section>
    {/* eslint-enable */}

    <section className="summary">Drizzle starting in an hour.</section>

    <section className="weather-animation-frame">Reserved for displaying weather animation frame.</section>

    <section className="daily-forecast-section">
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <div className="daily-forecast">
        <div className="daily-forecast-icon-day-container">
          <div className="daily-forecast-icon-day">
            <div className="daily-forecast-icon">🌧</div>
            <div className="daily-forecast-day">Today</div>
          </div>
        </div>
        <div className="daily-forecast-temperature-precipitation">
          <div className="daily-forecast-temperature">14&deg;-23&deg;</div>
          <div className="daily-forecast-precipitation">Rain 70%</div>
        </div>
      </div>
      <div className="daily-forecast">
        <div className="daily-forecast-icon-day-container">
          <div className="daily-forecast-icon-day">
            <div className="daily-forecast-icon">☀️</div>
            <div className="daily-forecast-day">Tomorrow</div>
          </div>
        </div>
        <div className="daily-forecast-temperature-precipitation">
          <div className="daily-forecast-temperature">17&deg;-25&deg;</div>
          <div className="daily-forecast-precipitation">Rain 45%</div>
        </div>
      </div>
      <div className="daily-forecast">
        <div className="daily-forecast-icon-day-container">
          <div className="daily-forecast-icon-day">
            <div className="daily-forecast-icon">🌥</div>
            <div className="daily-forecast-day">Wednesday</div>
          </div>
        </div>
        <div className="daily-forecast-temperature-precipitation">
          <div className="daily-forecast-temperature">15&deg;-24&deg;</div>
          <div className="daily-forecast-precipitation">Rain 60%</div>
        </div>
      </div>
      <div className="daily-forecast">
        <div className="daily-forecast-icon-day-container">
          <div className="daily-forecast-icon-day">
            <div className="daily-forecast-icon">⚡️</div>
            <div className="daily-forecast-day">Thursday</div>
          </div>
        </div>
        <div className="daily-forecast-temperature-precipitation">
          <div className="daily-forecast-temperature">16&deg;-28&deg;</div>
          <div className="daily-forecast-precipitation">Rain 20%</div>
        </div>
      </div>
      <div className="daily-forecast">
        <div className="daily-forecast-icon-day-container">
          <div className="daily-forecast-icon-day">
            <div className="daily-forecast-icon">🌧</div>
            <div className="daily-forecast-day">Friday</div>
          </div>
        </div>
        <div className="daily-forecast-temperature-precipitation">
          <div className="daily-forecast-temperature">12&deg;-20&deg;</div>
          <div className="daily-forecast-precipitation">Rain 90%</div>
        </div>
      </div>
      {/* eslint-enable */}
    </section>

    <section className="weather-attributes">
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <div className="weather-attribute-container">
        <div className="attribute-icon">💧</div>
        <div className="attribute-name">Precipitation</div>
        <div className="attribute-value">50-60%</div>
      </div>
      <div className="weather-attribute-container">
        <div className="attribute-icon">🔥</div>
        <div className="attribute-name">Temperature</div>
        <div className="attribute-value">24-28&deg;</div>
      </div>
      <div className="weather-attribute-container">
        <div className="attribute-icon">💦</div>
        <div className="attribute-name">Humidity</div>
        <div className="attribute-value">10-20%</div>
      </div>
      <div className="weather-attribute-container">
        <div className="attribute-icon">🌪</div>
        <div className="attribute-name">Wind speed</div>
        <div className="attribute-value">100km/h</div>
      </div>
      <div className="weather-attribute-container">
        <div className="attribute-icon">👀</div>
        <div className="attribute-name">Visibility</div>
        <div className="attribute-value">95%</div>
      </div>
      {/* eslint-enable */}
    </section>
  </div>
)

export default ExpandedWeatherCard
