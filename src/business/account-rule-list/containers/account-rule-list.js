import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DocumentTitle from 'react-document-title'

import {actions as myActions, selectors as mySelectors} from 'business/account-rule-list'
import {actions as listActions, selectors as listSelectors} from 'ironlake/businesses/list';

import AccountRuleListComponent from '../components/account-rule-list'

class AccountRuleList extends Component {
  componentWillMount() {
    this.props.actions.fetchRequest({
      query: {},
      params: {
        accountId: this.props.accountId
      }
    })
  }

  componentWillUnmount() {
    this.props.actions.clear()
    this.props.actions.clearList()
  }

  render() {
    const title = 'Account Rule List'
    return (
    <DocumentTitle title={title}>
      <AccountRuleListComponent {...this.props}/>
    </DocumentTitle>
    )
  }
}

AccountRuleList.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  const {id} = ownProps.match.params;
  return {
    accountId: id,
    List: listSelectors.get(state),
    ...mySelectors.get(state)
  }
}
function mapDispatchToProps(dispatch) {
  const actions = {
    ...myActions,
    clearList: listActions.clear
  }
  return { actions: bindActionCreators(actions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountRuleList)
