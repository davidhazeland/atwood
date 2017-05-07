import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import {Router, browserHistory} from 'react-router';

import {createRoutes} from 'business/base';

const routes = createRoutes();

ReactDOM.render(
  <Router history={browserHistory}>
      {routes}
  </Router>,
  document.getElementById('root')
);
