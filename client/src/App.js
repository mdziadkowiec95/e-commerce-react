import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsView from './views/ProductsView';
import HomeView from './views/HomeView';
import AppTemplate from './templates/AppTemplate';
import OrdersView from './views/OrdersView';
import ShoppingCartView from './views/ShoppingCartView';

const App = () => (
  <Router>
    <Switch>
      <AppTemplate>
        <Route exact path="/" component={HomeView} />
        <Route path="/products" component={ProductsView} />
        <Route path="/myaccount/orders" component={OrdersView} />
        <Route path="/shopping-cart" component={ShoppingCartView} />
      </AppTemplate>
    </Switch>
  </Router>
);

export default App;
