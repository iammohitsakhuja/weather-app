import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import WeatherCardsSection from './WeatherCardsSection'
import ExpandedWeatherCard from './ExpandedWeatherCard'
import Footer from './Footer'
import { getCardState } from '../reducers/locations'

import '../styles/app.scss'

const App = ({ cardState }) => (
  <div className="wrapper">
    <div className="container">
      <header className="app-brand">Weather</header>
      <SearchBar />
      {(cardState === 'STACKED' && <WeatherCardsSection />) || <ExpandedWeatherCard />}
    </div>
    <Footer />
  </div>
)

App.propTypes = {
  cardState: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  cardState: getCardState(state),
})

export default connect(mapStateToProps)(App)
