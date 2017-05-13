import React from 'react'

import { Grid, Icon, Button, Form as FormComponent } from 'semantic-ui-react'
import { Field, SelectBox, TextBox } from 'odem/components'

const conditionTypeList = [
  {key: '1', text: 'ROAS', value: '1'}
]

const conditionExpressionList = [
  {key: '1', text: 'is less than', value: '1'}
]

const AccountRuleAddConditions = () => {
  return (
    <div className="AccountRuleAddConditions">
      <p>ALL of the following match</p>

      <Grid>
        <Grid.Column width="6">
          <Field
            name="conditionType"
            component={SelectBox}
            componentProps={{
              options: conditionTypeList,
              fluid: true
            }}
            />
        </Grid.Column>
        <Grid.Column width="4">
          <Field
            name="conditionExpression"
            component={SelectBox}
            componentProps={{
              options: conditionTypeList,
              fluid: true
            }}
            />
        </Grid.Column>
        <Grid.Column width="5">
          <Field
            name="conditionValue"
            component={TextBox}
            />
        </Grid.Column>
        <Grid.Column width="1" verticalAlign="middle">
          <Icon name="trash"/>
        </Grid.Column>
      </Grid>

      <Button style={{margin: '15px 0'}}>Add Condition</Button>

      <FormComponent.Group inline>
        <Field
          name="timeRange"
          label="Time Range"
          inline="true"
          component={SelectBox}
          componentProps={{
            options: conditionTypeList
          }}
          />
      </FormComponent.Group>
    </div>
  )
}

AccountRuleAddConditions.propTypes = {

}

AccountRuleAddConditions.displayName = 'AccountRuleAddConditions'

export default AccountRuleAddConditions
