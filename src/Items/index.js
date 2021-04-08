import React from "react";
import styled from "styled-components";
import { Description, CustomLinks } from "../Custom_Components";

const Items = ({ imageUrl, name, id }) => {
  return (
    <ItemWrapper>
      <CustomLinks href={`/details/${id}`}>
        <Image src={imageUrl} alt="Item Image" />
        <Description>{name}</Description>
      </CustomLinks>
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

  @media (max-width: 449px) {
    width: 140px;
    height: 140px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;

  @media (max-width: 449px) {
    width: 100px;
    height: 100px;
  }
`;

export default Items;
