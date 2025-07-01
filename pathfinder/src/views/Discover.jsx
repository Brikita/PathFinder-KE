import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import BarChartIcon from "@mui/icons-material/BarChart";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";

const Discover = () => {
  return (
  <section id="about-section" className="section">
    <Container maxWidth="md">
      <Box sx={{ padding: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h3" gutterBottom>
          About PathFinder KE
        </Typography>
        <Typography variant="body1" paragraph>
          PathFinder KE is your post-high school cheat code—part game, part guide, all Kenyan.
          It’s a mobile and web app that lets you live out different career and academic paths
          in a fun, simulation-style experience. Make choices, see where they lead, and learn
          through gameplay—no regrets, just lessons.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're fresh out of high school, vibing in uni, or just wondering “what if?”,
          PathFinder KE lets you explore your future like a story game—with YOU in the driver's seat.
        </Typography>

        <Typography variant="h5" component="h5" gutterBottom>
          Why We Exist
        </Typography>
        <Typography variant="body1" paragraph>
          Stuck on what to do after high school? You’re not alone. PathFinder KE
          turns career confusion into an adventure—play your future, test your
          options, and unlock your purpose before life hits you with the "real
          world" popup.
        </Typography>

        <Typography variant="h5" component="h5" gutterBottom>
          Our Mission:
        </Typography>
        <Typography variant="body1" paragraph>
          To empower Kenyan youth to take charge of their future by simulating
          real-world academic and career decisions in an engaging, gamified way.
        </Typography>

        <Typography variant="h5" component="h5" gutterBottom>
          PathFinder KE is built for:
        </Typography>
        <Box sx={{ width: "100%", mx: "auto", mb: 3 }}>
          <List
            sx={{
              width: "100%",
              p: { xs: 0, sm: 1 },
            }}
          >
            <ListItem sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 1.5 } }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <EmojiObjectsIcon color="primary" fontSize="medium" />
              </ListItemIcon>
              <ListItemText
                primary="Immediate: Students (MVP)"
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 1.5 } }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <FamilyRestroomIcon color="secondary" fontSize="medium" />
              </ListItemIcon>
              <ListItemText
                primary="Later: Parents & Teachers (future updates)"
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 1.5 } }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <BarChartIcon color="action" fontSize="medium" />
              </ListItemIcon>
              <ListItemText
                primary="Career Mentors & Policy Stakeholders (data insights)"
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                }}
              />
            </ListItem>
          </List>
        </Box>

        <Typography variant="body1" paragraph>
          Built with React and Material-UI, PathFinder-KE offers a modern and
          responsive user experience.
        </Typography>

      </Box>
    </Container>
  </section>
)
};

export default Discover;

const StyledWrapper = styled.div``;
