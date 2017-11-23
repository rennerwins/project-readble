import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './utils/registerServiceWorker';
import store from './store/store';
import App from './containers/App';
import CategoryContainer from './containers/CategoryContainer';
import PostContainer from './containers/PostContainer';
import CreatePostContainer from './containers/CreatePostContainer';
import EditPostContainer from './containers/EditPostContainer';
import Navbar from './components/Header/Navbar/Navbar';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/create" component={CreatePostContainer} />
            <Route exact path="/:category" component={CategoryContainer} />
            <Route exact path="/:category/:post_id" component={PostContainer} />
            <Route exact path="/:category/:post_id/edit" component={EditPostContainer} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
