import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../style.css";

const Footer = () => (
  <Box component="footer" className="footer">
    <Container maxWidth="md" className="footer-content">
        <ul className="footer-socials">
        <li><a href=" https://www.tiktok.com/@pathfinderke_" target="_blank"><i className="bi bi-tiktok" /></a></li>
        <li><a href="#"><i className="bi bi-linkedin" /></a></li>
        <li><a href="https://x.com/PathFinderke_" target="_blank"><i className="bi bi-twitter-x" /></a></li>
      </ul>
      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} PathFinder-KE. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
