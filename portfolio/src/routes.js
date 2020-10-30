import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Pantheon from './views/Pantheon';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/pantheon" component={Pantheon} />
  </Route>
);