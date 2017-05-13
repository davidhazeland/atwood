import * as actions from './actions'
import reducer, { name } from './reducer'
import sagas from './sagas'
import * as selectors from './selectors'

import component from './containers/account-rule-add'

export {
  name,
  actions,
  sagas,
  selectors,
  component
}

export default reducer