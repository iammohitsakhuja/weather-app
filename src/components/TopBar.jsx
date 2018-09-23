import React, { Component } from 'react'

import { AutoComplete, Layout, Button, Row, Col } from 'antd'

const { Header } = Layout

// brand styling
const topBarBrandStyle = {
  color: 'White',
  fontFamily: 'Spirax',
  fontSize: 40,
  textAlign: 'center',
}

const API_URL = 'http://autocomplete.geocoder.api.here.com/6.2/suggest.json?'
const API_ID = '1SgFftNNmh564V0Fwj8N'
const API_CODE = 'bLmRUDRHR2DPghWk42I7IA'

class TopBar extends Component {
  state = {
    dataSource: [],
  }

  handleSearch = value => {
    if (value !== '') {
      fetch(`${API_URL}&app_id=${API_ID}&app_code=${API_CODE}&query=${value}`)
        .then(response => response.json())
        .then(data => {
          const temp = data.suggestions.map(city => ({ value: city.locationId, text: city.label }))
          this.setState({
            dataSource: temp,
          })
        })
    }
  }

  handleSelect = value => {
    fetch(`https://geocoder.api.here.com/6.2/geocode.json?app_id=${API_ID}&app_code=${API_CODE}&locationid=${value}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    const { dataSource } = this.state

    return (
      <Header>
        <Row>
          <Col span={8}>
            <div>
              <AutoComplete
                dataSource={dataSource}
                onSelect={this.handleSelect}
                onSearch={this.handleSearch}
                placeholder="City, state, country"
              />
              <Button type="primary" icon="search" shape="circle" />
            </div>
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
