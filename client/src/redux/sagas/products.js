import { put, call } from 'redux-saga/effects';
import contentfulDeliveryClient from '../../services/contentfulClient';
import { getProductsSuccess, getProductsError } from '../actions/products';
import { filterProductsData } from '../../utilities/contentful';

export function* getProductsSaga({ payload }) {
  try {
    const { category } = payload;

    console.log('category: ', category);

    const entries = yield call([contentfulDeliveryClient, contentfulDeliveryClient.getEntries], {
      content_type: 'product',
    });

    const products = filterProductsData(entries.items);

    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsError(error));
  }
}
