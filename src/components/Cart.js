
import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Box,
  IconButton,
  TextField,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { getCart, saveCart } from '../utils/storage';

const Cart = () => {
  const [cart, setCart] = useState(getCart());

  // Function to increase the quantity of an item
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      saveCart(updatedCart);
    }
  };

  // Function to remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  // Function to clear the cart with confirmation
  const clearCart = () => {
    const confirmClear = window.confirm('Are you sure you want to clear the cart?');
    if (confirmClear) {
      setCart([]);
      saveCart([]);
      alert('Cart has been cleared!');
    }
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography align="center">Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item, index) => (
              <ListItem
                key={index}
                sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}
              >
                <ListItemText
                  primary={item.title}
                  secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => decreaseQuantity(index)}
                    sx={{ marginRight: '10px' }}
                  >
                    -
                  </Button>
                  <Typography variant="body1" sx={{ marginRight: '10px' }}>
                    {item.quantity}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </Button>
                </Box>
                <IconButton edge="end" onClick={() => removeItem(index)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ margin: '20px 0' }} />
          <Typography variant="h6" align="right">
            Total Price: ${getTotalPrice().toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ marginTop: '20px' }}
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </>
      )}
    </Box>
  );
};

export default Cart;

