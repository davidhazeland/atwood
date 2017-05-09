import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AccountList from './containers/account-list';

export default path => (
  <Route path={path}>
    <IndexRoute component={AccountList}/>
  </Route>
);
