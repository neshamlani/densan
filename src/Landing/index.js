import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Container as ContainerAtom,
  Title,
  Description,
} from "../Custom_Components";
import SliderItems from "../SliderItems";
import Items from "../Items";

const Landing = ({ data }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  return (
    <Container>
      <SliderWrapper {...settings}>
        {data.map((val, index) => (
          <SliderItems
            name={val.name}
            imageUrl={val.image}
            description={val.description}
            price={val.price}
            key={index}
            id={index}
          />
        ))}
      </SliderWrapper>
      <Title margin="20px 0 0 20px">Our Products</Title>
      <Description margin="10px 20px 0 20px">
        {`Established in the year 2010, we 'Saakar Sales & Services' are the prominent manufacturer of Industrial cleaning machines in Gujarat. This range of product includes Cleaning Machine,Vacuum Cleaner, etc. These products are manufactured using super quality raw material which is procured from renowned vendors of the market. We provide Machine Maintinence Service.`}
      </Description>
      <ProductWrapper>
        {data.map((val, index) => (
          <Items imageUrl={val.image} name={val.name} key={index} />
        ))}
      </ProductWrapper>
    </Container>
  );
};

const Container = styled(ContainerAtom)`
  flex-direction: column;
  white-space: break-spaces;
  text-align: left;
`;

const SliderWrapper = styled(Slider)`
  width: 90%;
  height: 400px;
  margin: 10px auto 10px;

  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    color: ${({ theme }) => theme.color.background.primary};
  }

  @media (max-width: 700px) {
    height: 100%;
    width: 80%;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  @media (max-width: 449px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Landing;
