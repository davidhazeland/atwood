import React from 'react'

import { Form } from 'odem/components'

import Box from './box'
import ToggleBox from './toggle-box'
import Basic from './account-rule-add-basic'
import Conditions from './account-rule-add-conditions'

const AccountRuleAddForm = (props) => {
  return (
    <Form className="AccountRuleAddForm" {...props}>
      <ToggleBox title="RULE">
        <Basic/>
      </ToggleBox>
      <Box title="TARGET ADVERT SETS"/>
      <Box title="CONDITIONS">
        <Conditions/>
      </Box>
    </Form>
  )
}

AccountRuleAddForm.propTypes = {

}

AccountRuleAddForm.displayName = 'AccountRuleAddForm'

export default AccountRuleAddForm
