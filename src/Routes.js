import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import Main from '../src/pages/Main/Main';
import FindGosu from '../src/pages/Gosu/FindGosu';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/findgosu" component={FindGosu} />
      </Switch>
    </Router>
  );
}

export default Routes;
