import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      const productIndex = state.products.findIndex(p => p.id === payload.product.id);

      if (state.products.length === 0 || productIndex === -1)
        return {
          ...state,
          products: [
            {
              ...payload.product,
              quantity: 1,
            },
            ...state.products,
          ],
        };

      const productsCopy = [...state.products];
      productsCopy[productIndex] = {
        ...payload.product,
        quantity: state.products[productIndex].quantity + 1,
      };
      return {
        ...state,
        products: productsCopy,
      };
    default:
      return state;
  }
};

export default reducer;
