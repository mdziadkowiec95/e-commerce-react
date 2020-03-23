import { put, call } from 'redux-saga/effects';
import contentfulDeliveryClient from '../../services/contentfulClient';
import { getProductsSuccess, getProductsError } from '../actions/products';
import { mapProductsData } from '../../utilities/contentful';

export function* getProductsSaga({ payload }) {
  try {
    const { category } = payload;

    console.log('category: ', category);

    const entries = yield call([contentfulDeliveryClient, contentfulDeliveryClient.getEntries], {
      content_type: 'product',
    });

    const products = mapProductsData(entries.items);

    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsError(error));
  }
}
