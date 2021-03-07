import React from "react";
import styled from "styled-components";
import { Title, Description, Button } from "../Custom_Components";
import { Link } from "react-router-dom";

const SliderItems = ({ imageUrl, name, description, price, id }) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <StyledImage src={imageUrl} atl="image" />
      </LeftWrapper>
      <RightWrapper>
        <RightTopWrapper>
          <Title>{name}</Title>
          <Description margin="20px 0 0 0">{description}</Description>
          <Description margin="10px 0 0 0">{price}</Description>
        </RightTopWrapper>
        <RightBottomWrapper>
          <Link
            to={{
              pathname: `/details/${id}`,
            }}
          >
            <Button primary={1} width="100px">
              Read More
            </Button>
          </Link>
        </RightBottomWrapper>
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
`;

const LeftWrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 80%;
  height: auto;
`;

const RightWrapper = styled.div`
  width: 60%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const RightTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightBottomWrapper = styled.div`
  display: flex;
`;

export default SliderItems;
