import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categoriesFetched: false,
  categories: [],
  brands: [],
};

export const getCategories = state => state.ui.categories;

export const getCategoriesFetched = state => state.ui.categoriesFetched;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
        categoriesFetched: true,
      };
    default:
      return state;
  }
};

export default reducer;
