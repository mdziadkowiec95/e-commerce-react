import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Fab } from '@material-ui/core';
import { mapProductToShopingCart } from '../utilities/cart';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProductCard = ({ product, addToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.productName}
        subheader={`$${product.price}`}
      />
      <CardMedia
        className={classes.media}
        image={product.image[0].fields.file.url}
        title="Paella dish"
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          onClick={() => addToCart(mapProductToShopingCart(product))}
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon />
        </IconButton>
        <Fab
          variant="extended"
          size="medium"
          color="secondary"
          component={Link}
          to={`/product/${product.slug}`}
        >
          ${product.price} - Buy
        </Fab>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
