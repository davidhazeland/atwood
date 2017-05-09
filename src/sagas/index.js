import { sagas as RuleActivityList } from 'businesses/rule-activity-list';
import { sagas as AccountRuleList } from 'businesses/account-rule-list';
import { sagas as AccountList } from 'businesses/account-list';
import { flatten } from 'lodash/array';
import { values } from 'lodash/object';
const sagasList = [
  RuleActivityList,
  AccountRuleList,
  AccountList
];
import { fork } from 'redux-saga/effects';
module.exports = function* () {
  yield flatten(sagasList.map(sagas => values(sagas))).map(saga => fork(saga));
};
