import React from 'react'

import {List, Grid, Button} from 'semantic-ui-react'

const style = {
  marginTop: 20,
  border: '2px solid #ccc'
}

const AccountListData = (props) => {
  const {data} = props

  return (
    <div className="AccountListData" style={style}>
      <List divided relaxed>
        {data.map((item, key) => {
          return (
            <List.Item key={key} as={Grid} padded>
              <Grid.Column width="2">
                {item.name}
              </Grid.Column>
              <Grid.Column width="2">
                4 rules applied
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>Today</div>
                <div>3.5X</div>
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>Yesterday</div>
                <div>3.5X</div>
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>Last 3 Days</div>
                <div>3.5X</div>
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>Last 7 Days</div>
                <div>3.5X</div>
              </Grid.Column>
              <Grid.Column width="4">
                <Button size="mini">Advert Manager</Button>
                <Button size="mini">Add Rule</Button>
              </Grid.Column>
            </List.Item>
          )
        })}
      </List>
    </div>
  )
}

AccountListData.propTypes = {

}

AccountListData.displayName = 'AccountListData'

export default AccountListData
