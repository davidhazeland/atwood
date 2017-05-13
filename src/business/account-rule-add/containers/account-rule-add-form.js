import {reduxForm} from 'redux-form';

import Component from '../components/account-rule-add-form';

export const name = 'accountRuleAdd';

export default reduxForm({
  form: name
})(Component);
