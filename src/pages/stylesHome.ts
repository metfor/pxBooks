import styled from "styled-components";
import ImgNext from "next/image";
export const Container = styled.header`
  width: 100%;
  min-width: 560px;
  height: 51.1rem;

  background: #fcdb00;
`;
export const H1 = styled.h1`
  font-weight: 700;
  margin-top: 8rem;

`;
export const P = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 2rem;

`;

export const Content = styled.div`
  font-family: "Open Sans", sans-serif;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 12rem;
  @media(min-width:1024px){
  .book {
    margin-left: 45rem;
    margin-top: -20rem;
  }
  }
  @media(max-width:1024px){
    .book{
      width: 50%;
      margin-left: 50%;
    }
  }
`;
export const Container2 = styled.div`


    max-width: 1120px;
    height: 88.1rem;


  background: white;
`;

export const Content2 = styled.div`

  justify-content: center;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  max-width: 1120px;
  margin: 5rem auto;
  padding: 1rem 1rem 12rem;
  display:grid-template-columns Button {
    display: inline-flex;

    border: 0;
    font-weight: 700;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
  @media(min-width:680px){
    .titleBooks{margin-left: 5rem;}
    .textBooks{margin-left:5rem}

  }
  @media(max-width:680px){
    .titleBooks{
      margin-left: 1rem;
    }
    .textBooks{
      margin-left: 3rem;
      margin-bottom: 2rem;
    }

  }
`;
export const MyImage = styled(ImgNext)``;
export const BlockBook = styled.div`
 @media(min-width:680px){
  display: inline-flex;
  margin-top: 3rem;
  margin-left: 8rem;
  margin-bottom: 1rem;
 }
 @media(max-width:680px){
   margin-left:2rem;
   display: inline-flex;
   position: relative;
   margin-bottom: 2rem;

 }
`;
