import React, { Component } from 'react'
import { AutoComplete } from 'antd'
import axios from 'axios'
import propTypes from 'prop-types'

const { Option } = AutoComplete

// Get environment variables.
const { REACT_APP_AUTOCOMPLETE_URI, REACT_APP_PLACE_DETAILS_URI } = process.env

class SearchBar extends Component {
  state = {
    locationSuggestions: [],
  }

  /** Gets prediction results when input is changed in the Search Bar. */
  handleSearch = async value => {
    try {
      // Fetch data.
      const response = await axios.get(REACT_APP_AUTOCOMPLETE_URI, { params: { query: value } })
      const { suggestions } = response.data

      if (suggestions !== undefined) {
        // Process received data.
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

        // Update state.
        this.setState({ locationSuggestions })
      }
    } catch (err) {
      console.error(err)
    }
  }

  /** Fetches the latitude and longitude (among other things) of the selected location, and hands it over to the App. */
  handleSelect = async (locationId, suggestion) => {
    try {
      const response = await axios.get(REACT_APP_PLACE_DETAILS_URI, { params: { locationid: locationId } })
      const { Latitude, Longitude } = response.data.Response.View[0].Result[0].Location.DisplayPosition

      const { handleCitySelect } = this.props

      handleCitySelect({ ...suggestion.props.data, locationId, lat: Latitude, lng: Longitude })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { locationSuggestions } = this.state

    return (
      <AutoComplete
        allowClear
        autoFocus
        dataSource={locationSuggestions}
        onSearch={this.handleSearch}
        onSelect={this.handleSelect}
        optionLabelProp="label"
        placeholder="City, state, country"
      />
    )
  }
}

SearchBar.propTypes = {
  handleCitySelect: propTypes.func.isRequired,
}

export default SearchBar
