import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from '../components/Footer';

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

const grayColor = '#666';

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
    <StyledWrapper>
      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-left">
            <div className="text-wrapper">
              <h2>Join the CareerVerse Today</h2>
              <p>Reach us through:</p>
              <ul>
                <li><a href="tel:+254768751223" className="hover-underline-animation"><i className="bi bi-telephone-fill"></i> +254 768 751 223</a></li>
                <li><a href="mailto:pathfinderke29@gmail.com" className="hover-underline-animation"><i className="bi bi-envelope-fill"></i> pathfinderke29@gmail.com</a></li>
                <li><a href="#" className="hover-underline-animation"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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
                InputProps={{ style: { color: grayColor } }}
                InputLabelProps={{ style: { color: grayColor } }}
              />
            ))}
            <StyledButton type="submit" variant="contained" color="primary" disabled={submitted}>
              Send Message
            </StyledButton>
          </Box>
        </FormBox>
      </StyledContainer>

      <Footer />
    </StyledWrapper>
  );
};

export default Contact;

const StyledWrapper = styled.div`
  background: url("/game-bg.jpg") no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .contact-content {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .contact-container {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    padding: 4rem 6rem;
  }

  .contact-left {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .text-wrapper {
    max-width: 500px;
    color: #ffffff;
  }

  .contact-left h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1ce6ff;
  }

  .contact-left ul {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
  }

  .contact-left li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  .contact-left li i {
    font-size: 1.3rem;
    color: #0077b5;
  }

  .contact-left li a {
    text-decoration: none;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    .contact-container {
      padding: 2rem;
      justify-content: center;
    }
    .text-wrapper {
      text-align: center;
    }
  }

  .hover-underline-animation {
    display: inline-block;
    position: relative;
  }

  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #1ce6ff;
    transform-origin: bottom right;
    transition: transform 0.4s ease-out;
    border-radius: 20px;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
