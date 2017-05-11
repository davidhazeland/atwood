import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'

import configureStore from './stores'
import { component } from './business/base'

const history = createHistory()

const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <Route path="/" component={component}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
