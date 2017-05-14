import React from 'react'
import { Button } from 'semantic-ui-react'

import { Form } from 'odem/components'

import Box from './box'
import ToggleBox from './toggle-box'
import Basic from './account-rule-add-basic'
import Condition from './account-rule-add-condition'
import Frequency from './account-rule-add-frequency'

const AccountRuleAddForm = (props) => {
  return (
    <Form className="AccountRuleAddForm" {...props}>
      <ToggleBox title="RULE">
        <Basic/>
      </ToggleBox>
      <Box title="TARGET ADVERT SETS"/>
      <Box title="CONDITION">
        <Condition/>
      </Box>
      <Box title="ACTION"/>
      <Box title="FREQUENCY">
        <Frequency/>
      </Box>

      <Button>Submit</Button>
    </Form>
  )
}

AccountRuleAddForm.propTypes = {

}

AccountRuleAddForm.displayName = 'AccountRuleAddForm'

export default AccountRuleAddForm
