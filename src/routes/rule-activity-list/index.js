import React from 'react';
import { Route, IndexRoute } from 'react-router';

import RuleActivityList from './containers/rule-activity-list';

export default path => (
  <Route path={path}>
    <IndexRoute component={RuleActivityList}/>
  </Route>
);
