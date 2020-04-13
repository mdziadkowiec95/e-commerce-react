import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
};

export const getProducts = state => state.cart.products;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      const productIndex = state.products.findIndex(p => p.id === payload.product.id);

      if (productIndex === -1)
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
      const updatedProduct = state.products[productIndex];

      productsCopy[productIndex] = {
        ...updatedProduct,
        quantity: updatedProduct.quantity + 1,
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
