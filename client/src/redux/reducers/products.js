import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  items: [],
  isError: false,
  errorMsg: null,
};

// @TODO --- Try to use 'reselect' selectors library

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: payload.products,
        isError: false,
        errorMsg: null,
        isLoading: false,
      };
    case actionTypes.GET_PRODUCTS_ERROR:
      return {
        ...state,
        isError: true,
        errorMsg: payload.error,
        isLoading: true,
      };
    default:
      return state;
  }
};
