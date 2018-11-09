import React, { Component } from 'react'
import { AutoComplete } from 'antd'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchLocationData } from '../actions'

import '../styles/searchbar.scss'

const { Option } = AutoComplete

const fetchAutoCompleteSuggestions = async value => {
  if (value === '') return []

  // Fetch autocomplete suggestions for the given value.
  const response = await axios.get(`/api/autocomplete`, { params: { value } })
  const { suggestions } = response.data

  // Process received suggestions.
  if (suggestions === undefined) return []

  const locationSuggestions = suggestions.map(suggestion => {
    const { address } = suggestion
    const data = {
      city: address.city || address.county || address.state || address.country,
      state: address.state || address.country,
      country: address.country,
    }

    return (
      <Option key={suggestion.locationId} value={suggestion.locationId} label="" data={data}>
        {suggestion.label}
      </Option>
    )
  })

  return locationSuggestions
}

class SearchBar extends Component {
  state = {
    locationSuggestions: [],
  }

  /** Gets prediction results when input is changed in the Search Bar. */
  handleSearch = async value => {
    try {
      // Fetch autocomplete suggestions.
      const locationSuggestions = await fetchAutoCompleteSuggestions(value)

      // Update state.
      this.setState({ locationSuggestions })
    } catch (err) {
      console.error(err)
    }
  }

  /** Calls the action creator with an autocomplete suggestion is selected. */
  handleSelect = (locationId, suggestion) => {
    const { fetchLocationData } = this.props
    fetchLocationData(locationId, suggestion.props.data)

    // Reset the state, else autocompletions appear on clicking again even if the input is empty.
    this.setState({ locationSuggestions: [] })
  }

  render() {
    const { locationSuggestions } = this.state

    return (
      <div className="searchbar">
        <AutoComplete
          allowClear
          autoFocus
          dataSource={locationSuggestions}
          onSearch={this.handleSearch}
          onSelect={this.handleSelect}
          optionLabelProp="label"
          placeholder="City, state, country"
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  fetchLocationData: PropTypes.func.isRequired,
}

export default connect(
  null,
  { fetchLocationData }
)(SearchBar)
