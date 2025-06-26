import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const FormBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const grayColor = '#666'; // You can also use theme.palette.grey[700]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <StyledContainer maxWidth="sm">
      <FormBox>
        <Typography variant="inherit" component="h2" gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, color: '#0899cf', textAlign: 'center' }}>
          Contact Us
        </Typography>
        {submitted && (
          <StyledAlert severity="success">
            Thank you for reaching out! We will get back to you soon.
          </StyledAlert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          {['name', 'email', 'message'].map((field) => (
            <TextField
              key={field}
              fullWidth
              label={field === 'message' ? 'Message' : field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              value={form[field]}
              onChange={handleChange}
              margin="normal"
              required
              multiline={field === 'message'}
              rows={field === 'message' ? 4 : undefined}
              InputProps={{
                style: { color: grayColor },
              }}
              InputLabelProps={{
                style: { color: grayColor },
              }}
            />
          ))}
          <StyledButton type="submit" variant="contained" color="primary" disabled={submitted}>
            Send Message
          </StyledButton>
        </Box>
      </FormBox>
    </StyledContainer>
  );
};

export default Contact;
