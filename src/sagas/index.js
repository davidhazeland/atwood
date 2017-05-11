import { sagas as RuleActivityList } from 'business/rule-activity-list';
import { sagas as AccountRuleList } from 'business/account-rule-list';
import { sagas as AccountList } from 'business/account-list';
import { flatten } from 'lodash/array';
import { values } from 'lodash/object';

const sagasList = [
  RuleActivityList,
  AccountRuleList,
  AccountList
];
import { delay } from 'redux-saga';
import {
  call,
  spawn,
  all
} from 'redux-saga/effects';
module.exports = function* () {
  const rootSagas = flatten(sagasList.map(sagas => values(sagas))).map(makeRestartable);
  yield all(rootSagas.map(saga => call(saga)));
};

function makeRestartable(saga) {
  return function* () {
    yield spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          console.error("unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!",saga);
        } catch (e) {
          console.error("Saga error, the saga will be restarted",e);
        }
        yield delay(1000); // Avoid infinite failures blocking app TODO use backoff retry policy...
      }
    })
  };
};
