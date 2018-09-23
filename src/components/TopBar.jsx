import React, { Component } from 'react'
import axios from 'axios'
import { AutoComplete, Button, Col, Icon, Input, Layout, Row } from 'antd'

const { Header } = Layout
const { Option } = AutoComplete

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
    const requestURL = `${REACT_APP_AUTOCOMPLETE_URI}&input=${value}`

    try {
      const response = await axios.get(requestURL)
      const { predictions } = response.data

      const cities = predictions.map(prediction => (
        <Option key={prediction.id} value={prediction.place_id} description={prediction.description}>
          {prediction.description}
        </Option>
      ))

      this.setState({ cities })
    } catch (err) {
      console.error(err)
    }
  }

  handleSelect = async placeId => {
    const requestURL = `${REACT_APP_PLACE_DETAILS_URI}&placeid=${placeId}`

    try {
      const response = await axios.get(requestURL)
      const { result } = response.data

      const { location } = result.geometry
      const { lat, lng } = location

      console.log(lat)
      console.log(lng)

      // TODO: Add card over here.
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
              dataSource={cities}
              onSelect={this.handleSelect}
              onSearch={this.handleSearch}
              optionLabelProp="description"
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
