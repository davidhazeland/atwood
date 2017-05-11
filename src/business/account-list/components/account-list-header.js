import React from 'react'

import {Header, Button} from 'semantic-ui-react'

const style = {
  marginTop: 20,
  borderBottom: '1px solid #ccc',
  overflow: 'hidden'
}

const AccountListHeader = () => {
  return (
    <div className="AccountListHeader" style={style}>
      <Header as="h3" floated="left">
        Accounts
      </Header>
      <Button size="mini" floated="right">Link an Account</Button>
    </div>
  )
}

AccountListHeader.propTypes = {

}

AccountListHeader.displayName = 'AccountListHeader'

export default AccountListHeader
