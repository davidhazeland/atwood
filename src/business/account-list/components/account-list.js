import React from 'react'

import Header from './account-list-header'
import Data from './account-list-data'

const AccountList = (props) => {
  const {
    data
  } = props

  return (
    <div className="AccountList">
      <Header/>
      <Data data={data}/>
    </div>
  )
}

AccountList.propTypes = {

}

AccountList.displayName = 'AccountList'

export default AccountList
