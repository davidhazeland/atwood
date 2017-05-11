import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HeaderComponent from '../components/header'

class Header extends Component {
  render() {
    return (
      <HeaderComponent {...this.props}/>
    )
  }
}

Header.propTypes = { actions: PropTypes.object.isRequired }
function mapStateToProps(state) {
  return {
  }
}
function mapDispatchToProps(dispatch) {
  const actions = {
    
  }
  return { actions: bindActionCreators(actions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
