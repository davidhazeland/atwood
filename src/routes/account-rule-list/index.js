import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AccountRuleList from './containers/account-rule-list';

export default path => (
  <Route path={path}>
    <IndexRoute component={AccountRuleList}/>
  </Route>
);
