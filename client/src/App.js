import React from 'react';
import AppTemplate from './templates/AppTemplate';
import { Provider } from 'react-redux';
import { configureStore } from './redux';
import ProductListContainer from './containers/ProductListContainer';

const App = () => (
  <AppTemplate>
    <ProductListContainer />
  </AppTemplate>
);

export default App;
