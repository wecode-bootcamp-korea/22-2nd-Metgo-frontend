import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './Pages/Main/Main';
import FindGosu from './Pages/FindGosu/FindGosu';
import GosuDetail from './Pages/GosuDetail/GosuDetail';
import GosuMain from './Pages/GosuMain/GosuMain';
import Survey from './Pages/Survey/Survey';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/survey/:id" component={Survey} />
        <Route exact path="/findgosu" component={FindGosu} />
        <Route exact path="/gosudetail/:id" component={GosuDetail} />
        <Route exact path="/gosumain" component={GosuMain} />
      </Switch>
    </Router>
  );
}

export default Routes;
