import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import {actions as myActions, selectors as mySelectors} from 'businesses/rule-activity-list';

import RuleActivityListComponent from '../components/rule-activity-list';

class RuleActivityList extends Component {
  componentWillUnmount() {
    this.props.actions.clear();
  }

  render() {
    const title = 'Rule Activity List';
    return (
    <DocumentTitle title={title}>
      <RuleActivityListComponent {...this.props}/>
    </DocumentTitle>
    );
  }
}

RuleActivityList.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(RuleActivityList);
