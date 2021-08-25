import styled from "styled-components";
import Image from "next/image";
export const Container = styled.header`

  width: 100%;
  min-width: 560px;
  height: 7.8rem;
  background: #fcdb00;
`;
export const Content = styled.div`

  max-width: 1120px;
  width: 90%;

  margin: 0 auto;
  padding: 1rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavLink = styled.nav`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin-left: 5rem;
  height: 5rem;
`;
export const MyImg = styled(Image)``;
export const MyA = styled.a`
 @media(min-width:680px){
 display:  inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 6.5rem;
  line-height: 5rem;
  transition: color 0.2s;


}
@media screen and (max-width: 680px) {
  display:inline-block;
  height: 2rem;
  position: relative;



font-size: 0.86rem;

}
  & + a {
    margin-left: 2rem;
  }
  &:hover {
    color: black;
  }
  &.active {
    color: black;
    font-weight: bold;
  }
  &.active::after {
    content: "";
    height: 3px;
    border-radius: 3px 3px 0 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: black;
  }
`;
