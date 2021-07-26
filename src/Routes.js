import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import Main from '../src/pages/Main/Main';
import GosuDetail from '../src/pages/GosuDetail/GosuDetail';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
