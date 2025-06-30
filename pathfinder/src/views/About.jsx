import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import BarChartIcon from "@mui/icons-material/BarChart";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import "./../style.css"; // Ensure this path is correct


const About = () => {
return (
  <section id="about-section" className="section" style={{ fontFamily : "Audiowide" }}>
    <Container maxWidth="md">
      <Box sx={{ padding: { xs: 2, sm: 4 } }}>
        <Typography variant="inherit" component="h3" gutterBottom
        sx={{  fontSize: { xs: "2rem", sm: "2.5rem" },color: "#0899cf", textAlign: "center" }}>
          About PathFinder KE
        </Typography>
        <Typography variant="inherit" paragraph
         sx={{  fontSize: { xs: "1.2rem", sm: "1.5rem" }, lineHeight: 1.6 }}>
          PathFinder KE is your post-high school cheat code—part game, part guide, all Kenyan.
          It’s a mobile and web app that lets you live out different career and academic paths
          in a fun, simulation-style experience. Make choices, see where they lead, and learn
          through gameplay—no regrets, just lessons.
        </Typography>
        <Typography variant="inherit" paragraph
        sx={{  fontSize: { xs: "1.2rem", sm: "1.5rem" }, lineHeight: 1.6 }}>
          Whether you're fresh out of high school, vibing in uni, or just wondering “what if?”,
          PathFinder KE lets you explore your future like a story game—with YOU in the driver's seat.
        </Typography>

        <Typography variant="inherit" component="h5" gutterBottom
         sx={{  fontSize: { xs: "2rem", sm: "2.5rem" } ,color: "#0899cf", textAlign: "center" }}>
          Why We Exist
        </Typography>
        <Typography variant="inherit" paragraph
        sx={{  fontSize: { xs: "1.2rem", sm: "1.5rem" }, lineHeight: 1.6 }}>
          Stuck on what to do after high school? You’re not alone. PathFinder KE
          turns career confusion into an adventure—play your future, test your
          options, and unlock your purpose before life hits you with the "real
          world" popup.
        </Typography>

        <Typography variant="inherit" component="h5" gutterBottom
         sx={{  fontSize: { xs: "2rem", sm: "2.5rem" }, color: "#0899cf", textAlign: "center" }}>
          Our Mission
        </Typography>
        <Typography variant="inherit" paragraph
        sx={{  fontSize: { xs: "1.2rem", sm: "1.5rem" }, lineHeight: 1.6 }}>
          To empower Kenyan youth to take charge of their future by simulating
          real-world academic and career decisions in an engaging, gamified way.
        </Typography>

        <Typography variant="inherit" component="h5" gutterBottom
         sx={{  fontSize: { xs: "2rem", sm: "2.5rem" } , color: "#0899cf",textAlign: "center" }}>
          PathFinder KE is built for:
        </Typography>
        <Box sx={{ width: "100%", mx: "auto", mb: 3 }}>
          <List
            sx={{
              width: "100%",
              p: { xs: 0, sm: 1 },
              fontFamily: "Audiowide",
            }}
          >
            <ListItem sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 1.5 } }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <EmojiObjectsIcon color="primary" fontSize="medium" />
              </ListItemIcon>
             <Typography variant="inherit" component="h5" gutterBottom
             sx={{  fontSize: { xs: "1.2rem", sm: "1.5rem" }, lineHeight: 1.6 }}>
          Immediate: Students (MVP)
        </Typography>
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 1.5 } }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <FamilyRestroomIcon color="secondary" fontSize="medium" />
              </ListItemIcon>
              <Typography variant="inherit" component="h5" gutterBottom
              sx={{  fontSize: { xs: "1.2rem", sm: "1.5rem" }, lineHeight: 1.6 }}>
         Later: Parents & Teachers (future updates)
        </Typography>

            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 1.5 } }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <BarChartIcon color="success" fontSize="medium" />
              </ListItemIcon>
              <Typography variant="inherit" component="h5" gutterBottom
              sx={{  fontSize: { xs: "1.2rem", sm: "1.5rem" }, lineHeight: 1.6 }}>
         Career Mentors & Policy Stakeholders (data insights)
        </Typography>
            </ListItem>
          </List>
        </Box>

        <Typography variant="inherit" paragraph
        sx={{  fontSize: { xs: "1.2rem", sm: "1.5rem" }, lineHeight: 1.6 }}>
          Built with React and Material-UI, PathFinder-KE offers a modern and
          responsive user experience.
        </Typography>
      </Box>
    </Container>
  </section>


)};



export default About;

/* const StyledWrapper = styled.div``; */

