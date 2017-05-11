import React from 'react';

import component from './components/app';

import {Route} from 'react-router';

export const createRoutes = () => {
  return (
    <Route path="/" component={component}/>
  );
}
