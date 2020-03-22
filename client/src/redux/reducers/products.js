import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  items: [],
};

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
        isLoading: false,
      };
    default:
      return state;
  }
};
