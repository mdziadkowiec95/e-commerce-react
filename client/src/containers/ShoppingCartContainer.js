import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartTable from '../components/ShoppingCartTable';
import * as fromCart from '../redux/reducers/cart';

const ShoppingCartContainer = ({ products }) => {
  return <ShoppingCartTable products={products} />;
};

const mapStateToProps = state => ({
  products: fromCart.getProducts(state),
});

export default connect(mapStateToProps, null)(ShoppingCartContainer);
