import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { Switch, Route } from 'react-router'

import {StyleRoot} from 'radium'
import {Container} from 'semantic-ui-react'

import Header from '../containers/header'

import {component as AccountList} from 'business/account-list'
import {component as AccountRuleAdd} from 'business/account-rule-add'
import {component as AccountRuleList} from 'business/account-rule-list'
import {component as RuleActivityList} from 'business/rule-activity-list'
import {component as Dashboard} from 'business/dashboard'

const App = (props) => {
  return (
    <StyleRoot>
      <Header path={props.path}/>
      <Container>
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/accounts" component={AccountList}/>
          <Route exact path="/accounts/:id/rules" component={AccountRuleList}/>
          <Route path="/accounts/:id/rules/add" component={AccountRuleAdd}/>
          <Route path="/rules/:id/activities" component={RuleActivityList}/>
        </Switch>
      </Container>
    </StyleRoot>
  )
}

App.propTypes = {}

export default App
