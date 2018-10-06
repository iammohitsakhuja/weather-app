import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import WeatherCardsSection from './WeatherCardsSection'
import { getLocations } from '../reducers/locations'

import '../styles/app.css'

const { REACT_APP_WEATHER_API_URI } = process.env

class App extends Component {
  /** Action to take when user selects a city from Search Bar. */
  handleCitySelect = async location => {
    const requestURI = `${REACT_APP_WEATHER_API_URI}/${location.lat},${location.lng}?`
    console.log(requestURI)

    try {
      // Fetch data.
      const response = await axios.get(requestURI, {
        params: {
          exclude: 'minutely,hourly,daily',
          units: 'ca',
        },
      })

      // Change state accordingly.
      const { currently, latitude, longitude } = response.data
      this.setState(prevState => ({
        locations: [...prevState.locations, { ...location, lat: latitude, lng: longitude, currently }],
      }))
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { locations } = this.props

    return (
      <div className="container">
        <header className="app-brand">Weather</header>
        <div className="searchbar">
          <SearchBar handleCitySelect={this.handleCitySelect} />
        </div>
        <WeatherCardsSection locations={locations} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locations: getLocations(state),
})

export default connect(mapStateToProps)(App)
