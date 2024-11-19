// // // // // src/components/Cart.jsx
// // // // import React, { useState } from 'react';
// // // // import { List, ListItem, Button, Typography } from '@mui/material';
// // // // import { getCart, saveCart } from '../utils/storage';

// // // // const Cart = () => {
// // // //   const [cart, setCart] = useState(getCart());

// // // //   const clearCart = () => {
// // // //     setCart([]);
// // // //     saveCart([]);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Typography variant="h4">Cart</Typography>
// // // //       <List>
// // // //         {cart.map((item, index) => (
// // // //           <ListItem key={index}>{item.title}</ListItem>
// // // //         ))}
// // // //       </List>
// // // //       <Button variant="contained" color="secondary" onClick={clearCart}>
// // // //         Clear Cart
// // // //       </Button>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Cart;


// // // // src/components/Cart.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   List,
// // //   ListItem,
// // //   Button,
// // //   Typography,
// // //   IconButton,
// // //   TextField,
// // //   Grid,
// // //   Box,
// // // } from '@mui/material';
// // // import { Delete, Add, Remove } from '@mui/icons-material';
// // // import { getCart, saveCart } from '../utils/storage';

// // // const Cart = () => {
// // //   const [cart, setCart] = useState(getCart());
// // //   const [totalPrice, setTotalPrice] = useState(0);

// // //   // Update total price whenever the cart changes
// // //   useEffect(() => {
// // //     const calculateTotalPrice = () => {
// // //       const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// // //       setTotalPrice(total);
// // //     };
// // //     calculateTotalPrice();
// // //   }, [cart]);

// // //   // Function to increase item quantity
// // //   const increaseQuantity = (index) => {
// // //     const updatedCart = [...cart];
// // //     updatedCart[index].quantity += 1;
// // //     setCart(updatedCart);
// // //     saveCart(updatedCart);
// // //   };

// // //   // Function to decrease item quantity
// // //   const decreaseQuantity = (index) => {
// // //     const updatedCart = [...cart];
// // //     if (updatedCart[index].quantity > 1) {
// // //       updatedCart[index].quantity -= 1;
// // //       setCart(updatedCart);
// // //       saveCart(updatedCart);
// // //     }
// // //   };

// // //   // Function to remove an item from the cart
// // //   const removeItem = (index) => {
// // //     const updatedCart = cart.filter((_, i) => i !== index);
// // //     setCart(updatedCart);
// // //     saveCart(updatedCart);
// // //   };

// // //   // Function to clear the entire cart
// // //   const clearCart = () => {
// // //     setCart([]);
// // //     saveCart([]);
// // //   };

// // //   return (
// // //     <Box sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
// // //       <Typography variant="h4" align="center" gutterBottom>
// // //         Cart
// // //       </Typography>

// // //       <List>
// // //         {cart.length > 0 ? (
// // //           cart.map((item, index) => (
// // //             <ListItem
// // //               key={index}
// // //               sx={{
// // //                 display: 'flex',
// // //                 justifyContent: 'space-between',
// // //                 alignItems: 'center',
// // //                 padding: '10px 0',
// // //                 borderBottom: '1px solid #e0e0e0',
// // //               }}
// // //             >
// // //               <Typography sx={{ flex: 1 }}>{item.title}</Typography>
// // //               <Typography sx={{ flex: 0.5 }}>${item.price}</Typography>

// // //               <Grid container spacing={1} sx={{ flex: 1 }}>
// // //                 <Grid item>
// // //                   <IconButton
// // //                     color="primary"
// // //                     onClick={() => decreaseQuantity(index)}
// // //                   >
// // //                     <Remove />
// // //                   </IconButton>
// // //                 </Grid>
// // //                 <Grid item>
// // //                   <TextField
// // //                     value={item.quantity}
// // //                     size="small"
// // //                     sx={{ width: '50px', textAlign: 'center' }}
// // //                     inputProps={{ readOnly: true }}
// // //                   />
// // //                 </Grid>
// // //                 <Grid item>
// // //                   <IconButton
// // //                     color="primary"
// // //                     onClick={() => increaseQuantity(index)}
// // //                   >
// // //                     <Add />
// // //                   </IconButton>
// // //                 </Grid>
// // //               </Grid>

// // //               <IconButton
// // //                 color="secondary"
// // //                 onClick={() => removeItem(index)}
// // //               >
// // //                 <Delete />
// // //               </IconButton>
// // //             </ListItem>
// // //           ))
// // //         ) : (
// // //           <Typography align="center">No items in the cart.</Typography>
// // //         )}
// // //       </List>

