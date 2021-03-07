import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import map from "lodash/map";
import Loading from "./Loading";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://densan-saakar-sales-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        const resp = map(response.data);
        setData(resp);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      })
      .catch((e) => {
        console.log(e);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Div>
      <Header />
      <Switch>
        <Route
          path="/details/:id"
          component={() => <ProductDetails data={data} />}
        />
        <Route path="/" component={() => <Landing data={data} />} />
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
