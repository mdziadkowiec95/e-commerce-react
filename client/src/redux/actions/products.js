import * as actionTypes from './actionTypes';

export const getProducts = ({ category } = {}) => ({
  type: actionTypes.GET_PRODUCTS_REQUEST,
  payload: {
    category,
  },
});

export const getProductsSuccess = products => ({
  type: actionTypes.GET_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});

export const getProductsError = error => ({
  type: actionTypes.GET_PRODUCTS_ERROR,
  payload: {
    error,
  },
});
