import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper className='w-full min-h-screen flex justify-center items-center'>
      <div className="loader w-full h-full flex justify-center items-center">
        <div className="loader__inner" />
        <div className="loader__orbit">
          <div className="loader__dot" />
          <div className="loader__dot" />
          <div className="loader__dot" />
          <div className="loader__dot" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    /* smooth background */
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.05) 30%,
      transparent 70%
    );
    overflow: hidden;
  }

  /* outside circle */
  .loader::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.6);
    animation: loader-spin 2s linear infinite;
  }

  /* rotating circle */
  .loader::after {
    content: "";
    position: absolute;
    inset: 10%;
    border-radius: 50%;
    background: conic-gradient(from 90deg, rgba(255, 255, 255, 0.2), transparent);
    filter: blur(2px);
    animation: loader-spin-reverse 1.5s linear infinite;
  }

  /* center circle */
  .loader__inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    animation: loader-pulse 1s ease-in-out infinite;
  }

  /* Container */
  .loader__orbit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: orbit-rotate 3s linear infinite;
  }

  /* dots */
  .loader__dot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
  }

  /* 4 dots */
  .loader__dot:nth-child(1) {
    transform: rotate(0deg) translate(60px);
  }
  .loader__dot:nth-child(2) {
    transform: rotate(90deg) translate(60px);
  }
  .loader__dot:nth-child(3) {
    transform: rotate(180deg) translate(60px);
  }
  .loader__dot:nth-child(4) {
    transform: rotate(270deg) translate(60px);
  }

  /* Animations */

  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader-spin-reverse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes loader-pulse {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
  }

  @keyframes orbit-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;

export default Loader;
