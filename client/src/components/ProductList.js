import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Spinner from './Spinner';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ProductList = ({ products, isLoading, addToCart }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isLoading && <Spinner />}
      <Grid container spacing={3} justify="center">
        {products &&
          products.length > 0 &&
          products.map(product => (
            <Grid item xs={12} md={6} lg={4} key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ProductList;
