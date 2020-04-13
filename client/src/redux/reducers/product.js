import * as actionTypes from '../actions/actionTypes';

export const getLoading = state => state.product.isLoading;
export const getDetails = state => state.product.details;

const initialState = {
  details: null,
  error: false,
  isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        details: payload.details,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
