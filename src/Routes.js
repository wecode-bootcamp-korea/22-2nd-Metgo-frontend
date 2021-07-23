import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../src/components/Nav/Nav';
import Main from '../src/Pages/Main/Main';
import Survey from './Pages/Survey/Survey';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Survey} />
        {/* <Route exact path="/survey" component={Survey} /> */}
      </Switch>
    </Router>
  );
}

export default Routes;
