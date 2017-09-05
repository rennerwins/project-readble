import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './utils/registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import test from './reducers'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './containers/App'
import CategoryContainer from './containers/CategoryContainer'
import PostContainer from './containers/PostContainer'
import CreatePostContainer from './containers/CreatePostContainer'

import Navbar from './components/Navbar'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	test,
	composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/create" component={CreatePostContainer} />
						<Route path="/:category/:post_id" component={PostContainer} />
						<Route path="/:category" component={CategoryContainer} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
