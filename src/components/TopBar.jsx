import React, { Component } from 'react'
import axios from 'axios'
import { AutoComplete, Button, Col, Icon, Input, Layout, Row } from 'antd'

const { Header } = Layout
const { Option } = AutoComplete

// Get environment variables.
const { REACT_APP_AUTOCOMPLETE_URI, REACT_APP_PLACE_DETAILS_URI } = process.env

// Brand styling.
const topBarBrandStyle = {
  color: 'White',
  fontFamily: 'Spirax',
  fontSize: 40,
  textAlign: 'center',
}

class TopBar extends Component {
  state = {
    cities: [],
  }

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

  render() {
    const { cities } = this.state

    return (
      <Header>
        <Row>
          <Col span={8}>
            <AutoComplete
              allowClear
              autoFocus
              dataSource={cities}
              onSelect={this.handleSelect}
              onSearch={this.handleSearch}
              optionLabelProp="label"
              placeholder="City, state, country"
            >
              <Input suffix={<Icon type="search" />} />
            </AutoComplete>
          </Col>
          <Col span={8} style={topBarBrandStyle}>
            Weather
          </Col>
          <Col span={8} style={{ textAlign: 'end' }}>
            <Button type="primary" icon="tool" shape="circle" />
          </Col>
        </Row>
      </Header>
    )
  }
}

export default TopBar
