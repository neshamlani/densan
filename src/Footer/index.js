import React from 'react';
import styled from 'styled-components';
import {
  Container,
  CustomLinks,
  SubTitle
} from '../Custom_Components';


const Footer = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <SubTitle>Our Company</SubTitle>
        <CustomLinks href='/' target='_blank' margin={1}>Profile</CustomLinks>
        <CustomLinks href='/' target='_blank' margin={1}>Distributer Enquiry Form</CustomLinks>
        <CustomLinks href='/' target='_blank' margin={1}>Corporate Video</CustomLinks>
        <CustomLinks href='/' target='_blank' margin={1}>Contact Us</CustomLinks>
      </LeftWrapper>
      <RightWrapper>
        <SubTitle>Our Products</SubTitle>
        <CustomLinks href='/' target='_blank' margin={1}>Vacuum Cleaner</CustomLinks>
        <CustomLinks href='/' target='_blank' margin={1}>Sweeper Machine</CustomLinks>
        <CustomLinks href='/' target='_blank' margin={1}>Vacuum Motor</CustomLinks>
        <CustomLinks href='/' target='_blank' margin={1}>Scrubber Drier</CustomLinks>
        <CustomLinks href='/' target='_blank' margin={1}>Cleaning Machine</CustomLinks>
      </RightWrapper>
    </Wrapper>
  )
};

const Wrapper = styled(Container)`
  position:absolute;
  bottom:0;
  background-color:${({ theme: { color } }) => color.background.primary};
  justify-content:space-around;
  padding:20px;
  color:${({ theme: { color } }) => color.text.title};
  font-weight:${({ theme: { fontWeight } }) => fontWeight.subTitle};
  width:calc(100% - 40px);
  margin:0;
`;

const LeftWrapper = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
`;

const RightWrapper = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
`;

export default Footer;