import React, { Component } from 'react'
import { AutoComplete } from 'antd'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addLocation } from '../actions'

import '../styles/searchbar.scss'

const { Option } = AutoComplete

const fetchAutoCompleteSuggestions = async value => {
  if (value === '') return []

  // Fetch autocomplete suggestions for the given value.
  const response = await axios.get(`/autocomplete`, { params: { value } })
  const { suggestions } = response.data

  // Process received suggestions.
  if (suggestions === undefined) return []

  const locationSuggestions = suggestions.map(suggestion => {
    const { address } = suggestion
    const data = {
      state: address.state,
      country: address.country,
    }

    if (address.city !== undefined) data.city = address.city
    else if (address.county !== undefined) data.city = address.county
    else if (address.state !== undefined) data.city = address.state
    else data.city = address.country

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
    const { addLocation } = this.props
    addLocation(locationId, suggestion.props.data)
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
  addLocation: PropTypes.func.isRequired,
}

export default connect(
  null,
  { addLocation }
)(SearchBar)
