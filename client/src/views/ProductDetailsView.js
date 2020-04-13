import React from 'react';
import ProductDetailsContainer from '../containers/ProductDetailsContainer';

const ProductDetailsView = ({ match }) => (
  <div>
    <ProductDetailsContainer routeSlug={match.params.productSlug} />
  </div>
);

export default ProductDetailsView;
