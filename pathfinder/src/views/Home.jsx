import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Home = () => (
  <Container maxWidth="md">
    <Box
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 1, sm: 4 },
        textAlign: "center",
        minHeight: { xs: "60vh", sm: "70vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700, fontSize: { xs: "2rem", sm: "3rem" } }}
      >
        Welcome to PathFinder-KE
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        paragraph
        sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }}
      >
        Visualize and compare popular pathfinding algorithms like Dijkstra's and
        A* in real-time. Explore, learn, and interact with algorithms on a
        dynamic grid.
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#about-section"
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="#contact-section"
        >
          Contact Us
        </Button>
      </Stack>
    </Box>
  </Container>
);

export default Home;
