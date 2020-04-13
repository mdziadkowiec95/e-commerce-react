import { takeEvery, takeLatest, spawn } from 'redux-saga/effects';
import { getProductsSaga } from '../sagas/products';
import * as actionTypes from '../actions/actionTypes';
import { getCategoriesSaga } from './ui';
import { getProductDetailsSaga } from './product';

function* watchCategories() {
  yield takeLatest(actionTypes.GET_CATEGORIES_REQUEST, getCategoriesSaga);
}

function* watchProducts() {
  yield takeEvery(actionTypes.GET_PRODUCTS_REQUEST, getProductsSaga);
}

function* watchProductDetails() {
  yield takeEvery(actionTypes.GET_PRODUCT_DETAILS_REQUEST, getProductDetailsSaga);
}

export default function* rootSaga() {
  yield spawn(watchCategories);
  yield spawn(watchProducts);
  yield spawn(watchProductDetails);
}
