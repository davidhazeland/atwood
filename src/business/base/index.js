import React from 'react';

import App from './components/app';

import {route as AccountList} from 'business/account-list';

import {Route} from 'react-router';

export const createRoutes = () => {
  return (
    <Route path="/">
      <Route component={App}>
        {AccountList('accounts')}
      </Route>
    </Route>
  );
}
