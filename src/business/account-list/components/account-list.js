import React from 'react'

import Header from './account-list-header'
import Data from './account-list-data'

const AccountList = () => {
  return (
    <div className="AccountList">
      <Header/>
      <Data/>
    </div>
  )
}

AccountList.propTypes = {

}

AccountList.displayName = 'AccountList'

export default AccountList
