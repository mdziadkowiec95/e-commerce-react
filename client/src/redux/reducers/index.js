import { combineReducers } from 'redux';
import productsReducer from './products';
import uiReducer from './ui';
import cartReducer from './cart';
import productReducer from './product';

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  ui: uiReducer,
  cart: cartReducer,
});

export default rootReducer;
