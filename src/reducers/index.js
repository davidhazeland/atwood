import AccountList, { name as nameOfAccountList } from 'businesses/account-list';
const reducers = { [nameOfAccountList]: AccountList };
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import form from './form';
module.exports = combineReducers(Object.assign(reducers, {
  routing,
  form
}));
