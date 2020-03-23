import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/products';
import * as productsSelectors from '../redux/selectors/products';
import { bindActionCreators } from 'redux';

const ProductListContainer = ({ products, isLoading, getProducts }) => {
  useEffect(() => {
    getProducts({
      category: 'Phones',
    });
  }, []);

  return <ProductList products={products} isLoading={isLoading} />;
};

const mapStateToProps = state => ({
  products: productsSelectors.getFilteredProducts(state),
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
