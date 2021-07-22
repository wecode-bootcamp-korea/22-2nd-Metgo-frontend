import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import Main from '../src/pages/Main/Main';
import FindGosu from '../src/pages/Gosu/FindGosu';
import GosuDetail from '../src/pages/GosuDetail/GosuDetail';
import GosuMain from '../src/pages/GosuMain/GosuMain';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={GosuMain} />
        <Route exact path="/findgosu" component={FindGosu} />
      </Switch>
    </Router>
  );
}

export default Routes;
