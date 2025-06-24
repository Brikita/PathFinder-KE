import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";

const About = () => (
  <section id="about-section" className="section">
    <Container maxWidth="md">
      <Box sx={{ padding: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h3" gutterBottom>
          About PathFinderKE
        </Typography>
        <Typography variant="body1" paragraph>
          PathFinder KE is your post-high school cheat code—part game, part guide, all Kenyan.
          It’s a mobile and web app that lets you live out different career and academic paths in a fun, simulation-style experience.
          Make choices, see where they lead, and learn through gameplay—no regrets, just lessons.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're fresh out of high school, vibing in uni, or just wondering “what if?”,
          PathFinder KE lets you explore your future like a story game, with YOU in the driver's seat.
        </Typography>
        <Typography variant="body1" paragraph>
          Built with React and Material-UI, PathFinder-KE offers a modern and
          responsive user experience.
        </Typography>
      </Box>
    </Container>
  </section>
);

export default About;

const StyledWrapper = styled.div`
    
`