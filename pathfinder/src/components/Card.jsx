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
    /* before adding the photo to the div with the "card-photo" class, in the css clear the styles for .card-photo and remove .card-photo::before and .card-photo::after, then set the desired styles for .card- photo. */

    .card {
        --font-color: #ffffff;
        --font-color-sub: rgb(42, 134, 184);
        --bg-color: rgba(0, 111, 255, 0.11);
        --main-color: rgba(0, 208, 255, 0.5);
        width: 15rem;
        height: 20rem;
        background: var(--bg-color);
        box-shadow: var(--main-color) 0px 15px 25px, var(--main-color) 0px 5px 10px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        padding: 0.5rem;
    }

    .card .card-border-top {
        width: 60%;
        height: 2%;
        background: #01b8ff;
        margin: auto;
        border-radius: 0px 0px 15px 15px;
    }

    .card-photo {
        /* clear and add new css */
        width: 9rem;
        height: 9rem;
        border-radius: 30%;
        object-fit: fill;
    }


    .card-title {
        text-align: center;
        color: var(--font-color);
        font-size: 1.35rem;
        font-weight: 400;
    }

    .job {
        font-size: 1rem;
        color: #b3dcfd;
        text-align: center;
    }

    .card-socials {
        display: flex;
        height: 0;
        opacity: 0;
        margin-top: 20px;
        gap: 20px;
        transition: 0.5s;
        font-size: 1.5rem;
        
    }

    .card-socials-btn {
        width: 25px;
        height: 25px;
        border: none;
        color: #0aa3a3;
        cursor: pointer;
    }

    .card-socials-btn svg {
        width: 100%;
        height: 100%;
    }

    .card:hover > .card-socials {
        opacity: 1;
        height: 3rem;
    }

    .card-socials-btn:hover {
        transform: translateY(-5px);
        transition: all 0.15s;
    }
`;