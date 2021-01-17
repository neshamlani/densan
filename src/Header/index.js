import React from 'react';
import styled from 'styled-components';
import {
  Title,
  Description,
  Button
} from '../Custom_Components';

const Header = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>Saakar Sales & Services</Title>
        <Description>Laskana, Surat, Gujarat | GST No. 24ABUFS8801J1ZM</Description>
      </LeftWrapper>
      <RightWrapper>
        <Button primary={1}>Call Now</Button>
        <Button>Send Mail</Button>
      </RightWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  padding:20px;
  position:fixed;
  top:0;
  width:calc(100% - 40px);
  height:55px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow:0 5px 20px gray;
`;

const LeftWrapper = styled.div`
  display:flex;
  flex-direction:column;
`;

const RightWrapper = styled.div`
  display:flex;
`;

export default Header;