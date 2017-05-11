import React from 'react';

import {Header, Button} from 'semantic-ui-react';

const style = {
  marginTop: 20,
  borderBottom: '1px solid #ccc',
  overflow: 'hidden'
};

const AccountRuleListHeader = () => {
  return (
    <div className="AccountRuleListHeader" style={style}>
      <Header as="h3" floated="left">
        Rules for Mokona #1
      </Header>
      <Button size="mini" floated="right">Add a Rule</Button>
    </div>
  );
};

AccountRuleListHeader.propTypes = {

}

AccountRuleListHeader.displayName = 'AccountRuleListHeader';

export default AccountRuleListHeader;
