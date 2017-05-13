import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DocumentTitle from 'react-document-title'

import { actions as myActions, selectors as mySelectors } from 'business/account-rule-add'

import AccountRuleAddComponent from '../components/account-rule-add'

class AccountRuleAdd extends Component {
  componentWillUnmount() {
    this.props.actions.clear()
  }

  render() {
    const title = 'Account Rule Add'
    return (
      <DocumentTitle title={title}>
        <AccountRuleAddComponent {...this.props}/>
      </DocumentTitle>
    )
  }
}

AccountRuleAdd.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    ...mySelectors.get(state)
  }
}
function mapDispatchToProps(dispatch) {
  const actions = {
    ...myActions
  }
  return { actions: bindActionCreators(actions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountRuleAdd)
