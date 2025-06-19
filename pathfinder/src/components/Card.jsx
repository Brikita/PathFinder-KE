import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const TeamCard = ({ name, role, avatar, github, linkedin, x }) => (
  <MuiCard
    sx={{
      width: 140,
      minHeight: 180,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 2,
      mx: 'auto'
    }}
    elevation={3}
  >
    <Avatar
      alt={name}
      src={avatar}
      sx={{ width: 80, height: 80, mb: 1.5 }}
    />
    <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 0 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {name}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {role}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center', mt: 1 }}>
      <Stack direction="row" spacing={1}>
        <Button
          size="small"
          color="inherit"
          href={github}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          sx={{ minWidth: 0, p: 1 }}
        >
          <GitHubIcon fontSize="small" />
        </Button>
        <Button
          size="small"
          color="primary"
          href={linkedin}
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          sx={{ minWidth: 0, p: 1 }}
        >
          <LinkedInIcon fontSize="small" />
        </Button>
        <Button
          size="small"
          color="secondary"
          href={x}
          target="_blank"
          rel="noopener"
          aria-label="X"
          sx={{ minWidth: 0, p: 1 }}
        >
          <XIcon fontSize="small" />
        </Button>
      </Stack>
    </CardActions>
  </MuiCard>
);

export default TeamCard;