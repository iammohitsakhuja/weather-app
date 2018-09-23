import React, { Component } from 'react'

import { AutoComplete, Input, Layout, Button, Row, Col } from 'antd'

const { Header } = Layout

// brand styling
const topBarBrandStyle = {
  color: 'White',
  fontFamily: 'Spirax',
  fontSize: 40,
  textAlign: 'center',
}

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

  handleSelect = value => console.log(value)

  render() {
    const { dataSource } = this.state

    return (
      <Header>
        <Row>
          <Col span={8}>
            <AutoComplete
              dataSource={dataSource}
              onSelect={this.handleSelect}
              onSearch={this.handleSearch}
              placeholder="City, state, country"
            >
              <Input suffix={<Button type="primary" icon="search" style={{ marginRight: -13 }} />} />
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
