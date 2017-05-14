
import React from 'react'

import { Grid, Icon, Button, Form as FormComponent } from 'semantic-ui-react'
import { Field, SelectBox, TextBox } from 'odem/components'

import { CONDITION_TYPE_LIST, EXPRESSION_LIST, TIME_RANGE_LIST } from 'constants'

const AccountRuleAddCondition = () => {
  return (
    <div className="AccountRuleAddCondition">
      <p>ALL of the following match</p>

      <Grid>
        <Grid.Column width="6">
          <Field
            name="conditionType"
            component={SelectBox}
            componentProps={{
              options: CONDITION_TYPE_LIST,
              fluid: true
            }}
            />
        </Grid.Column>
        <Grid.Column width="4">
          <Field
            name="conditionExpression"
            component={SelectBox}
            componentProps={{
              options: EXPRESSION_LIST,
              fluid: true
            }}
            />
        </Grid.Column>
        <Grid.Column width="4">
          <Field
            name="conditionValue"
            component={TextBox}
            />
        </Grid.Column>
        <Grid.Column width="2" verticalAlign="middle">
          <Icon name="trash"/>
        </Grid.Column>
      </Grid>

      <Button size="mini" style={{margin: '15px 0'}}>Add Condition</Button>

      <FormComponent.Group inline>
        <Field
          name="timeRange"
          label="Time Range"
          inline="true"
          component={SelectBox}
          componentProps={{
            options: TIME_RANGE_LIST
          }}
          />
      </FormComponent.Group>
    </div>
  )
}

AccountRuleAddCondition.propTypes = {

}

AccountRuleAddCondition.displayName = 'AccountRuleAddCondition'

export default AccountRuleAddCondition
