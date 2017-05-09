import React from 'react';

import Header from './account-rule-list-header';
import Data from './account-rule-list-data';

const AccountRuleList = () => {
  return (
    <div className="AccountRuleList">
      <Header/>
      <Data/>
    </div>
  );
};

AccountRuleList.propTypes = {

}

AccountRuleList.displayName = 'AccountRuleList';

export default AccountRuleList;
