import { takeEvery } from 'redux-saga/effects';
import { getProductsSaga } from '../sagas/products';
import * as actionTypes from '../actions/actionTypes';

export function* watchProducts() {
  yield takeEvery(actionTypes.GET_PRODUCTS_REQUEST, getProductsSaga);
}
