import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { getProductDetails } from '../redux/actions/product';
import * as fromProduct from '../redux/reducers/product';
import ProductDetails from '../components/ProductDetails';
import Spinner from '../components/Spinner';

const ProductDetailsContainer = ({ routeSlug, isLoading, details, getProductDetails }) => {
  useEffect(() => {
    getProductDetails(routeSlug);
  }, [routeSlug]);

  return details && !isLoading ? (
    <ProductDetails details={details} />
  ) : (
    <Spinner size="200qwfqwf" />
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ getProductDetails }, dispatch);

const mapStateToProps = state => ({
  isLoading: fromProduct.getLoading(state),
  details: fromProduct.getDetails(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);
