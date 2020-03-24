import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsView from './views/ProductsView';
import HomeView from './views/HomeView';
import AppTemplate from './templates/AppTemplate';

const App = () => (
  <Router>
    <Switch>
      <AppTemplate>
        <Route exact path="/" component={HomeView} />
        <Route path="/products" component={ProductsView} />
      </AppTemplate>
    </Switch>
  </Router>
);

export default App;
