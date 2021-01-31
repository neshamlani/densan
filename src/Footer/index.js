import React from 'react';
import styled from 'styled-components';
import {
  Container,
  CustomLinks,
  Description,
  SubTitle
} from '../Custom_Components';


const Footer = () => {
  return (
    <Wrapper>
      <LeftWrapper grow={2}>
        <SubTitle>About Company</SubTitle>
        <Description>Nature Of Business: Manufacturer</Description>
        <Description>Total Number of Employees: 11 to 25 People</Description>
        <Description>Year of Establishment: 2010</Description>
        <Description>Legal Status of Firm: Partnership Firm</Description>
        <Description>Annual Turnover: Rs. 2 - 5 Crore</Description>
        <Description>GST No.: 24ABUFS8801J1ZM</Description>
        <Description>
          {
            `
Established in the year 2010, we 'Saakar Sales & Services' 
are the prominent manufacturer of Industrial 
cleaning machines in Gujarat. This range of product includes 
Cleaning Machine, Vacuum Cleaner, etc. 
These products are manufactured using super quality 
raw material which is procured from renowned vendors of the market. 
We provide Machine Maintinence Service.
`
          }
        </Description>
      </LeftWrapper>
      <LeftWrapper grow={1}>
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
  background-color:${({ theme: { color } }) => color.background.primary};
  justify-content:space-around;
  padding:20px;
  color:${({ theme: { color } }) => color.text.title};
  font-weight:${({ theme: { fontWeight } }) => fontWeight.subTitle};
  width:calc(100% - 40px);
  margin:0;
  @media(max-width:700px){
    flex-direction:column;
  }
  @media(min-width:900px){
    flex-direction:row;
  }
`;

const LeftWrapper = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:${({ grow }) => grow};
  white-space:break-spaces;
  @media(max-width:700px){
    flex-grow:1;
    &:nth-child(2){
      margin-top:10px;
    }
  }
`;

const RightWrapper = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  @media(max-width:700px){
    flex-grow:1;
    margin-top:10px;
  }
`;

export default Footer;