// // //       <Typography variant="h6" align="right" sx={{ marginTop: '20px' }}>
// // //         Total Price: ${totalPrice.toFixed(2)}
// // //       </Typography>

// // //       <Button
// // //         variant="contained"
// // //         color="secondary"
// // //         fullWidth
// // //         sx={{ marginTop: '20px' }}
// // //         onClick={clearCart}
// // //         disabled={cart.length === 0}
// // //       >
// // //         Clear Cart
// // //       </Button>
// // //     </Box>
// // //   );
// // // };

// // // export default Cart;



// // // src/components/Cart.jsx
// // import React, { useState } from 'react';
// // import {
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Button,
// //   Typography,
// //   Box,
// //   IconButton,
// // } from '@mui/material';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import { getCart, saveCart } from '../utils/storage';

// // const Cart = () => {
// //   const [cart, setCart] = useState(getCart());

// //   // Function to clear the cart with a confirmation prompt
// //   const clearCart = () => {
// //     const confirmClear = window.confirm("Are you sure you want to clear the cart?");
// //     if (confirmClear) {
// //       setCart([]);
// //       saveCart([]);
// //       alert("Cart has been cleared!");
// //     }
// //   };

// //   // Function to remove an item from the cart
// //   const removeItem = (index) => {
// //     const updatedCart = cart.filter((_, i) => i !== index);
// //     setCart(updatedCart);
// //     saveCart(updatedCart);
// //   };

// //   // Calculate total price
// //   const getTotalPrice = () => {
// //     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// //   };

// //   return (
// //     <Box sx={{ padding: '20px' }}>
// //       <Typography variant="h4" align="center" gutterBottom>
// //         Cart
// //       </Typography>
// //       {cart.length === 0 ? (
// //         <Typography align="center">Your cart is empty.</Typography>
// //       ) : (
// //         <>
// //           <List>
// //             {cart.map((item, index) => (
// //               <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
// //                 <ListItemText
// //                   primary={item.title}
// //                   secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
// //                 />
// //                 <IconButton edge="end" onClick={() => removeItem(index)}>
// //                   <DeleteIcon color="error" />
// //                 </IconButton>
// //               </ListItem>
// //             ))}
// //           </List>
// //           <Typography variant="h6" align="right" sx={{ marginTop: '20px' }}>
// //             Total Price: ${getTotalPrice().toFixed(2)}
// //           </Typography>
// //           <Button
// //             variant="contained"
// //             color="secondary"
// //             fullWidth
// //             sx={{ marginTop: '20px' }}
// //             onClick={clearCart}
// //           >
// //             Clear Cart
// //           </Button>
// //         </>
// //       )}
// //     </Box>
// //   );
// // };

// // export default Cart;


// // src/components/Cart.jsx
// import React, { useState } from 'react';
// import {
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Box,
//   IconButton,
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { getCart, saveCart } from '../utils/storage';

// const Cart = () => {
//   const [cart, setCart] = useState(getCart());

//   const clearCart = () => {
//     const confirmClear = window.confirm('Are you sure you want to clear the cart?');
//     if (confirmClear) {
//       setCart([]);
//       saveCart([]);
//       alert('Cart has been cleared!');
//     }
//   };

//   const removeItem = (index) => {
//     const updatedCart = cart.filter((_, i) => i !== index);
//     setCart(updatedCart);
//     saveCart(updatedCart);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Your Cart
//       </Typography>
//       {cart.length === 0 ? (
//         <Typography align="center">Your cart is empty.</Typography>
//       ) : (
//         <>
//           <List>
//             {cart.map((item, index) => (
//               <ListItem
//                 key={index}
//                 sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd' }}
//               >
//                 <ListItemText
//                   primary={item.title}
//                   secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
//                 />
//                 <IconButton edge="end" onClick={() => removeItem(index)}>
//                   <DeleteIcon color="error" />
//                 </IconButton>
//               </ListItem>
//             ))}
//           </List>
//           <Typography variant="h6" align="right" sx={{ marginTop: '20px' }}>
//             Total Price: ${getTotalPrice().toFixed(2)}
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary"
//             fullWidth
//             sx={{ marginTop: '20px' }}
//             onClick={clearCart}
//           >
//             Clear Cart
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Cart;


// src/components/Cart.jsx
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

