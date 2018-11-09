import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import WeatherCardsSection from './WeatherCardsSection'
import ExpandedWeatherCard from './ExpandedWeatherCard'
import Footer from './Footer'
import { getCardState } from '../reducers/locations'
import { fetchAllLocationsData } from '../actions'

import '../styles/app.scss'

class App extends Component {
  componentDidMount() {
    const { fetchAllLocationsData } = this.props

    // Rehydrate the store once the app has loaded.
    fetchAllLocationsData()
  }

  render() {
    const { cardState } = this.props
    return (
      <div className="wrapper">
        <div className="container">
          <header className="app-brand">Weather</header>
          <SearchBar />
          {(cardState === 'STACKED' && <WeatherCardsSection />) || <ExpandedWeatherCard />}
        </div>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  cardState: PropTypes.string.isRequired,
  fetchAllLocationsData: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cardState: getCardState(state),
})

export default connect(
  mapStateToProps,
  { fetchAllLocationsData }
)(App)
