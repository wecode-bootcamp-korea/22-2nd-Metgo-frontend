import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
