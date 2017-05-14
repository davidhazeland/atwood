import React from 'react'

import { Header, Grid } from 'semantic-ui-react'
import Form from '../containers/account-rule-add-form'

const AccountRuleAdd = () => {
  function handleSubmit () {

  }

  return (
    <div className="AccountRuleAdd">
      <Header as="h3" dividing style={{marginTop: 20}}>
        Add a Rule for Mokano #1
      </Header>

      <Grid>
        <Grid.Column width="10">
          <Form onSubmit={handleSubmit}/>
        </Grid.Column>
      </Grid>
    </div>
  )
}

AccountRuleAdd.propTypes = {

}

AccountRuleAdd.displayName = 'AccountRuleAdd'

export default AccountRuleAdd
