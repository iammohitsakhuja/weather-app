import React from 'react'

import { AutoComplete, Input, Layout, Button, Row, Col } from 'antd'

const { Header } = Layout

// brand styling
const topBarBrandStyle = {
  color: 'White',
  fontFamily: 'Spirax',
  fontSize: 40,
  textAlign: 'center',
}

const TopBar = () => (
  <Header>
    <Row>
      <Col span={8}>
        <AutoComplete placeholder="City, state, country">
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

export default TopBar
