import React from 'react';
import styled from 'styled-components';

const TeamCard = ({ name, role, avatar, github, linkedin, x }) => (
  <StyledWrapper>
    <div className="card">
      <div className="card-border-top" />
      <img className="card-photo" src={avatar} alt={name} />
      <span className="card-title">{name}</span>
      <p className="job">{role}</p>

      <div className="card-socials">
        {github && (
          <a className="card-socials-btn github" href={github} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" />
          </a>
        )}
        {linkedin && (
          <a className="card-socials-btn linkedin" href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" />
          </a>
        )}
        {x && (
          <a className="card-socials-btn x" href={x} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter-x" />
          </a>
        )}
      </div>
    </div>
  </StyledWrapper>
);

export default TeamCard;

const StyledWrapper = styled.div`
    .card {
        width: 20em;
        height: 30em;
        background: #0a1e2c;
        border-radius: 15px;
        box-shadow: 0 0 20px rgba(0, 234, 255, 0.3);
        position: relative;
        text-align: center;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        transition: transform 0.3s ease;
        margin: 2em;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card-border-top {
        width: 60%;
        height: 5px;
        background: #00eaff;
        margin: 1em auto 0 auto;
        border-radius: 0 0 15px 15px;
    }

    .card-photo {
      width: 10em;
      height: 12em;
      max-width: 100%;
      border-radius: 30px;
      object-fit: cover;
      display: block;
      margin: 2em auto 3em auto;
        transition: transform 0.3s ease;
   }
    .card-photo:hover {
        transform: scale(1.1);
    }

    

    .card-title {
        color: #fff;
        font-size: 1.6rem;
        font-weight: 600;
    }

    .job {
        color: #8ab4f8;
        font-size: 1.3rem;
        font-style: italic;
        margin: 0;
    }

    .card-socials {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
        opacity: 0;
        height: 0;
        transition: opacity 0.4s ease, height 0.4s ease;
    }

    .card:hover .card-socials {
        opacity: 1;
        height: auto;
    }

    .card-socials-btn {
        width: 1em;
        height: 1em;
        font-size: 1.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        cursor: pointer;
        color: #00eaff;
        transition: transform 0.2s ease;
    }

    .card-socials-btn:hover {
        transform: translateY(-4px);
    }

    @media (max-width: 768px) {
        .card {
            width: 90%;
            height: auto;
        }

        .card-photo {
            width: 80px;
            height: 80px;
        }

        .card-title {
            font-size: 1rem;
        }

        .job {
            font-size: 0.85rem;
        }
    }
`;
