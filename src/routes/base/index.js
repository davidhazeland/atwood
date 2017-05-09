import React from 'react';
import { Route } from 'react-router';

import App from './containers/app';
import AccountList from 'routes/account-list';
import RuleActivityList from 'routes/rule-activity-list';

export default (store) => {
  return (
    <Route path="/">
      <Route component={App}>
        {AccountList('accounts')}
        {RuleActivityList('rules/:id/activities')}
      </Route>
    </Route>
  );
}
