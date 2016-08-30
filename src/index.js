import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import { Provider } from 'react-redux'

import AppContainer from '@modules/AppContainer'
import '@utils/errorListener'
// import ExampleContainer from '@modules/example/ExampleContainer'
import UsersContainer from '@modules/users/UsersContainer'
import store from './redux/store'

// TODO: Add routes
const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
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
