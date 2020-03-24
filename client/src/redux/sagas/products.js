import { put, call, select } from 'redux-saga/effects';
import contentfulDeliveryClient from '../../services/contentfulClient';
import { getProductsSuccess, getProductsError } from '../actions/products';
import { mapProductsData } from '../../utilities/contentful';
import { getCategoryId, getCategoriesFetched } from '../reducers/ui';

export function* getProductsSaga({ payload }) {
  try {
    // let cateogoryId = yield select(state => getCategoryId(state, payload.category));

    const entries = yield call([contentfulDeliveryClient, contentfulDeliveryClient.getEntries], {
      content_type: 'product',
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.fields.fieldName': payload.category,
      // 'fields.categories.sys.id[in]': cateogoryId,
    });

    console.log(entries);

    const products = mapProductsData(entries.items);

    yield put(getProductsSuccess(products));
  } catch (error) {
    console.log(error);
    yield put(getProductsError(error));
  }
}
