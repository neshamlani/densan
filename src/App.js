import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Div>
      <Header />
      <Switch>
        <Route path="/details" component={ProductDetails} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Div>
  );
};

const Div = styled.div`
  min-height: 100vh;
  height: auto;
`;

export default App;
