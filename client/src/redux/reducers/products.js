import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  filters: {
    category: null,
  },
  error: false,
  isLoading: false,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        filters: payload,
        isLoading: true,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: payload.products,
        error: false,
        isLoading: false,
      };
    case actionTypes.GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: payload.error,
        isLoading: true,
      };
    default:
      return state;
  }
};
