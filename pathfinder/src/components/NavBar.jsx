import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navLinks = [
  { label: "Home", to: "home-section" },
  { label: "About", to: "about-section" },
  { label: "Contact", to: "contact-section" },
];

const NavBar = ({ onNavClick, colorMode, mode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleScroll = (section) => {
    if (onNavClick) onNavClick(section);
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ minHeight: 64 }}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: 64,
              cursor: "pointer",
            }}
            onClick={() => handleScroll("home-section")}
          >
            <img
              src="/logo.svg"
              alt="PathFinder-KE Logo"
              style={{
                width: 48,
                height: 48,
                filter: "invert(1) brightness(2)",
              }}
            />
          </Box>
        </Box>
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={menuOpen ? handleMenuClose : handleMenuOpen}
              sx={{ ml: 1 }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.to} onClick={() => handleScroll(link.to)}>
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link.to}
                color="inherit"
                onClick={() => handleScroll(link.to)}
                sx={{
                  borderBottom: "none",
                  borderRadius: 0,
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
