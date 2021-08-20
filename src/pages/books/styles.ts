import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 782) {
    height: 88.1rem;
  }
  @media (max-width: 2520) {
    height: 51.1rem;
  }
  background: white;
`;
export const Content = styled.div`
  display: flex;

  font-family: "Open Sans", sans-serif;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 12rem;
`;

export const BookBox = styled.div`
  margin: 4.3rem auto;

  img {
    margin: 2rem;
  }
`;
export const Title = styled.h1``;
export const MyImage = styled.img`
  margin: 2rem;
`;
export const Paragraph = styled.p``;
export const DateBook = styled.h2``;
