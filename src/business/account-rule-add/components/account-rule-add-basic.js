import React from 'react'

import { Field, TextBox } from 'odem/components'

const AccountRuleAddBasic = () => {
  return (
    <div className="AccountRuleAddBasic">
      <Field
        name="ruleName"
        label="Rule Name"
        component={TextBox}
        />

      <Field
        name="ruleDescription"
        label="Rule Description"
        component={TextBox}
        />
    </div>
  )
}

AccountRuleAddBasic.propTypes = {

}

AccountRuleAddBasic.displayName = 'AccountRuleAddBasic'

export default AccountRuleAddBasic
