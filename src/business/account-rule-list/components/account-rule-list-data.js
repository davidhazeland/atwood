import React from 'react'

import { Link } from 'react-router-dom'
import { List, Grid, Button, Checkbox } from 'semantic-ui-react'

const style = {
  marginTop: 20,
  border: '2px solid #ccc'
}

const AccountListRuleData = (props) => {
  const { data } = props

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
                <Link to={`/rules/${item.id}/activities`}>
                  {item.name}
                </Link>
              </Grid.Column>
              <Grid.Column width="2">
                {item.targetType}
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>{item.timeRange}</div>
              </Grid.Column>
              <Grid.Column width="5" textAlign="center">
                <div>Run daily at {item.frequency.join(', ')}</div>
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
