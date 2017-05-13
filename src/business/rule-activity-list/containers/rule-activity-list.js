import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DocumentTitle from 'react-document-title'

import {actions as myActions, selectors as mySelectors} from 'business/rule-activity-list'
import {actions as listActions, selectors as listSelectors} from 'raket-react/business/list';

import RuleActivityListComponent from '../components/rule-activity-list'

class RuleActivityList extends Component {
  componentWillMount() {
    this.props.actions.fetchRequest({
      query: {},
      params: {
        ruleId: this.props.ruleId
      }
    })
  }

  componentWillUnmount() {
    this.props.actions.clear()
    this.props.actions.clearList()
  }

  render() {
    const title = 'Rule Activity List'
    return (
    <DocumentTitle title={title}>
      <RuleActivityListComponent {...this.props}/>
    </DocumentTitle>
    )
  }
}

RuleActivityList.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  const {id} = ownProps.match.params;
  return {
    ruleId: id,
    List: listSelectors.get(state),
    ...mySelectors.get(state)
  }
}
function mapDispatchToProps(dispatch) {
  const actions = {
    clearList: listActions.clear,
    ...myActions
  }
  return { actions: bindActionCreators(actions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(RuleActivityList)
