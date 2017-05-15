import React from 'react'
import { Grid, Icon, Button } from 'semantic-ui-react'

import { FieldArray } from 'redux-form'
import { Field, SelectBox } from 'odem/components'

import { HOUR_LIST } from 'constants'

const renderFields = props => {
  const { fields } = props

  return (
    <div>
      <Grid>
        {fields.map((frequency, index) => {
          return (
            <Grid.Row key={index}>
              <Grid.Column width="6">
                <Field
                  name={`${frequency}.time`}
                  component={SelectBox}
                  componentProps={{
                    options: HOUR_LIST
                  }}
                  />
              </Grid.Column>
              <Grid.Column width="2" verticalAlign="middle">
                <Icon name="trash" onClick={() => fields.remove(index)}/>
              </Grid.Column>
            </Grid.Row>
          )
        })}
      </Grid>

      <Button size="mini" style={{marginTop: 15}} onClick={() => fields.push({})}>
        Add Time
      </Button>
    </div>
  )
}

const AccountRuleAddFrequency = () => {
  return (
    <div className="AccountRuleAddFrequency">
      <p>Daily at</p>

      <FieldArray name="frequency" component={renderFields}/>
    </div>
  )
}

AccountRuleAddFrequency.propTypes = {

}

AccountRuleAddFrequency.displayName = 'AccountRuleAddFrequency'

export default AccountRuleAddFrequency
