import React from 'react'

import { Grid, Icon, Button } from 'semantic-ui-react'
import { Field, SelectBox, TextBox } from 'odem/components'

import { CONDITION_TYPE_LIST, EXPRESSION_LIST } from 'constants'

const AccountRuleAddConditionList = (props) => {
  const {
    fields
  } = props

  return (
    <div className="AccountRuleAddConditionList">
      <Grid>
        {fields.map((condition, index) => {
          return (
            <Grid.Row key={index}>
              <Grid.Column width="6">
                <Field
                  name={`${condition}.type`}
                  component={SelectBox}
                  componentProps={{
                    options: CONDITION_TYPE_LIST,
                    fluid: true
                  }}
                  />
              </Grid.Column>
              <Grid.Column width="4">
                <Field
                  name={`${condition}.expression`}
                  component={SelectBox}
                  componentProps={{
                    options: EXPRESSION_LIST,
                    fluid: true
                  }}
                  />
              </Grid.Column>
              <Grid.Column width="4">
                <Field
                  name={`${condition}.value`}
                  component={TextBox}
                  />
              </Grid.Column>
              <Grid.Column width="2" verticalAlign="middle">
                <Icon name="trash" onClick={() => fields.remove(index)}/>
              </Grid.Column>
            </Grid.Row>
          )
        })}
      </Grid>
      <Button size="mini" style={{margin: '15px 0'}} onClick={() => fields.push({})}>
        Add Condition
      </Button>
    </div>
  )
}

AccountRuleAddConditionList.propTypes = {

}

AccountRuleAddConditionList.displayName = 'AccountRuleAddConditionList'

export default AccountRuleAddConditionList
