import React from 'react'

import { FieldArray } from 'redux-form'
import { Form as FormComponent } from 'semantic-ui-react'
import { Field, SelectBox } from 'odem/components'

import ConditionList from './account-rule-add-condition-list'

import { TIME_RANGE_LIST } from 'constants'

const AccountRuleAddCondition = () => {
  return (
    <div className="AccountRuleAddCondition">
      <p>ALL of the following match</p>

      <FieldArray name="conditions" component={ConditionList}/>

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
