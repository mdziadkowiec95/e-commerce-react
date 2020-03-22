import * as actionTypes from './actionTypes';

export const getProducts = () => ({
  type: actionTypes.GET_PRODUCTS_REQUEST,
});

export const getProductsSuccess = ({ products }) => ({
  type: actionTypes.GET_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});

export const getProductsError = () => ({
  type: actionTypes.GET_PRODUCTS_ERROR,
});
