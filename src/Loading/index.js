import React from "react";
import styled from "styled-components";
import loadingGif from "../assets/loading.png";

const Loading = () => {
  return (
    <LoadingGif>
      <ImageWrapper>
        <StyledImage src={loadingGif} alt="loading" />
      </ImageWrapper>
    </LoadingGif>
  );
};

const LoadingGif = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background: white;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  animation-name: rotate;
  animation-timing-function: linear;
  animation-duration: 6s;

  @keyframes rotate {
    0% {
      transform: rotate(90deg);
    }
    10% {
      transform: rotate(180deg);
    }
    20% {
      transform: rotate(270deg);
    }
    30% {
      transform: rotate(360deg);
    }
    40% {
      transform: rotate(450deg);
    }
    50% {
      transform: rotate(540deg);
    }
    60% {
      transform: rotate(630deg);
    }
    70% {
      transform: rotate(720deg);
    }
    80% {
      transform: rotate(810deg);
    }
    90% {
      transform: rotate(900deg);
    }
    100% {
      transform: rotate(990deg);
    }
  }
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

export default Loading;
