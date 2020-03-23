import { createSelector } from 'reselect';

const getProductsFilters = state => state.products.filters;
const getProducts = state => state.products.items;

export const getFilteredProducts = createSelector(
  [getProductsFilters, getProducts],
  (filters, products) => {
    if (!filters.category) return products;

    const filtered = products.filter(product => {
      return product.categories.some(category => category.fields.title === filters.category);
    });

    return filtered;
  },
);
