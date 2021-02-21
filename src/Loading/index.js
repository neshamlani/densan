import React from "react";
import styled from "styled-components";
import loadingGif from "../assets/loading.png";

const Loading = () => {
  return (
    <LoadingGif>
      <img src={loadingGif} alt="loading" />
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
`;

export default Loading;
