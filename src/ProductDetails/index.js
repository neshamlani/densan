import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container, Title, Description } from "../Custom_Components";

const ProductDetails = ({ data }) => {
  const { id } = useParams();
  const details = data[id];
  console.log("details", details);
  return (
    <Container>
      <Title>{details.name}</Title>
      <Description>{details.description}</Description>
    </Container>
  );
};

export default ProductDetails;
