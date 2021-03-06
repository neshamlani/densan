import styled from "styled-components";

export const Title = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.title};
  font-size: ${({ theme: { fontSize } }) => fontSize.lg};
  color: ${({ theme: { color } }) => color.text.title};
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};

  @media (max-width: 700px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
  }
`;

export const SubTitle = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.subTitle};
  font-size: ${({ theme: { fontSize } }) => fontSize.md};
  color: ${({ theme: { color } }) => color.text.subTitle};
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};

  @media (max-width: 700px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  }
`;

export const Description = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.description};
  font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  color: ${({ theme: { color } }) => color.text.description};
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};

  @media (max-width: 700px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  }
`;

export const Button = styled.button`
  color: ${({ primary, theme: { color } }) =>
    primary ? color.text.subTitle : color.text.white};
  background-color: ${({ primary, theme: { color } }) =>
    primary ? color.background.primary : color.background.secondary};
  border-radius: 10px;
  min-width: 150px;
  width: ${({ width }) => (width ? width : "auto")};
  height: auto;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${({ theme: { fontSize } }) => fontSize.md};
  margin: ${({ margin }) => (margin ? margin : 0)};
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 700px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  }
`;

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 700px) {
    margin-top: 55px;
  }
`;

export const CustomLinks = styled.a`
  text-decoration: underline;
  text-decoration-color: ${({ theme: { color } }) => color.text.title};
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.subTitle};
  font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  color: ${({ theme: { color } }) => color.text.subTitle};
  margin-top: ${({ margin }) => margin && "10px"};
  width: fit-content;

  @media (max-width: 700px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  }
`;
