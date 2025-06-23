import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../style.css";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Container maxWidth="xl">
      <Box className="home-container">
        {/* Left Side: Text + Button */}
        <div className="text-section">
          <div className="text-container">
            <Typography variant="h2" component="h1" gutterBottom className="home-title">
              PathFinder-KE
            </Typography>

            <Typography variant="h5" className="home-subtitle">
              Play Your Path. Own Your Future.
            </Typography>
            <Typography variant="h5" className="home-caption">
              The ultimate career exploration gameplay for African learners.
            </Typography>
          </div>

          <div className="home-buttons">
            <Button
              component="a"
              href="#"
              className="animated-btn"
              onClick={(e) => {
                e.preventDefault();
                setShowPopup(true);
              }}
            >
              <span className="btn-label"><i className="bi bi-controller"></i> EXPLORE</span>
            </Button>
          </div>
        </div>

        {/* Right Side: Avatar */}
        <div className="avatar-wrapper">
          <div className="avatar-container">
            <img src="/avatar.png" alt="Avatar Character" />
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="popup" onClick={() => setShowPopup(false)}>
            <div
              className="popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="popup-close" onClick={() => setShowPopup(false)}>
                &times;
              </span>
              <h2>🛠️ Oops... Not Quite Ready!</h2>
              <p>The CareerVerse is under construction. The devs are currently googling “how to make a game.” 💻✨</p>
            </div>
          </div>
        )}
      </Box>
    </Container>
  );
};

export default Home;
