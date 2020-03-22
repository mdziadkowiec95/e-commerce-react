import React from 'react';
import AppTemplate from './templates/AppTemplate';
import { Provider } from 'react-redux';
import { store } from './redux';
import ProductListContainer from './containers/ProductListContainer';

const App = () => (
  <Provider store={store}>
    <AppTemplate>
      <ProductListContainer />
    </AppTemplate>
  </Provider>
);

export default App;
