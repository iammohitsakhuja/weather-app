import React from 'react'

import { Layout, Icon, Row, Col } from 'antd'
import WebFont from 'webfontloader'

const { Header } = Layout

// load font from google
WebFont.load({
  google: {
    families: ['Josefin Sans', 'sans-serif'],
  },
})

// brand styling
const topBarBrandStyle = {
  color: 'White',
  fontFamily: 'Josefin Sans',
  fontSize: 40,
  textAlign: 'center',
}

// icon styling
const iconStyle = {
  fontSize: 35,
  color: 'white',
  paddingTop: 13,
}

const TopBar = () => (
  <Header>
    <Row>
      <Col span={8}>
        <Icon type="search" theme="outlined" style={iconStyle} />
      </Col>
      <Col span={8} style={topBarBrandStyle}>
        Weather
      </Col>
      <Col span={8} style={{ textAlign: 'end' }}>
        <Icon type="tool" theme="filled" style={iconStyle} />
      </Col>
    </Row>
  </Header>
)

export default TopBar
