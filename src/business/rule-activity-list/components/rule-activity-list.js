import React from 'react'

import Header from './rule-activity-list-header'
import Data from './rule-activity-list-data'

const RuleActivityList = () => {
  return (
    <div className="RuleActivityList">
      <Header/>
      <Data/>
    </div>
  )
}

RuleActivityList.propTypes = {

}

RuleActivityList.displayName = 'RuleActivityList'

export default RuleActivityList
