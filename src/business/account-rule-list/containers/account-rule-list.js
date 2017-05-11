import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import {actions as myActions, selectors as mySelectors} from 'business/account-rule-list';

import AccountRuleListComponent from '../components/account-rule-list';

class AccountRuleList extends Component {
  componentWillUnmount() {
    this.props.actions.clear();
  }

  render() {
    const title = 'Account Rule List';
    return (
    <DocumentTitle title={title}>
      <AccountRuleListComponent {...this.props}/>
    </DocumentTitle>
    );
  }
}

AccountRuleList.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ...mySelectors.get(state)
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
    ...myActions
  };
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountRuleList);
