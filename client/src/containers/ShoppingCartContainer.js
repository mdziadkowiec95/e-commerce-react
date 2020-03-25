import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartTable from '../components/ShoppingCartTable';

const ShoppingCartContainer = () => {
  return <ShoppingCartTable />;
};

export default connect(null, null)(ShoppingCartContainer);
