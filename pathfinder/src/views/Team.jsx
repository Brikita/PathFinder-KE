import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import TeamCard from "../components/Card";
import team from "../data/Team";
import SliderGallery from "../components/SliderGallery";

const Team = () => (
  <StyledWrapper>
    <Box className="team-container">
      <Typography variant="h4" component="h3" gutterBottom align="center">
        Meet the Team
      </Typography>

      <Typography variant="subtitle1" align="center" className="team-tagline">
        The minds behind the mission.
      </Typography>

      <SliderGallery width="22em" height="32em">
        {team.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
            github={member.github}
            linkedin={member.linkedin}
            x={member.x}
          />
        ))}
      </SliderGallery>
    </Box>
  </StyledWrapper>
);

export default Team;

const StyledWrapper = styled.div`
  .team-container {
    padding: 6rem 1rem;
    color: white;
    text-align: center;
  }

  h3 {
    font-family: "Audiowide", sans-serif;
    font-size: 2.8rem;
    font-weight: 600;
    color: #1ce6ff;
  }

  .team-tagline {
    font-family: "Audiowide", sans-serif;
    font-size: 1.4rem;
    color: #ffffff;
    margin-bottom: 3rem;
  }
`;
