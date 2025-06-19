import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TeamCard from "../components/Card";
import team from "../data/Team";

const About = () => (
  <Container maxWidth="md">
    <Box sx={{ padding: { xs: 2, sm: 4 } }}>
      <Typography variant="h4" component="h3" gutterBottom>
        About PathFinderKE
      </Typography>
      <Typography variant="body1" paragraph>
        PathFinder-KE is a web-based application designed to visualize and
        compare different pathfinding algorithms. It provides an interactive
        platform for users to explore how algorithms like Dijkstra's, A*, and
        others work in real-time on a grid.
      </Typography>
      <Typography variant="body1" paragraph>
        The project aims to help students, educators, and enthusiasts understand
        the strengths and weaknesses of various algorithms through visual
        feedback and easy-to-use controls.
      </Typography>
      <Typography variant="body1" paragraph>
        Built with React and Material-UI, PathFinder-KE offers a modern and
        responsive user experience.
      </Typography>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" component="h3" gutterBottom align="center">
          Meet the Team
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {team.map((member) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
              key={member.name}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TeamCard
                name={member.name}
                role={member.role}
                avatar={member.avatar}
                github={member.github}
                linkedin={member.linkedin}
                x={member.x}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </Container>
);

export default About;
