
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

const ProductCard = ({ product, addToCart }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="img"
      image={product.thumbnail}
      alt={product.title}
      sx={{ height: 150 }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h6">
        {product.title}
      </Typography>
      <Typography>${product.price}</Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: '10px' }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;

