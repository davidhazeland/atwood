import React from 'react'

import Header from './rule-activity-list-header'
import Data from './rule-activity-list-data'

const RuleActivityList = (props) => {
  const {
    List: {
      data
    }
  } = props

  return (
    <div className="RuleActivityList">
      <Header/>
      <Data data={data}/>
    </div>
  )
}

RuleActivityList.propTypes = {

}

RuleActivityList.displayName = 'RuleActivityList'

export default RuleActivityList
