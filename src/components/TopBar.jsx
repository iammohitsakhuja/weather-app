import React, { Component } from 'react'
import axios from 'axios'
import { AutoComplete, Button, Layout, Menu, Row, Col } from 'antd'
import MediaQuery from 'react-responsive'

import '../styles/TopBar.css'

const { Header } = Layout
const { Option } = AutoComplete

// Get environment variables.
const { REACT_APP_AUTOCOMPLETE_URI, REACT_APP_PLACE_DETAILS_URI } = process.env

// Render search bar according to state
const SearchBar = ({ state, dataSource, Select, Search }) => {
  if (!state) {
    return null
  }

  return (
    <AutoComplete
      allowClear
      autoFocus
      dataSource={dataSource}
      onSelect={Select}
      onSearch={Search}
      optionLabelProp="label"
      placeholder="City, state, country"
    />
  )
}

class TopBar extends Component {
  state = {
    cities: [],
    toggleSearch: false,
  }

  // Get prediction results
  handleSearch = async value => {
    try {
      const response = await axios.get(REACT_APP_AUTOCOMPLETE_URI, { params: { query: value } })
      const { suggestions } = response.data

      if (suggestions !== undefined) {
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

        this.setState({ cities })
      }
    } catch (err) {
      console.error(err)
    }
  }

  handleSelect = async (locationId, suggestion) => {
    try {
      const response = await axios.get(REACT_APP_PLACE_DETAILS_URI, { params: { locationid: locationId } })
      const { Latitude, Longitude } = response.data.Response.View[0].Result[0].Location.DisplayPosition

      const { handleClick } = this.props

      handleClick({ ...suggestion.props.data, locationId, lat: Latitude, lng: Longitude })
    } catch (err) {
      console.error(err)
    }
  }

  // change search bar state
  handleToggleClick = () => {
    this.setState(prevState => ({
      toggleSearch: !prevState.toggleSearch,
    }))
  }

  render() {
    const { cities } = this.state
    const { toggleSearch } = this.state

    const searchButton = <Button icon="search" shape="circle" ghost size="large" onClick={this.handleToggleClick} />
    const brand = <span className="topbar-brand">Weather</span>
    const settingButton = <Button icon="tool" shape="circle" ghost size="large" />
    const searchInput = (
      <SearchBar state={toggleSearch} dataSource={cities} Select={this.handleSelect} Search={this.handleSearch} />
    )

    return (
      <Layout>
        <Header>
          {/* Mobile layout */}
          <MediaQuery maxWidth={720}>
            <Menu mode="inline" theme="dark">
              <Menu.SubMenu title={brand}>
                <Menu.Item>{searchButton}</Menu.Item>
                {toggleSearch ? <Menu.Item>{searchInput}</Menu.Item> : null}
                <Menu.Item>{settingButton}</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </MediaQuery>

          {/* Desktop layout */}
          <MediaQuery minWidth={721}>
            <Row>
              <Col span={8}>
                {searchInput} {searchButton}
              </Col>
              <Col span={8}>{brand}</Col>
              <Col span={8}>{settingButton}</Col>
            </Row>
          </MediaQuery>
        </Header>
      </Layout>
    )
  }
}

export default TopBar
