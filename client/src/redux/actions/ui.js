import * as actionTypes from './actionTypes';

export const getCategories = () => ({
  type: actionTypes.GET_CATEGORIES_REQUEST,
});

export const getCategoriesSuccess = categories => ({
  type: actionTypes.GET_CATEGORIES_SUCCESS,
  payload: {
    categories,
  },
});
