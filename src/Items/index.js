import React from "react";
import styled from "styled-components";
import { Description } from "../Custom_Components";

const Items = ({ imageUrl, name }) => {
  return (
    <ItemWrapper>
      <Image src={imageUrl} alt="Item Image" />
      <Description>{name}</Description>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  width: 240px;
  height: 240px;
  flex-direction: column;
  padding: 10px;
  align-items: center;

  &:hover {
    box-shadow: 5px 10px 10px grey;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

export default Items;
