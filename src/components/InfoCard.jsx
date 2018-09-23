import React from 'react'

import { Button, notification } from 'antd'

import { Skeleton, Switch, Card, Icon, Avatar } from 'antd'

const { Meta } = Card

const stylo = {
  marginTop: 200,
  marginLeft: 550,
  height: 350,
  backgroundColor: '#FFFF99',
  width: 500,
  fontSize: 30,
  borderWidth: 5,
}

class InfoCard extends React.Component {
  state = {
    loading: false,
  }

  render() {
    const { loading } = this.state

    return (
      <div>
        <Card style={stylo} actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}>
          <h1>Patiala</h1>
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar
                  src="https://tiresandparts.net/wp-content/uploads/stay-cool-article-1-1-2.jpg"
                  size={80}
                  shape="square"
                />
              }
              description="Garmi Bahut Hai YaaR "
            />
          </Skeleton>
        </Card>
      </div>
    )
  }
}


export default InfoCard
