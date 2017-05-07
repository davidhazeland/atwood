import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AccountList from './components/account-list';

export const route = path => (
  <Route path={path}>
    <IndexRoute component={AccountList}/>
  </Route>
);
