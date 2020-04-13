import { put, call } from 'redux-saga/effects';
import contentfulDeliveryClient from '../../services/contentfulClient';
import { mapSingleProductData } from '../../utilities/contentful';
import { getProductDetailsSuccess, getProductDetailsError } from '../actions/product';

export function* getProductDetailsSaga({ payload }) {
  try {
    const entries = yield call([contentfulDeliveryClient, contentfulDeliveryClient.getEntries], {
      content_type: 'product',
      'fields.slug[in]': payload.productSlug,
    });

    if (entries.items.length > 0) {
      const productData = mapSingleProductData(entries.items[0]);
      yield put(getProductDetailsSuccess(productData));
    } else {
      yield put(getProductDetailsError());
    }
  } catch (error) {
    console.log(error);
    yield put(getProductDetailsError());
  }
}
