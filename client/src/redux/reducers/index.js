import { combineReducers } from 'redux';
import productsReducer from './products';
import uiReducer from './ui';

const rootReducer = combineReducers({
  products: productsReducer,
  ui: uiReducer,
});

export default rootReducer;
