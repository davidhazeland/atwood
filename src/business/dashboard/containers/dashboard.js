import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DocumentTitle from 'react-document-title'

import { actions as myActions, selectors as mySelectors } from 'business/dashboard'
import {actions as listActions, selectors as listSelectors} from 'raket-react/business/list';

import DashboardComponent from '../components/dashboard'

class Dashboard extends Component {
  componentWillMount() {
    this.props.actions.fetchRequest({
      query: {}
    })
  }

  componentWillUnmount() {
    this.props.actions.clear()
    this.props.actions.clearList()
  }

  render() {
    const title = 'Dashboard'
    return (
      <DocumentTitle title={title}>
        <DashboardComponent {...this.props}/>
      </DocumentTitle>
    )
  }
}

Dashboard.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
