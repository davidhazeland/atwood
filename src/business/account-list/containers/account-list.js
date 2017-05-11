import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DocumentTitle from 'react-document-title'

import {actions as myActions, selectors as mySelectors} from 'business/account-list'

import AccountListComponent from '../components/account-list'

class AccountList extends Component {
  componentWillUnmount() {
    this.props.actions.clear()
  }

  render() {
    const title = 'Account List'
    return (
    <DocumentTitle title={title}>
      <AccountListComponent {...this.props}/>
    </DocumentTitle>
    )
  }
}

AccountList.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(AccountList)
