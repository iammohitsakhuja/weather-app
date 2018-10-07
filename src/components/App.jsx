import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import SearchBar from './SearchBar'
import WeatherCardsSection from './WeatherCardsSection'
import ExpandedWeatherCard from './ExpandedWeatherCard'
import { getCardState } from '../reducers/locations'

import '../styles/app.scss'

const App = ({ cardState }) => (
  <div className="container">
    <header className="app-brand">Weather</header>
    <div className="searchbar">
      <SearchBar />
    </div>
    {(cardState === 'STACKED' && <WeatherCardsSection />) || <ExpandedWeatherCard />}
    <div style={{ color: 'white' }}>cardState: {cardState}</div>
  </div>
)

App.propTypes = {
  cardState: propTypes.string.isRequired,
}

const mapStateToProps = state => ({
  cardState: getCardState(state),
})

export default connect(mapStateToProps)(App)
