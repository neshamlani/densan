import React from 'react';
import styled from 'styled-components';
import {
  Container as ContainerAtom,
  Title,
  Description
} from '../Custom_Components';

const Landing = () => {
  return (
    <Container>
      <Slider>
        <div>DATAS</div>
      </Slider>
      <Title margin='20px 0 0 20px'>Our Products</Title>
      <Description margin='10px 20px 0 20px'>
        {
          `Established in the year 2010, we 'Saakar Sales & Services' are the prominent manufacturer of Industrial cleaning machines in Gujarat. This range of product includes Cleaning Machine,Vacuum Cleaner, etc. These products are manufactured using super quality raw material which is procured from renowned vendors of the market. We provide Machine Maintinence Service.`
        }
      </Description>
    </Container>
  );
};

const Container = styled(ContainerAtom)`
  flex-direction:column;
  white-space:break-spaces;
  text-align:left;
`;

const Slider = styled.div`
  display:flex;
  flex-direction:column;
  height:500px;
  overflow-y:auto;
  margin:10px auto;
`;

export default Landing;