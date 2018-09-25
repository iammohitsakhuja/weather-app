import React, { Component } from 'react'
import axios from 'axios'
import { AutoComplete, Button, Layout, Menu, Row, Col } from 'antd'
import MediaQuery from 'react-responsive'
import propTypes from 'prop-types'

import SearchBar from './SearchBar'

import '../../styles/top-bar.css'

const { Header } = Layout
const { Option } = AutoComplete

// Get environment variables.
const { REACT_APP_AUTOCOMPLETE_URI, REACT_APP_PLACE_DETAILS_URI } = process.env

class TopBar extends Component {
  state = {
    cities: [],
    toggleSearch: false,
  }

  brand = <span className="topbar-brand">Weather</span>

  settingButton = <Button icon="tool" shape="circle" ghost size="large" />

  /** Gets prediction results when input is changed in the Search Bar. */
  handleSearch = async value => {
    try {
      // Fetch data.
      const response = await axios.get(REACT_APP_AUTOCOMPLETE_URI, { params: { query: value } })
      const { suggestions } = response.data

      if (suggestions !== undefined) {
        // Process received data.
        const cities = suggestions.map(suggestion => {
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
        this.setState({ cities })
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

  /** Change search bar state. */
  handleToggleClick = () => {
    this.setState(prevState => ({
      toggleSearch: !prevState.toggleSearch,
    }))
  }

  render() {
    const { cities, toggleSearch } = this.state

    const searchButton = <Button icon="search" shape="circle" ghost size="large" onClick={this.handleToggleClick} />
    const searchInput = (
      <SearchBar
        state={toggleSearch}
        dataSource={cities}
        handleSelect={this.handleSelect}
        handleSearch={this.handleSearch}
      />
    )

    return (
      <Layout>
        <Header>
          {/* Mobile layout */}
          <MediaQuery maxWidth={720}>
            <Menu mode="inline" theme="dark">
              <Menu.SubMenu title={this.brand}>
                <Menu.Item>{searchButton}</Menu.Item>
                {toggleSearch ? <Menu.Item>{searchInput}</Menu.Item> : null}
                <Menu.Item>{this.settingButton}</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </MediaQuery>

          {/* Desktop layout */}
          <MediaQuery minWidth={721}>
            <Row>
              <Col span={8}>
                {searchInput} {searchButton}
              </Col>
              <Col span={8} className="topbar-brand">
                {this.brand}
              </Col>
              <Col span={8} style={{ textAlign: 'end' }}>
                {this.settingButton}
              </Col>
            </Row>
          </MediaQuery>
        </Header>
      </Layout>
    )
  }
}

TopBar.propTypes = {
  handleCitySelect: propTypes.func.isRequired,
}

export default TopBar
