import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import contentfulDeliveryClient from '../services/contentfulClient';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  // const products = new Array(10).fill();

  const fetchProducts = async () => {
    const entries = await contentfulDeliveryClient.getEntries({
      content_type: 'product'
    });

    console.log(entries);

    const filterProductsData = products => {
      const filtered = products.map(p => ({ id: p.sys.id, ...p.fields }));
      console.log(filtered);
      return filtered;
    }
    setProducts(filterProductsData(entries.items));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={classes.root}>
        <Grid container spacing={3} justify="center">
            {products && products.length > 0 && products.map(product => (
                <Grid item xs={12} md={6} lg={4} key={product.id}>
                  <ProductCard name={product.productName} price={product.price} image={product.image[0].fields.file.url}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default ProductList;