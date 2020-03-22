import { put } from 'redux-saga/effects';
import contentfulDeliveryClient from '../../services/contentfulClient';
import { getProductsSuccess } from '../actions/products';
import { filterProductsData } from '../../utilities/contentful';

export function* getProductsSaga(action) {
  const entries = yield contentfulDeliveryClient.getEntries({
    content_type: 'product',
  });

  const products = filterProductsData(entries.items);

  yield put(getProductsSuccess({ products }));
}
