import React from 'react'
import { Skeleton, Card, Icon, Avatar } from 'antd'

const { Meta } = Card

const styles = {
  marginTop: 50,
  marginLeft: 50,
  height: 350,
  backgroundColor: '#FFFF99',
  width: 500,
  fontSize: 20,
  borderWidth: 2,
}

class InfoCard extends React.Component {
  state = {
    loading: false,
  }

  render() {
    const { loading } = this.state

    return (
      <Card style={styles} actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}>
        <h1>Patiala</h1>
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar
                src="https://tiresandparts.net/wp-content/uploads/stay-cool-article-1-1-2.jpg"
                size={40}
                shape="square"
              />
            }
            description="Garmi Bahut Hai Yaar"
          />
        </Skeleton>
      </Card>
    )
  }
}

export default InfoCard
