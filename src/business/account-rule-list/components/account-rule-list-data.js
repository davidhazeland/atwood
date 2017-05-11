import React from 'react'

import {List, Grid, Button, Checkbox} from 'semantic-ui-react'

const data = [
  {
    active: true,
    name: '300K NO SALES',
    status: 'All Active Advert Sets',
    time: 'Last 7 Days',
    schedule: 'Run daily at 9:00, 12:00, 16:00, 20:00'
  },
  {
    active: false,
    name: '300K NO SALES',
    status: 'All Active Advert Sets',
    time: 'Last 7 Days',
    schedule: 'Run daily at 9:00, 12:00, 16:00, 20:00'
  },
  {
    active: true,
    name: '300K NO SALES',
    status: 'All Active Advert Sets',
    time: 'Last 7 Days',
    schedule: 'Run daily at 9:00, 12:00, 16:00, 20:00'
  }
]

const style = {
  marginTop: 20,
  border: '2px solid #ccc'
}

const AccountListRuleData = () => {
  return (
    <div className="AccountListRuleData" style={style}>
      <List divided relaxed>
        {data.map((item, key) => {
          return (
            <List.Item key={key} as={Grid} padded>
              <Grid.Column width="2">
                <Checkbox toggle checked={item.active}/>
              </Grid.Column>
              <Grid.Column width="2">
                {item.name}
              </Grid.Column>
              <Grid.Column width="2">
                {item.status}
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>{item.time}</div>
              </Grid.Column>
              <Grid.Column width="5" textAlign="center">
                <div>{item.schedule}</div>
              </Grid.Column>
              <Grid.Column width="3">
                <Button size="mini">Edit</Button>
                <Button size="mini">Deactive</Button>
              </Grid.Column>
            </List.Item>
          )
        })}
      </List>
    </div>
  )
}

AccountListRuleData.propTypes = {

}

AccountListRuleData.displayName = 'AccountListRuleData'

export default AccountListRuleData
