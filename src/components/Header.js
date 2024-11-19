// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
          Product Dashboard
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/')}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate('/cart')}>
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
