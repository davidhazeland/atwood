import RuleActivityList, { name as nameOfRuleActivityList } from 'businesses/rule-activity-list';
import AccountRuleList, { name as nameOfAccountRuleList } from 'businesses/account-rule-list';
import AccountList, { name as nameOfAccountList } from 'businesses/account-list';
const reducers = {
  [nameOfRuleActivityList]: RuleActivityList,
  [nameOfAccountRuleList]: AccountRuleList,
  [nameOfAccountList]: AccountList
};
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import form from './form';
module.exports = combineReducers(Object.assign(reducers, {
  routing,
  form
}));
