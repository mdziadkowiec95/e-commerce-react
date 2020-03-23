import { put, call } from 'redux-saga/effects';
import contentfulDeliveryClient from '../../services/contentfulClient';
import { getCategoriesSuccess } from '../actions/ui';

export function* getCategoriesSaga() {
  console.log('getCategoriesSaga');

  try {
    const categories = yield call([contentfulDeliveryClient, contentfulDeliveryClient.getEntries], {
      content_type: 'category',
    });

    const filteredCategories = mapCategoryData(categories);

    yield put(getCategoriesSuccess(filteredCategories));
  } catch (error) {}
}
