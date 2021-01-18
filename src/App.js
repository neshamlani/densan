import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Div>
      <Header />
      <Switch>
        <Route path='/' component={Landing} />
      </Switch>
      <Footer />
    </Div>
  )
};

const Div = styled.div`
  width:100vw;
  height:auto;
`;

export default App;