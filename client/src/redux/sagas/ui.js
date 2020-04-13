import { put, call, select } from 'redux-saga/effects';
import contentfulDeliveryClient from '../../services/contentfulClient';
import { getCategoriesSuccess } from '../actions/ui';
import { getProducts } from '../actions/products';
import { mapCategoryData } from '../../utilities/contentful';

export function* getCategoriesSaga() {
  console.log('getCategoriesSaga');

  try {
    const categories = yield call([contentfulDeliveryClient, contentfulDeliveryClient.getEntries], {
      content_type: 'category',
    });

    console.log(categories);

    const filteredCategories = mapCategoryData(categories);

    yield put(getCategoriesSuccess(filteredCategories));
  } catch (error) {}
}
