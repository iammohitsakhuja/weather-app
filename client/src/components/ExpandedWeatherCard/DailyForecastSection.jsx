import React from 'react'
import PropTypes from 'prop-types'

import DailyForecast from './DailyForecast'

const DailyForecastSection = ({ data }) => (
  <section className="daily-forecast-section">
    {data.map(dayData => (
      <DailyForecast
        key={dayData.time}
        icon={dayData.icon}
        time={dayData.time}
        temperatureHigh={dayData.apparentTemperatureHigh || dayData.temperatureHigh}
        temperatureLow={dayData.apparentTemperatureLow || dayData.temperatureLow}
        precipProbability={dayData.precipProbability}
        precipType={dayData.precipType}
      />
    ))}
  </section>
)

DailyForecastSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      temperatureHigh: PropTypes.number.isRequired,
      temperatureLow: PropTypes.number.isRequired,
      apparentTemperatureHigh: PropTypes.number.isRequired,
      apparentTemperatureLow: PropTypes.number.isRequired,
      precipProbability: PropTypes.number.isRequired,
      precipType: PropTypes.string,
    })
  ).isRequired,
}

export default DailyForecastSection
