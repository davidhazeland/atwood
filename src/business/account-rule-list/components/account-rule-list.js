import React from 'react'

import Header from './account-rule-list-header'
import Data from './account-rule-list-data'

const AccountRuleList = (props) => {
  const {
    accountId,
    List: {
      data
    }
  } = props;

  return (
    <div className="AccountRuleList">
      <Header accountId={accountId}/>
      <Data data={data}/>
    </div>
  )
}

AccountRuleList.propTypes = {

}

AccountRuleList.displayName = 'AccountRuleList'

export default AccountRuleList
