import React from 'react'

import { Link } from 'react-router-dom'
import { Header, Button } from 'semantic-ui-react'

const style = {
  marginTop: 20,
  borderBottom: '1px solid #ccc',
  overflow: 'hidden'
}

const AccountRuleListHeader = (props) => {
  const { accountId } = props
  return (
    <div className="AccountRuleListHeader" style={style}>
      <Header as="h3" floated="left">
        Rules for Mokona #1
      </Header>
      <Link to={`/accounts/${accountId}/rules/add`}>
        <Button size="mini" floated="right" positive>Add a Rule</Button>
      </Link>
    </div>
  )
}

AccountRuleListHeader.propTypes = {

}

AccountRuleListHeader.displayName = 'AccountRuleListHeader'

export default AccountRuleListHeader
