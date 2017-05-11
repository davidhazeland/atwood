require('semantic-ui-css/semantic.min.css');

import React from 'react';
import {StyleRoot} from 'radium';

import { Switch, Route } from 'react-router'

import Header from '../containers/header'
import Content from './content';

import {component as AccountList} from 'business/account-list';
import {component as AccountRuleList} from 'business/account-rule-list';
import {component as RuleActivityList} from 'business/rule-activity-list';

const App = (props) => {
  return (
    <StyleRoot>
      <Header path={props.path}/>
      <Content>
        <Switch>
          <Route exact path="/accounts" component={AccountList}/>
          <Route path="/accounts/:id/rules" component={AccountRuleList}/>
          <Route path="/rules/:id/activities" component={RuleActivityList}/>
        </Switch>
      </Content>
    </StyleRoot>
  );
};

App.propTypes = {};

export default App;
