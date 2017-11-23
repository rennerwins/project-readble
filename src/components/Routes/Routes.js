import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../../containers/App';
import CategoryContainer from '../../containers/CategoryContainer';
import PostContainer from '../../containers/PostContainer';
import CreatePostContainer from '../../containers/CreatePostContainer';
import EditPostContainer from '../../containers/EditPostContainer';

const routes = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/create" component={CreatePostContainer} />
      <Route exact path="/:category" component={CategoryContainer} />
      <Route exact path="/:category/:post_id" component={PostContainer} />
      <Route exact path="/:category/:post_id/edit" component={EditPostContainer} />
    </Switch>
  </div>
);

export default routes;
