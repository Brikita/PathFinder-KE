import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../style.css";

const Footer = () => (
  <Box component="footer" className="footer">
    <Container maxWidth="md">
      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} PathFinder-KE. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
