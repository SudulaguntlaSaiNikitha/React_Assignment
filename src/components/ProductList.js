// // // src/components/ProductList.jsx
// // import { useState } from 'react';
// // import { Grid, TextField, CircularProgress } from '@mui/material';
// // import ProductCard from './ProductCard';
// // import useProducts from '../hooks/useProducts';
// // import { getCart, saveCart } from '../utils/storage';

// // const ProductList = () => {
// //   const [page, setPage] = useState(0);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const { products, loading } = useProducts(page, 10, searchQuery);
// //   const [cart, setCart] = useState(getCart());

// //   const addToCart = (product) => {
// //     const newCart = [...cart, product];
// //     setCart(newCart);
// //     saveCart(newCart);
// //   };

// //   return (
// //     <>
// //       <TextField
// //         fullWidth
// //         label="Search"
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //       />
// //       {loading ? (
// //         <CircularProgress />
// //       ) : (
// //         <Grid container spacing={2}>
// //           {products.map((product) => (
// //             <Grid item xs={12} sm={6} md={4} key={product.id}>
// //               <ProductCard product={product} addToCart={addToCart} />
// //             </Grid>
// //           ))}
// //         </Grid>
// //       )}
// //     </>
// //   );
// // };

// // export default ProductList;


// // src/components/ProductList.jsx
// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   CircularProgress,
//   Typography,
//   Box,
// } from '@mui/material';
// import ProductCard from './ProductCard';
// import useProducts from '../hooks/useProducts';
// import Pagination from './Pagination';
// import { getCart, saveCart } from '../utils/storage';

// const ProductList = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [cart, setCart] = useState(getCart());
//   const { products, loading, total } = useProducts(page, 10, searchQuery);

//   const addToCart = (product) => {
//     const updatedCart = [...cart, { ...product, quantity: 1 }];
//     setCart(updatedCart);
//     saveCart(updatedCart);
//   };

//   return (
//     <Box sx={{ padding: '20px' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Product List
//       </Typography>
//       <TextField
//         label="Search Products"
//         fullWidth
//         variant="outlined"
//         sx={{ marginBottom: '20px' }}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       {loading ? (
//         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <>
//           <Grid container spacing={3}>
//             {products.map((product) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//                 <ProductCard product={product} addToCart={addToCart} />
//               </Grid>
//             ))}
//           </Grid>
//           <Pagination
//             total={total}
//             currentPage={page}
//             onChange={(newPage) => setPage(newPage)}
//           />
//         </>
//       )}
//     </Box>
//   );
// };

// export default ProductList;





// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  CircularProgress,
  Typography,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';
import Pagination from './Pagination';
import { getCart, saveCart } from '../utils/storage';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState(getCart());
  const [showAlert, setShowAlert] = useState(false);
  const { products, loading, total, isSearching } = useProducts(page, 10, searchQuery);

  // Add to Cart function with alert message
  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    saveCart(updatedCart);
    setShowAlert(true); // Show alert
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product List
      </Typography>
      <TextField
        label="Search Products"
        fullWidth
        variant="outlined"
        sx={{ marginBottom: '20px' }}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setPage(1); // Reset to page 1 on search
        }}
      />
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={3}>
            {products.length > 0 ? (
              products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <ProductCard product={product} addToCart={addToCart} />
                </Grid>
              ))
            ) : (
              <Typography align="center">No products found.</Typography>
            )}
          </Grid>
          <Pagination
            total={total}
            currentPage={page}
            onChange={(newPage) => setPage(newPage)}
          />
        </>
      )}

      {/* Snackbar Alert for Add to Cart */}
      <Snackbar
        open={showAlert}
        autoHideDuration={2000}
        onClose={() => setShowAlert(false)}
      >
        <Alert
          onClose={() => setShowAlert(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Item added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductList;

