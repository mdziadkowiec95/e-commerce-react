import * as actionTypes from './actionTypes';

export const getProductDetails = productSlug => ({
  type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
  payload: {
    productSlug,
  },
});

export const getProductDetailsSuccess = details => ({
  type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
  payload: {
    details,
  },
});

export const getProductDetailsError = () => ({
  type: actionTypes.GET_PRODUCT_DETAILS_ERROR,
});
