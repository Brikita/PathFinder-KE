import React from 'react';
import styled from 'styled-components';

const SliderGallery = ({ children, width = '12rem', height = '18rem' }) => {
  const cardCount = React.Children.count(children);

  return (
    <SliderWrapper
      style={{
        '--width': width,
        '--height': height,
        '--quantity': cardCount,
        '--duration': '23s',


      }}
    >
      <div className="list">
        {React.Children.map(children, (child, index) => (
          <div className="item" style={{ '--position': index + 1}}>
            {child}
          </div>
        ))}
      </div>
    </SliderWrapper>
  );
};

export default SliderGallery;

const SliderWrapper = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
    padding-top: 3rem;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);

  .list {
    display: flex;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
      gap: 0.2rem; /* Reduced spacing between items */
  }

  .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun var(--duration) linear infinite;
    animation-delay: calc((var(--duration) / var(--quantity)) * (var(--position) - 1) - var(--duration));
    transition: filter 0.5s;
  }

  &:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }

  .item:hover {
    filter: grayscale(0);
  }

  &[reverse="true"] .item {
    animation: reversePlay var(--duration) linear infinite;
  }

  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: calc(var(--width) * -1 );
    }
  }

  @keyframes reversePlay {
    from {
      left: calc(var(--width) * -1 );
    }
    to {
      left: 100%;
    }
  }
    
  @media (max-width: 1024px) {
  height: auto;
  overflow: visible;

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
    justify-items: center;
    min-width: unset;
  }

  .item {
    position: static;
    animation: none;
    width: 16rem;
    filter: none !important;
    transition: none !important;
  }

  .item:hover {
    filter: none !important;
  }
}

@media (max-width: 480px) {
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: unset;
  }

  .item {
    width: 16rem;
    margin-bottom: 0;
  }
}





`;
