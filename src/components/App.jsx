import React from 'react'

import SearchBar from './SearchBar'
import WeatherCardsSection from './WeatherCardsSection'

import '../styles/app.css'

const App = () => (
  <div className="container">
    <header className="app-brand">Weather</header>
    <div className="searchbar">
      <SearchBar />
    </div>
    <WeatherCardsSection />
  </div>
)

export default App
