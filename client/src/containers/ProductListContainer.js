import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/products';
import { bindActionCreators } from 'redux';

const ProductListContainer = ({ products, isLoading, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return <ProductList products={products} isLoading={isLoading} />;
};

const mapStateToProps = ({ products }) => ({
  products: products.items,
  isLoading: products.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
