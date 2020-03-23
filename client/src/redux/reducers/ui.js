import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categories: [],
  brands: [],
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
      };
    default:
      return state;
  }
};
