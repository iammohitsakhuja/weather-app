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
        apparentTemperatureLow={dayData.apparentTemperatureLow}
        apparentTemperatureHigh={dayData.apparentTemperatureHigh}
        precipProbability={dayData.precipProbability}
      />
    ))}
  </section>
)

DailyForecastSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      apparentTemperatureLow: PropTypes.number.isRequired,
      apparentTemperatureHigh: PropTypes.number.isRequired,
      precipProbability: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default DailyForecastSection
