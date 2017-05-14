import React from 'react'

import { Menu } from 'semantic-ui-react'

const AccountRuleAddTarget = () => {
  return (
    <div className="AccountRuleAddTarget">
      <Menu widths={3}>
        <Menu.Item name='All Active AdSets' active={true}/>
        <Menu.Item name='Manual' disabled/>
        <Menu.Item name='Condition' disabled/>
      </Menu>
    </div>
  )
}

AccountRuleAddTarget.propTypes = {

}

AccountRuleAddTarget.displayName = 'AccountRuleAddTarget'

export default AccountRuleAddTarget
