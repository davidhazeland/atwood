import React from 'react'

import { Menu } from 'semantic-ui-react'

const AccountRuleAddAction = () => {
  return (
    <div className="AccountRuleAddAction">
      <Menu widths={3}>
        <Menu.Item name='Pause AdSet' active={true}/>
        <Menu.Item name='Adjust Budget' disabled/>
        <Menu.Item name='Adjust Manual Bid' disabled/>
      </Menu>
    </div>
  )
}

AccountRuleAddAction.propTypes = {

}

AccountRuleAddAction.displayName = 'AccountRuleAddAction'

export default AccountRuleAddAction
