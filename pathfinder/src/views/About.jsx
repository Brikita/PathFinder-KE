import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const FlipCard = ({ icon, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleToggle = () => {
    setFlipped(prev => !prev);
  };

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={handleToggle}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <div className="card-content">
            <i className={icon} style={{ fontSize: '3rem' }}></i>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="card-content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <StyledWrapper>
      <section className="top-section">
        <div
          className="content"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2>Kenya’s Career Crisis</h2>
          <p>
            Many young Kenyans finish high school without a clear understanding of the career paths ahead.
            Lack of access to guidance, relatable resources, and the ability to test potential futures creates fear, confusion, and mismatched decisions.
            PathFinder-KE changes that.
          </p>
          <Link to="/discover" className="learn-more">Learn More</Link>
        </div>
      </section>

      <section className="bottom-section">
        <div className="bottom-content">
          <h2 className="section-title">Our Solution</h2>
          <div className="card-container">
            <FlipCard
              icon="bi bi-controller"
              title="Gamified"
              description="We turn your choices into interactive gameplay so you can explore different paths safely and see how decisions shape your future."
            />
            <FlipCard
              icon="bi bi-journal-bookmark"
              title="Educational"
              description="Every experience is rooted in real-world data, ensuring you not only play but learn critical lessons for life and school."
            />
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
};

export default About;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .top-section {
    background-color: #001934;
    color: #ffffff;
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .top-section .content {
    max-width: 700px;
  }

  .top-section h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1ce6ff;
  }

  .top-section p {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    font-family: "Fredoka", sans-serif;
  }

  .learn-more {
    background-color: #002852;
    color: #00e4ff;
    padding: 1rem 1.5rem;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .learn-more:hover {
    background-color: #009ace;
    color: #fff;
  }

  .bottom-section {
    background-color: #003366;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
  }

  .bottom-content {
    width: 100%;
    max-width: 1100px;
  }

  .section-title {
    color: #1ce6ff;
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  .card-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .flip-card {
    background-color: transparent;
    width: 26rem;
    height: 20rem;
    perspective: 1000px;
    cursor: pointer;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.3rem;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card-inner.flipped,
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid #0899cf;
    border-radius: 1rem;
    background: linear-gradient(
      120deg,
      #003366 40%,
      #005288 60%,
      #007ab3 80%,
      #00c4ff 95%
    );
    color: #ffffff;
  }

  .flip-card-back {
    transform: rotateY(180deg);
    text-align: left;
  }

  .card-content {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    .flip-card {
      width: 20rem;
    }

    .top-section p {
      font-size: 1.5rem;
    }
  }
`;
