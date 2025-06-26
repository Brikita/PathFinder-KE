import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TeamCard from "../components/Card";
import team from "../data/Team";
import SliderGallery from "../components/SliderGallery";

const Team = () => (
  <Box sx={{ py: 6 }}>
    <Typography variant="inherit" component="h3" gutterBottom align="center"
      sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, color: "#0899cf", }}>
      Meet the Team
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
);

export default Team;
