import { combineReducers } from 'redux';
import productsReducer from './products';
import uiReducer from './ui';
import cartReducer from './cart';

const rootReducer = combineReducers({
  products: productsReducer,
  ui: uiReducer,
  cart: cartReducer,
});

export default rootReducer;
