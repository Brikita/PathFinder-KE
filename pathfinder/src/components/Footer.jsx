import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      backgroundColor: "background.paper",
      textAlign: "center",
      zIndex: 1300,
    }}
  >
    <Container maxWidth="md">
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} PathFinder-KE. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
