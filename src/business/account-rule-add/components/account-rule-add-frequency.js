import React from 'react'
import { Grid, Icon, Button } from 'semantic-ui-react'

import { Field, SelectBox } from 'odem/components'

import { HOUR_LIST } from 'constants'

const AccountRuleAddFrequency = () => {
  return (
    <div className="AccountRuleAddFrequency">
      <p>Daily at</p>
      <Grid>
        <Grid.Row>
          <Grid.Column width="6">
            <Field
              name="time"
              component={SelectBox}
              componentProps={{
                options: HOUR_LIST
              }}
              />
          </Grid.Column>
          <Grid.Column width="2" verticalAlign="middle">
            <Icon name="trash"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Button size="mini" style={{marginTop: 15}}>Add Time</Button>
    </div>
  )
}

AccountRuleAddFrequency.propTypes = {

}

AccountRuleAddFrequency.displayName = 'AccountRuleAddFrequency'

export default AccountRuleAddFrequency
