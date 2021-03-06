import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/products';
import * as fromProducts from '../redux/reducers/products';
import { bindActionCreators } from 'redux';
import useQueryParams from '../hooks/useQueryParams';
import * as fromUI from '../redux/reducers/ui';
import { addToCart } from '../redux/actions/cart';

const ProductListContainer = ({
  categoriesFetched,
  products,
  isLoading,
  getProducts,
  addToCart,
}) => {
  const params = useQueryParams();
  const category = params.get('category');

  useEffect(() => {
    if (categoriesFetched) {
      getProducts({
        category: params.get('category'),
      });
    }
  }, [categoriesFetched, category]);

  return <ProductList products={products} isLoading={isLoading} addToCart={addToCart} />;
};

const mapStateToProps = state => ({
  products: fromProducts.getFilteredProducts(state),
  isLoading: state.products.isLoading,
  categoriesFetched: fromUI.getCategoriesFetched(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ getProducts, addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
