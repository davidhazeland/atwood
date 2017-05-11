import React from 'react'

import {Header} from 'semantic-ui-react'

const style = {
  marginTop: 20,
  borderBottom: '1px solid #ccc',
  overflow: 'hidden'
}

const RuleActivityListHeader = () => {
  return (
    <div className="RuleActivityListHeader" style={style}>
      <Header as="h3" floated="left">
        300K NO SALES
      </Header>
    </div>
  )
}

RuleActivityListHeader.propTypes = {

}

RuleActivityListHeader.displayName = 'RuleActivityListHeader'

export default RuleActivityListHeader
