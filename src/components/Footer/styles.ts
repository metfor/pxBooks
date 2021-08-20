import image from "next/image";
import styled from "styled-components";

export const FooterN = styled.footer`
  height: 58.1rem;
  background: black;
  display: flex;
  width: 100%;
`;
export const Content = styled.div`
  font-family: "Open Sans", sans-serif;
  max-width: 1120px;
  margin: 8rem auto;
  padding: 1rem 1rem 12rem;
  text-align: center;
`;
export const MyInput = styled.input`
  width: 28rem;
  height: 1.8rem;
  border-radius: 0.3rem;
  border: none;
  margin-right: 2rem;
`;
export const NetWork = styled.div``;
export const Adress = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Paragraph = styled.p`
  margin-top: 4rem;
  color: white;
  font-weight: 400;
  font-size: 0.9rem;
`;
export const Title = styled.h1`
  color: #fcdb00;
`;
export const Newss = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  Button {
    border: 0;
    font-weight: 700;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
export const MyImage = styled(image)``;
export const BoxImage = styled.div`
  display: inline-flex;
  margin: 0 2rem;
`;
