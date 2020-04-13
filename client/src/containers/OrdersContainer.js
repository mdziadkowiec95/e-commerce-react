import React from 'react';
import OrdersTable from '../components/OrdersTable';
import { connect } from 'react-redux';

const OrdersContainer = () => {
  return <OrdersTable />;
};

export default connect(null, null)(OrdersContainer);
