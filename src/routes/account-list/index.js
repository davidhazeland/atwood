import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AccountList from './containers/account-list';

import AccountRuleList from 'routes/account-rule-list';

export default path => (
  <Route path={path}>
    <IndexRoute component={AccountList}/>

    {AccountRuleList(':id/rules')}
  </Route>
);
