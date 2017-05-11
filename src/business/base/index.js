import React from 'react';

import component from './containers/app';

import {Route} from 'react-router';

export const createRoutes = () => {
  return (
    <Route path="/" component={component}/>
  );
}
