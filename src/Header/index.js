import React, { useState } from "react";
import styled from "styled-components";
import { Title, Description, Button } from "../Custom_Components";
import MediaQuery from "react-responsive";
import Hamburger from "../assets/hamburger.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <MediaQuery maxWidth={700}>
        <RightWrapper>
          <img
            src={Hamburger}
            width="40px"
            height="30px"
            onClick={() => setIsOpen(true)}
            alt="hamburger icon"
          />
          <Title>Saakar Sales & Services</Title>
        </RightWrapper>
        <Drawer open={isOpen}>
          <a href="tel:08048720017">
            <Button primary={1} margin="0 5px">
              Call Now
            </Button>
          </a>
          <Button margin="0 5px">Send Mail</Button>
        </Drawer>
        <Backdrop onClick={() => setIsOpen(false)} open={isOpen} />
      </MediaQuery>
      <MediaQuery minWidth={700}>
        <LeftWrapper>
          <Title>Saakar Sales & Services</Title>
          <Description>
            Laskana, Surat, Gujarat | GST No. 24ABUFS8801J1ZM
          </Description>
        </LeftWrapper>
        <RightWrapper>
          <a href="tel:08048720017">
            <Button primary={1} margin="0 5px">
              Call Now
            </Button>
          </a>
          <Button margin="0 5px">Send Mail</Button>
        </RightWrapper>
      </MediaQuery>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  position: fixed;
  top: 0;
  width: calc(100% - 40px);
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 20px gray;
  background: ${({ theme: { color } }) => color.text.white};
  z-index: 999;
  @media (max-width: 700px) {
    height: 40px;
    padding: 5px 20px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightWrapper = styled.div`
  display: flex;

  @media (max-width: 700px) {
    gap: 20px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  margin-left: -20px;
`;

const Drawer = styled.div`
  position: absolute;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1001;
  top: 0;
  width: 0%;
  min-height: 100vh;
  height: auto;
  background: white;
  margin-left: -20px;
  animation-name: slide;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes slide {
    0% {
      width: 6.36%;
    }
    10% {
      width: 12.72%;
    }
    20% {
      width: 19.08%;
    }
    30% {
      width: 25.44%;
    }
    40% {
      width: 31.8%;
    }
    50% {
      width: 38.16%;
    }
    60% {
      width: 44.52%;
    }
    70% {
      width: 50.88%;
    }
    80% {
      width: 57.24%;
    }
    90% {
      width: 63.6%;
    }
    100% {
      width: 70%;
    }
  }
`;

export default Header;
