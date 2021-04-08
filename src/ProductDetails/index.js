import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container, Title, Description } from "../Custom_Components";
import axios from "axios";
import keys from "lodash/keys";
import map from "lodash/map";
import { Link } from "react-router-dom";
import Loader from "../Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [key, setKey] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://densan-saakar-sales-default-rtdb.firebaseio.com/${id}.json`)
      .then((resp) => {
        setLoading(false);
        setDetails(resp.data);
        setKey(keys(resp.data.details));
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  }, []);

  const data = { ...details };
  const productDetails = data.details;
  if (isLoading) return <Loader />;
  return (
    <Container>
      <Page>
        <Link to="/">Home</Link>
        <Title margin="10px 20px 0 20px">{data.name}</Title>
        <Wrapper>
          <LeftWrapper>
            <StyledImage src={data.image} />
          </LeftWrapper>
          <RightWrapper>
            <Description>{data.description}</Description>
            <Title margin="10px 0">Product Details</Title>
            {key && (
              <StyledTable>
                {key.map((val) => {
                  let title = val;
                  title = title.split("_");
                  title = title.join(" ");
                  return (
                    <StyledTr>
                      <td>
                        <Description>{title}</Description>
                      </td>
                      <td>
                        <Description>{productDetails[val]}</Description>
                      </td>
                    </StyledTr>
                  );
                })}
              </StyledTable>
            )}
            <Title margin="10px 0">Features</Title>
            <StyledTable>
              {map(data.features, (val) => (
                <StyledTr>
                  <td>
                    <Description>{val}</Description>
                  </td>
                </StyledTr>
              ))}
            </StyledTable>
          </RightWrapper>
        </Wrapper>
      </Page>
    </Container>
  );
};

const Page = styled.div`
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 449px) {
    flex-direction: column;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;

  @media (max-width: 449px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 80%;
  height: auto;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 449px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const StyledTable = styled.table`
  border: 1px solid ${({ theme }) => theme.color.background.secondary};
  border-collapse: collapse;
`;

const StyledTr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.color.background.secondary};
`;

export default ProductDetails;
