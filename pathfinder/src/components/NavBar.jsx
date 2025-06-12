import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NavBar = () => {
    
  return (
      <AppBar position="static">
          
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PathFinder-KE
        </Typography>
        <Box>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;