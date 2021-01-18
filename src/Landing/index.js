import React from 'react';
import styled from 'styled-components';
import {
  Container
} from '../Custom_Components';
import { Helmet } from 'react-helmet';

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>Saakar Sales & Services</title>
        <meta name='description' content='Saakar Sales & Service. Cleaning Equipments'/>
      </Helmet>
      <Container>
        Landing
      </Container>
    </div>
  )
};

export default Landing;