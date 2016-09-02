import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import AppContainer from '@modules/AppContainer'
import '@utils/errorListener'
import UsersContainer from '@modules/users/UsersContainer'
import store from '@redux/store'

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('routing').toJS()
})
// TODO: Add routes
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <Route path="users" component={UsersContainer} />
      </Route>
      <Redirect from="*" to="/users" />
    </Router>
  </Provider>
)

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
)
