import {reduxForm} from 'redux-form'
import {connect} from 'react-redux'

import Component from '../components/account-rule-add-form'

export const name = 'accountRuleAdd'

export const form = reduxForm({
  form: name,
  enableReinitialize: true
})(Component)

export default connect(state => ({
  initialValues: {
    conditions: [
      {
        type: 'roas',
        expression: 'equal'
      }
    ],
    frequency: [
      {time: 9}
    ]
  }
}))(form)
