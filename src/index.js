import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from "react-router"
import { Provider } from "react-redux"

import AppContainer from "@modules/AppContainer"
import ExampleContainer from "@modules/example/ExampleContainer"
import store from "./redux/store"
import "@utils/errorListener"


//TODO: Add routes
const App = () => {
	return (
		<Provider store={store}>
			<Router history={browserHistory}>
			    <Route path="/" component={AppContainer}>
			      <Route path="*" component={ExampleContainer}/>
			    </Route>
			</Router>
		</Provider>
	)
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);

